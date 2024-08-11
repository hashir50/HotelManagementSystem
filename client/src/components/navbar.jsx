import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ centerText, backgroundImage }) {
  return (
    <div className="container-fluid p-0 bg-img" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="position-relative">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Toggler for mobile view */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink 
                    className="nav-link" 
                    to="/" 
                    activeClassName="active" 
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className="nav-link" 
                    to="/room" 
                    activeClassName="active"
                  >
                    Rooms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className="nav-link" 
                    to="/about" 
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className="nav-link" 
                    to="/contact" 
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Centered Logo */}
              <Link className="navbar-brand mx-auto" to="/">
                <img src="src/assets/logo.png" alt="Logo" className="logo-sm" />
              </Link>

              {/* Links on the right */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary btn-book" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="overlay">
          <h1 className="display-4">{centerText}</h1>
          <p className="lead">Unlock to enjoy the view of Martine</p>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
