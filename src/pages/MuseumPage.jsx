import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavigationBar from '../components/NavigationBar';
import './MuseumPage.css';

// Import museum images
import museumImage from '../assets/museum.jpg';
import museum1Image from '../assets/museum1.jpg';
import museum2Image from '../assets/museum2.jpg';
import museum3Image from '../assets/museum3.jpg';

const MuseumPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="museum-page">
      <NavigationBar />

      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${museum2Image})`}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{t('museum.hero.title')}</h1>
            <p>{t('museum.hero.description')}</p>
            
            <div className="stats">
              <div className="stat">
                <span className="number">200+</span>
                <span className="label">{t('museum.hero.stats.artifacts')}</span>
              </div>
              <div className="stat">
                <span className="number">300</span>
                <span className="label">{t('museum.hero.stats.history')}</span>
              </div>
              <div className="stat">
                <span className="number">5</span>
                <span className="label">{t('museum.hero.stats.rooms')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>{t('museum.about.title')}</h2>
          <p>{t('museum.about.paragraph1')}</p>
          <p>{t('museum.about.paragraph2')}</p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections">
        <div className="container">
          <h2>{t('museum.collections.title')}</h2>
          <div className="collections-grid">
            <div className="collection-card">
              <img src={museumImage} alt={t('museum.collections.furniture.title')} />
              <div className="card-content">
                <div className="icon">🪑</div>
                <h3>{t('museum.collections.furniture.title')}</h3>
                <p>{t('museum.collections.furniture.description')}</p>
              </div>
            </div>
            <div className="collection-card">
              <img src={museum1Image} alt={t('museum.collections.ruralLife.title')} />
              <div className="card-content">
                <div className="icon">🏠</div>
                <h3>{t('museum.collections.ruralLife.title')}</h3>
                <p>{t('museum.collections.ruralLife.description')}</p>
              </div>
            </div>
            <div className="collection-card">
              <img src={museum3Image} alt={t('museum.collections.crafts.title')} />
              <div className="card-content">
                <div className="icon">🔨</div>
                <h3>{t('museum.collections.crafts.title')}</h3>
                <p>{t('museum.collections.crafts.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Experience Section */}
      <section className="experience">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <span className="badge">{t('museum.experience.badge')}</span>
              <h2>{t('museum.experience.title')}</h2>
              <p>{t('museum.experience.description')}</p>
              <div className="features">
                <div className="feature">
                  <span>🏠</span>
                  <span>{t('museum.experience.features.room')}</span>
                </div>
                <div className="feature">
                  <span>🗄️</span>
                  <span>{t('museum.experience.features.objects')}</span>
                </div>
                <div className="feature">
                  <span>📱</span>
                  <span>{t('museum.experience.features.mobile')}</span>
                </div>
              </div>
              <button onClick={() => navigate('/wardrobe-room')}>
                {t('museum.experience.button')}
              </button>
            </div>
            <div className="experience-image">
              <img src={museumImage} alt="Virtual Tour Preview" />
              <div className="play-button" onClick={() => navigate('/wardrobe-room')}>
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="visit">
        <div className="container">
          <h2>{t('museum.visit.title')}</h2>
          <div className="visit-grid">
            <div className="visit-card">
              <div className="visit-icon">📍</div>
              <h3>{t('museum.visit.location.title')}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{t('museum.visit.location.description')}</p>
            </div>
            <div className="visit-card">
              <div className="visit-icon">🕒</div>
              <h3>{t('museum.visit.hours.title')}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{t('museum.visit.hours.description')}</p>
            </div>
            <div className="visit-card">
              <div className="visit-icon">🎫</div>
              <h3>{t('museum.visit.admission.title')}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{t('museum.visit.admission.description')}</p>
            </div>
            <div className="visit-card">
              <div className="visit-icon">🌐</div>
              <h3>{t('museum.visit.info.title')}</h3>
              <p>
                <a href="https://www.ruhpolding.de/heimatmuseum-ruhpolding/" target="_blank" rel="noopener noreferrer">
                  {t('museum.visit.info.link')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuseumPage;