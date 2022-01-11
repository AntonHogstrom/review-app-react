import "./MainNav.css";
import { NavLink } from "react-router-dom";

//main navigation component with NavLinks that allow linking to pages
//and can also highlight the current page
const MainNav = () => {
  return (
    <nav className="MainNav">
      <ul>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/newreview">New Review</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
