import { useEffect } from 'react';
import PageDots from './components/PageDots';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyItaly from './components/WhyItaly';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Add appear animations on scroll
    const appearElements = document.querySelectorAll('.appear-element');
    const appearObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    appearElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      appearObserver.observe(el);
    });

    return () => {
      appearElements.forEach(el => appearObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <PageDots />
      <div className="main-container">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <WhyItaly />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
