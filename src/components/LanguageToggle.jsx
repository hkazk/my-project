import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(74, 144, 226, 0.6))',
        color: 'white',
        border: '2px solid rgba(74, 144, 226, 0.5)',
        padding: '0.8rem 1.6rem',
        borderRadius: '20px',
        fontSize: '1.4rem',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>
        {i18n.language === 'en' ? '🇩🇪' : '🇺🇸'}
      </span>
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};

export default LanguageToggle;