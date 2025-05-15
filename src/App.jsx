import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';
import Home from './Home';
import './index.css';
import Sponsors from './sponsors';
import Event from './Event';
import Alumni from './Alumni';
import Preloader from './Preloader';

function App() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;
      
      const homeHeight = homeRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // Calculate opacity (1 at top, 0 when scrolled 50% past home section)
      const opacity = Math.max(0, 1 - (scrollPosition / (homeHeight * 0.5)));
      setBackgroundOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: backgroundOpacity,
            transition: 'opacity 0.5s ease-out'
          }}>
            <AnimatedBackground />
          </div>
          
          <Navbar />
          
          <main>
            <div ref={homeRef}>
              <Home />
            </div>
            <Event />
            <Alumni />
            <Sponsors />
          </main>
        </>
      )}
    </>
  );
}

export default App;