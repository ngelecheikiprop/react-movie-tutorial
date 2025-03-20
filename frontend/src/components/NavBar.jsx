import { Link } from "react-router-dom";

function NavBar(){
    return <nav className="navabar" >
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites">Favourites</Link>
        </div>
        </nav>
}

export default NavBar;