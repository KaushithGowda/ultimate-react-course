import { useEffect, useState, useRef } from 'react';
import StarRating from './components/StarRating';

// const tempMovieData = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt0133093',
//     Title: 'The Matrix',
//     Year: '1999',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt6751668',
//     Title: 'Parasite',
//     Year: '2019',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: 'tt0088763',
//     Title: 'Back to the Future',
//     Year: '1985',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Key = 'ac8d69b';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  function handleAddWatched(movie) {
    setWatched((w) => [...w, movie]);
  }

  function handleSelectId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function clearSelectedId() {
    setSelectedId(null);
  }

  function removeMovie(id) {
    setWatched((w) => w.filter((i) => i.imdbID !== id));
  }

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setError('');
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${Key}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error('Unable to fetch movies!');
        const data = await res.json();
        if (data.Response === 'False')
          throw new Error(`⛔️ Movies not found for ${query}!`);
        setMovies(data.Search || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length > 0) setIsLoading(true);
    else setIsLoading(false);
    if (query.length < 3) {
      setError('');
      setMovies([]);
      return;
    }
    getMovies();

    return () => controller.abort();
  }, [query]);

  useEffect(() => {
    function callback(e) {
      if (e.keyCode === 27) clearSelectedId();
    }
    document.addEventListener('keydown', callback);
    return () => document.removeEventListener(callback);
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <Results movies={{ movies }} />
      </NavBar>
      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <Movies movies={movies} handleSelectId={handleSelectId} />
          )}
          {error && <Error message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              clearSelectedId={clearSelectedId}
              handleAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <MoviesHeader watched={watched} />
              <WatchedMovies watched={watched} removeMovie={removeMovie} />
            </>
          )}
        </Box>
      </main>
    </>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button setIsOpen={setIsOpen}>{isOpen ? '–' : '+'}</Button>
      {isOpen && children}
    </div>
  );
}

function MoviesHeader({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovies({ watched, removeMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
            <button
              onClick={() => removeMovie(movie.imdbID)}
              className="btn-delete"
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Movies({ movies, handleSelectId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <li onClick={() => handleSelectId(movie.imdbID)} key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Button({ setIsOpen, children }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {children}
    </button>
  );
}

function NavBar({ movies, children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);
  useEffect(() => {
    // function (params) {
    // }
    // return () => document.removeEventListener('')
  }, []);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Results({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function Error({ message }) {
  return <p className="error">{message}</p>;
}

function MovieDetails({
  selectedId,
  clearSelectedId,
  handleAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isWatched, setIsWatched] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const [watchedUserRating, setWatchedUserRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    Title: title,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    Actors: actors,
    Director: director,
    Plot: plot,
    imdbRating,
  } = movie;

  function handleAdd() {
    const newMovie = {
      imdbID: selectedId,
      Title: title,
      Year: released,
      Poster: poster,
      runtime,
      imdbRating,
      userRating,
    };
    handleAddWatched(newMovie);
    clearSelectedId();
  }

  useEffect(() => {
    function checkWatched() {
      setIsWatched(false);
      watched.map((i) => {
        if (i.imdbID === selectedId) {
          setIsWatched(true);
          setWatchedUserRating(i.userRating);
        }
        return null;
      });
    }
    async function getMovieDetail() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${Key}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getMovieDetail();
    checkWatched(selectedId);
  }, [selectedId, watched]);

  useEffect(() => {
    const temp = `Movie | ${title}`;
    document.title = temp;

    return () => (document.title = 'usePopcorn');
  }, [selectedId, title]);

  return (
    <div className="details">
      {!loading ? (
        <>
          <header>
            <button className="btn-back" onClick={() => clearSelectedId()}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating number={10} onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
