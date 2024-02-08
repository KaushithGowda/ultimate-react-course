import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
  return (
    <div>
      <Link to="/">Fast Pizza Co</Link>
      <Search />
    </div>
  );
}

export default Header;
