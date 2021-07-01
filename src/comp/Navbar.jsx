import "./Navbar.scss";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    console.log(location);
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Quantum Tunneling Simulator</h2>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className={location.pathname==="/" && "active"}>Home</Link></li>
                <li><Link to="/about" className={location.pathname==="/about" && "active"}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;