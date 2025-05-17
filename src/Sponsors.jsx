import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Sponsors.css';

// Import sponsor images statically
import sponsor1 from './sponsors/sponsor 1.jpeg';
import sponsor2 from './sponsors/sponsor 2.jpg';
import sponsor3 from './sponsors/sponsor 3.jpg';
import sponsor4 from './sponsors/sponsor 4.jpg';
import sponsor5 from './sponsors/sponsor 5.jpg';
import sponsor6 from './sponsors/sponsor 6.jpeg';
import sponsor7 from './sponsors/sponsor 7.jpg';
import sponsor8 from './sponsors/sponsor 8.jpg';
import sponsor9 from './sponsors/sponsor 9.jpeg';
import sponsor10 from './sponsors/sponsor 10.jpg';
import sponsor11 from './sponsors/sponsor 11.jpg';
import sponsor12 from './sponsors/sponsor 12.jpeg';
import sponsor13 from './sponsors/sponsor 13.jpg';
import sponsor14 from './sponsors/sponsor 14.jpeg';
import sponsor15 from './sponsors/sponsor 15.jpeg';
import sponsor16 from './sponsors/sponsor 16.jpg';
import sponsor17 from './sponsors/sponsor 17.jpeg';

// Define sponsors array
const sponsors = [
  { id: 1, image: sponsor1, url: '#', alt: 'Sponsor 1 logo' },
  { id: 2, image: sponsor2, url: '#', alt: 'Sponsor 2 logo' },
  { id: 3, image: sponsor3, url: '#', alt: 'Sponsor 3 logo' },
  { id: 4, image: sponsor4, url: '#', alt: 'Sponsor 4 logo' },
  { id: 5, image: sponsor5, url: '#', alt: 'Sponsor 5 logo' },
  { id: 6, image: sponsor6, url: '#', alt: 'Sponsor 6 logo' },
  { id: 7, image: sponsor7, url: '#', alt: 'Sponsor 7 logo' },
  { id: 8, image: sponsor8, url: '#', alt: 'Sponsor 8 logo' },
  { id: 9, image: sponsor9, url: '#', alt: 'Sponsor 9 logo' },
  { id: 10, image: sponsor10, url: '#', alt: 'Sponsor 10 logo' },
  { id: 11, image: sponsor11, url: '#', alt: 'Sponsor 11 logo' },
  { id: 12, image: sponsor12, url: '#', alt: 'Sponsor 12 logo' },
  { id: 13, image: sponsor13, url: '#', alt: 'Sponsor 13 logo' },
  { id: 14, image: sponsor14, url: '#', alt: 'Sponsor 14 logo' },
  { id: 15, image: sponsor15, url: '#', alt: 'Sponsor 15 logo' },
  { id: 16, image: sponsor16, url: '#', alt: 'Sponsor 16 logo' },
  { id: 17, image: sponsor17, url: '#', alt: 'Sponsor 17 logo' },
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const location = useLocation();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRefs.current) return;

      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // More subtle rotation values for better mobile experience
        const rotateY = (-(rect.width / 2 - x) / 30); 
        const rotateX = ((rect.height / 2 - y) / 30);
        
        // Smoother transform with transition
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(1.05)
        `;
        
        // Dynamic shadow based on position
        card.style.boxShadow = `
          ${-rotateY * 2}px 
          ${rotateX * 2}px 
          25px 
          rgba(0, 0, 0, 0.2)
        `;
      });
    };

    const resetTransform = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', resetTransform);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);

  return (
    <div className="sponsors-container" ref={containerRef}>
      <h1 className="page-title">Our Valued Sponsors</h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div
            className="sponsor-card-wrapper"
            key={sponsor.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <a
              href={sponsor.url}
              className="sponsor-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.alt}`}
            >
              <div className="card-content">
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className="sponsor-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/path/to/fallback-image.png';
                  }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;