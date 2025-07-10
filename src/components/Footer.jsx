import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-background-overlay"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🏔️</span>
              <span className="footer-logo-text">Ruhpolding</span>
            </div>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span className="social-icon">📹</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span className="social-icon">✉️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t('footer.explore')}</h3>
            <ul className="footer-links">
              <li><Link to="/activities">{t('footer.mountainActivities')}</Link></li>
              <li><Link to="/guided-tours">{t('footer.expertGuides')}</Link></li>
              <li><Link to="/museums">{t('footer.culturalHeritage')}</Link></li>
              <li><Link to="/cuisine">{t('footer.localCuisine')}</Link></li>
            </ul>
          </div>

          {/* Experience */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t('footer.experience')}</h3>
            <ul className="footer-links">
              <li><a href="#">{t('footer.alpineHiking')}</a></li>
              <li><a href="#">{t('footer.crystalLakes')}</a></li>
              <li><a href="#">{t('footer.traditionalCrafts')}</a></li>
              <li><a href="#">{t('footer.seasonalEvents')}</a></li>
            </ul>
          </div>

          {/* Visit Information */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t('footer.visit')}</h3>
            <ul className="footer-links">
              <li><a href="#">{t('footer.gettingHere')}</a></li>
              <li><a href="#">{t('footer.whereToStay')}</a></li>
              <li><a href="#">{t('footer.weatherGuide')}</a></li>
              <li><a href="#">{t('footer.safetyTips')}</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t('footer.connect')}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <p>{t('footer.address')}</p>
                  <p>{t('footer.addressLine')}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <p>+49 8663 8806-0</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div className="contact-details">
                  <p>{t('footer.hours')}</p>
                  <p>{t('footer.weekendHours')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">{t('footer.newsletter.title')}</h3>
            <p className="newsletter-description">
              {t('footer.newsletter.description')}
            </p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="newsletter-input"
              />
              <button className="newsletter-button">
                {t('footer.newsletter.button')}
              </button>
            </div>
            <p className="newsletter-privacy">
              {t('footer.newsletter.privacy')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>{t('footer.copyright')}</p>
            <p className="footer-location">{t('footer.taglineBottom')}</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#" className="footer-legal-link">{t('footer.privacyPolicy')}</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-legal-link">{t('footer.termsOfService')}</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-legal-link">{t('footer.cookiePolicy')}</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-legal-link">{t('footer.accessibility')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;