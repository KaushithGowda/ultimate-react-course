import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

function Header() {
  const name = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col justify-center bg-yellow-400 px-5 py-8 sm:flex-row sm:justify-between">
      <Link to="/">
        <div className="text-center font-mono text-lg font-semibold uppercase tracking-[0.2rem] sm:text-left sm:text-xl sm:tracking-[0.6rem]">
          Fast React Pizza Co
        </div>
      </Link>
      <div className="flex items-center justify-center space-x-5">
        <Search />
        {name && (
          <div className="hidden font-mono text-lg font-semibold sm:text-xl lg:block">
            {name}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
