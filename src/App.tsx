import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    // <Router>
    //   <ScrollToTop />
    //   <div className="page-container">
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/doctors" element={<Doctors />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
    <Router>
      <Navbar/>
  <section id="home" className="scroll-mt-20">
    <Home />
  </section>

  <section id="about" className="scroll-mt-20">
    <About />
  </section>

  <section id="services" className="scroll-mt-20">
    <Services />
  </section>

  <section id="doctors" className="scroll-mt-20">
    <Doctors />
  </section>

  <section id="contact" className="scroll-mt-20">
    <Contact />
  </section>

  <Footer/>
</Router>
  );
}

export default App;