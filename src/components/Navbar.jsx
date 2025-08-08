import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#uber-mich', label: t.nav.about },
    { href: '#auszeichnungen', label: t.nav.strengths },
    { href: '#erfahrung', label: t.nav.experience },
    { href: '#bildung', label: t.nav.education },
    { href: '#kompetenzen', label: t.nav.skills },
    { href: '#zertifikate', label: t.nav.certifications },
    { href: '#interessen', label: t.nav.interests },
    { href: '#kontakt', label: t.nav.contact }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo/Brand */}
          <div className="navbar-brand">
            <h3 className="brand-text">Lisa Pink</h3>
            <span className="brand-subtitle">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="language-toggle-group">
              <button 
                onClick={() => language !== 'de' && toggleLanguage()} 
                className={`language-btn ${language === 'de' ? 'active' : ''}`}
                aria-label="Deutsch"
              >
                DE
              </button>
              <button 
                onClick={() => language !== 'en' && toggleLanguage()} 
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile Language Toggle */}
          <div className="mobile-language-toggle-group">
            <button 
              onClick={() => language !== 'de' && toggleLanguage()} 
              className={`mobile-language-btn ${language === 'de' ? 'active' : ''}`}
              aria-label="Deutsch"
            >
              DE
            </button>
            <button 
              onClick={() => language !== 'en' && toggleLanguage()} 
              className={`mobile-language-btn ${language === 'en' ? 'active' : ''}`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245, 241, 235, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(212, 196, 176, 0.2);
          transition: all 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 20px var(--shadow-light);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .brand-text {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-brown);
          margin: 0;
          line-height: 1;
        }

        .brand-subtitle {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-light);
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-medium);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: var(--warm-brown);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--warm-brown), var(--accent-beige));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .language-toggle-group {
          display: flex;
          align-items: center;
          border: 1px solid var(--accent-beige);
          border-radius: 20px;
          overflow: hidden;
          background: var(--secondary-beige);
        }

        .language-btn {
          padding: 0.5rem 0.8rem;
          background: transparent;
          border: none;
          color: var(--warm-brown);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 45px;
        }

        .language-btn:hover:not(.active) {
          background: var(--accent-beige);
        }

        .language-btn.active {
          background: var(--warm-brown);
          color: white;
        }

        .language-btn:not(:last-child) {
          border-right: 1px solid var(--accent-beige);
        }

        .mobile-language-toggle-group {
          display: flex;
          align-items: center;
          border: 1px solid var(--accent-beige);
          border-radius: 20px;
          overflow: hidden;
          background: var(--secondary-beige);
          margin: 0.5rem 1rem 1rem;
        }

        .mobile-language-btn {
          padding: 1rem 1.5rem;
          background: transparent;
          border: none;
          color: var(--warm-brown);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          flex: 1;
          text-align: center;
        }

        .mobile-language-btn:hover:not(.active) {
          background: var(--accent-beige);
        }

        .mobile-language-btn.active {
          background: var(--warm-brown);
          color: white;
        }

        .mobile-language-btn:not(:last-child) {
          border-right: 1px solid var(--accent-beige);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: var(--secondary-beige);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--white);
          border-top: 1px solid var(--secondary-beige);
          box-shadow: 0 4px 20px var(--shadow-light);
          margin-top: 1rem;
          border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
          overflow: hidden;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu-open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-medium);
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 1rem 1.5rem;
          text-align: left;
          transition: all 0.3s ease;
          border-bottom: 1px solid var(--secondary-beige);
        }

        .mobile-nav-link:hover {
          background: var(--primary-beige);
          color: var(--warm-brown);
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .brand-text {
            font-size: 1.5rem;
          }

          .brand-subtitle {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-content {
            padding: 0.8rem 0;
          }

          .brand-text {
            font-size: 1.3rem;
          }

          .mobile-nav-link {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
