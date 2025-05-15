import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from './assets/rnlogo.png'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'alumni', label: 'Alumni' },
    { id: 'sponsors', label: 'Sponsors' }
  ]

  const handleNavClick = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
    
    // Smooth scroll implementation
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home" onClick={() => handleNavClick('home')}>
          <img src={logoImage} alt="RN Logo" className="logo-image" />
          </a>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={menuOpen ? 'active' : ''}>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                  <span className="nav-indicator"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar