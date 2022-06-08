import brand from "../../images/brandsvg.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="brand nav-brand">
        <NavLink to="#" href="/">
          <img src={brand} alt="Discords brand" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/download">Download</NavLink>
        </li>
        <li>
          <NavLink to="/nitro">Nitro</NavLink>
        </li>
        <li>
          <NavLink to="/safety">Safety</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
      </ul>
      <div className="nav-login">
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
