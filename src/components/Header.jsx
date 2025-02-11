import React from 'react';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <div className="container">
            <nav>
              <div className="logo">Keka's Restaurant</div> {/* Changed name */}
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
