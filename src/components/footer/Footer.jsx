import "../../styles.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    {/* <!----------------------------------- Footer  ----------------------------------------------------------> */}
    <footer>
      <nav class="footer-nav">
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><Link to="/#about" className="link">About</Link></li>
            <li><Link to="/#experience" className="link">Experience</Link></li>
            <li><Link to="/#projects" className="link">Projects</Link></li>
            <li><Link to="/#contact" className="link">Contact</Link></li>
          </ul>
        </div>
      </nav>
      {/* <!-- Testing Copyright Date auto update --> */}
      <p>Copyright &copy; {new Date().getFullYear()} Sheenay. All Rights Reserved.</p>
    </footer>
    {/* <!---------------------------------- ------------------------  ----------------------------------------> */}

</>
  )
}
