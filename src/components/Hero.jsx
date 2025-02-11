import React from 'react';
    import './Hero.css';

    function Hero() {
      return (
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Welcome to Keka's Restaurant</h1> {/* Changed name */}
              <p>A Fine Dining Experience</p> {/* Added description */}
              <a href="#" className="button">View Menu</a>
            </div>
          </div>
        </section>
      );
    }

    export default Hero;
