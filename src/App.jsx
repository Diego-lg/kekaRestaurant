import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Menu from './components/Menu';
    import AboutUs from './components/AboutUs';
    import Footer from './components/Footer';
    import './App.css'

    function App() {
      return (
        <>
          <Header />
          <Hero />
          <Menu />
          <AboutUs />
          <Footer />
        </>
      );
    }

    export default App;
