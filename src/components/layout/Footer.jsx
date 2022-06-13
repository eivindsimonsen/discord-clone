import { NavLink } from "react-router-dom";
import brand from "../../images/brandsvg.svg";

function Footer() {
  return (
    <footer>
      <section className="footer-nav">
        <div className="footer-nav__heading">
          <h4>Imagine a place</h4>
        </div>
        <div></div>
        <div></div>
        <div className="footer-nav__lists">
          <h5>Product</h5>
          <nav>
            <ul>
              <li>
                <NavLink to="#">Download</NavLink>
              </li>
              <li>
                <NavLink to="#">Nitro</NavLink>
              </li>
              <li>
                <NavLink to="#">Status</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-nav__lists">
          <h5>Company</h5>
          <nav>
            <ul>
              <li>
                <NavLink to="#">About</NavLink>
              </li>
              <li>
                <NavLink to="#">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="#">Branding</NavLink>
              </li>
              <li>
                <NavLink to="#">Newsroom</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-nav__lists">
          <h5>Resources</h5>
          <nav>
            <ul>
              <li>
                <NavLink to="#">College</NavLink>
              </li>
              <li>
                <NavLink to="#">Support</NavLink>
              </li>
              <li>
                <NavLink to="#">Safety</NavLink>
              </li>
              <li>
                <NavLink to="#">Blog</NavLink>
              </li>
              <li>
                <NavLink to="#">Feedback</NavLink>
              </li>
              <li>
                <NavLink to="#">Developers</NavLink>
              </li>
              <li>
                <NavLink to="#">StreamKit</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-nav__lists">
          <h5>Policies</h5>
          <nav>
            <ul>
              <li>
                <NavLink to="#">Terms</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy</NavLink>
              </li>
              <li>
                <NavLink to="#">Cookie Settings</NavLink>
              </li>
              <li>
                <NavLink to="#">Guidelines</NavLink>
              </li>
              <li>
                <NavLink to="#">Acknowledgements</NavLink>
              </li>
              <li>
                <NavLink to="#">Licenses</NavLink>
              </li>
              <li>
                <NavLink to="#">Moderation</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <hr />
      <div className="footer-nav__bottom">
        <div className="brand nav-brand">
          <NavLink to="#" href="/">
            <img src={brand} alt="Discords brand" />
          </NavLink>
        </div>
        <div className="nav-sign-up">
          <NavLink to="#">Sign up</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
