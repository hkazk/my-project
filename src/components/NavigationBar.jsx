import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Helper function to check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <Link to="/" className="navbar-logo">
        Ruhpolding
      </Link>
      <ul className="navbar-links">
        <li>
          <Link 
            to="/" 
            className={isActiveLink('/') ? 'active' : ''}
          >
            {t('navbar.explore')}
          </Link>
        </li>
        <li>
          <span className="navbar-info">{t('navbar.weather')}</span>
        </li>
        <li>
          <span className="navbar-info">{t('navbar.events')}</span>
        </li>
        <li>
          <span className="navbar-info">{t('navbar.gallery')}</span>
        </li>
        <li>
          <a 
            href="https://www.bergfex.de/sommer/ruhpolding/webcams/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-info navbar-info-link"
          >
            {t('navbar.liveCam')}
          </a>
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;