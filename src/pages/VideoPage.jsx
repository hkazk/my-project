import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './VideoPage.css';
import ruhpoldingVideo from '../video/video1.mov'; // Import your video file

const VideoPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Move this up to use it in the video collection
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Video categories
  const categories = [
    { id: 'all', name: t('video.categories.all'), icon: '🎬' },
    { id: 'nature', name: t('video.categories.nature'), icon: '🏔️' },
    { id: 'culture', name: t('video.categories.culture'), icon: '🎭' },
    { id: 'activities', name: t('video.categories.activities'), icon: '⛷️' },
    { id: 'seasonal', name: t('video.categories.seasonal'), icon: '❄️' },
    { id: 'tours', name: t('video.categories.tours'), icon: '🚶‍♂️' }
  ];

  // Featured/Main video
  const featuredVideo = {
    id: 'featured',
    title: t('video.featured.title'),
    description: t('video.featured.description'),
    duration: '12:34',
    views: '15.2K',
    uploadDate: t('video.featured.uploadDate'),
    category: 'featured',
    thumbnail: '🌟'
  };

  // Video collection organized like YouTube - moved inside component to access t function
  const videoCollection = [
    // Nature & Landscapes
    {
      id: 1,
      title: t('video.collection.alpineLakes.title'),
      description: t('video.collection.alpineLakes.description'),
      duration: '8:45',
      views: '12.1K',
      uploadDate: t('video.collection.alpineLakes.uploadDate'),
      category: 'nature',
      thumbnail: '🏞️'
    },
    {
      id: 2,
      title: t('video.collection.mountainPeaks.title'),
      description: t('video.collection.mountainPeaks.description'),
      duration: '6:22',
      views: '9.8K',
      uploadDate: t('video.collection.mountainPeaks.uploadDate'),
      category: 'nature',
      thumbnail: '🌅'
    },
    {
      id: 3,
      title: t('video.collection.waterfalls.title'),
      description: t('video.collection.waterfalls.description'),
      duration: '5:17',
      views: '7.3K',
      uploadDate: t('video.collection.waterfalls.uploadDate'),
      category: 'nature',
      thumbnail: '💧'
    },

    // Culture & Heritage
    {
      id: 4,
      title: t('video.collection.festivals.title'),
      description: t('video.collection.festivals.description'),
      duration: '11:28',
      views: '18.5K',
      uploadDate: t('video.collection.festivals.uploadDate'),
      category: 'culture',
      thumbnail: '🎭'
    },
    {
      id: 5,
      title: t('video.collection.woodcarving.title'),
      description: t('video.collection.woodcarving.description'),
      duration: '9:15',
      views: '6.7K',
      uploadDate: t('video.collection.woodcarving.uploadDate'),
      category: 'culture',
      thumbnail: '🪵'
    },
    {
      id: 6,
      title: t('video.collection.churches.title'),
      description: t('video.collection.churches.description'),
      duration: '7:33',
      views: '5.4K',
      uploadDate: t('video.collection.churches.uploadDate'),
      category: 'culture',
      thumbnail: '⛪'
    },

    // Activities & Sports
    {
      id: 7,
      title: t('video.collection.hiking.title'),
      description: t('video.collection.hiking.description'),
      duration: '15:42',
      views: '22.1K',
      uploadDate: t('video.collection.hiking.uploadDate'),
      category: 'activities',
      thumbnail: '🥾'
    },
    {
      id: 8,
      title: t('video.collection.winterSports.title'),
      description: t('video.collection.winterSports.description'),
      duration: '13:56',
      views: '16.8K',
      uploadDate: t('video.collection.winterSports.uploadDate'),
      category: 'activities',
      thumbnail: '⛷️'
    },
    {
      id: 9,
      title: t('video.collection.biking.title'),
      description: t('video.collection.biking.description'),
      duration: '10:19',
      views: '8.9K',
      uploadDate: t('video.collection.biking.uploadDate'),
      category: 'activities',
      thumbnail: '🚵‍♂️'
    },

    // Seasonal
    {
      id: 10,
      title: t('video.collection.spring.title'),
      description: t('video.collection.spring.description'),
      duration: '8:11',
      views: '11.2K',
      uploadDate: t('video.collection.spring.uploadDate'),
      category: 'seasonal',
      thumbnail: '🌸'
    },
    {
      id: 11,
      title: t('video.collection.autumn.title'),
      description: t('video.collection.autumn.description'),
      duration: '6:44',
      views: '13.7K',
      uploadDate: t('video.collection.autumn.uploadDate'),
      category: 'seasonal',
      thumbnail: '🍂'
    },
    {
      id: 12,
      title: t('video.collection.winter.title'),
      description: t('video.collection.winter.description'),
      duration: '9:33',
      views: '19.4K',
      uploadDate: t('video.collection.winter.uploadDate'),
      category: 'seasonal',
      thumbnail: '❄️'
    },

    // Virtual Tours
    {
      id: 13,
      title: t('video.collection.villageTour.title'),
      description: t('video.collection.villageTour.description'),
      duration: '14:22',
      views: '25.6K',
      uploadDate: t('video.collection.villageTour.uploadDate'),
      category: 'tours',
      thumbnail: '🚶‍♂️'
    },
    {
      id: 14,
      title: t('video.collection.museum.title'),
      description: t('video.collection.museum.description'),
      duration: '12:08',
      views: '7.8K',
      uploadDate: t('video.collection.museum.uploadDate'),
      category: 'tours',
      thumbnail: '🏛️'
    },
    {
      id: 15,
      title: t('video.collection.cableCar.title'),
      description: t('video.collection.cableCar.description'),
      duration: '7:55',
      views: '14.3K',
      uploadDate: t('video.collection.cableCar.uploadDate'),
      category: 'tours',
      thumbnail: '🚠'
    }
  ];

  // Filter videos based on selected category
  const getFilteredVideos = () => {
    if (selectedCategory === 'all') {
      return videoCollection;
    }
    return videoCollection.filter(video => video.category === selectedCategory);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // Scroll to top to show the main player
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentVideo = () => {
    return selectedVideo || featuredVideo;
  };

  return (
    <div className="video-page">
      {/* Header Section */}
      <div className="video-header">
        <button 
          onClick={() => navigate('/')} 
          className="back-to-globe-btn"
        >
          🌍 {t('video.backToGlobe')}
        </button>
        <div className="header-content">
          <h1 className="video-page-title">{t('video.title')}</h1>
          <p className="video-page-subtitle">{t('video.subtitle')}</p>
        </div>
      </div>

      <div className="video-layout">
        {/* Main Content Area */}
        <div className="main-content">
          {/* Featured Video Player */}
          <div className="video-player-section">
            <div className="main-video-player">
              <div className="video-player-container">
                <video
                  ref={videoRef}
                  className="main-video"
                  poster="" // You can add a poster image if you have one
                  controls={isPlaying}
                  onClick={handlePlayPause}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={ruhpoldingVideo} type="video/quicktime" />
                  <source src={ruhpoldingVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {!isPlaying && (
                  <div className="video-overlay" onClick={handlePlayPause}>
                    <div className="play-button large">
                      <div className="play-icon">▶️</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Video Info */}
            <div className="video-details">
              <h2 className="video-title">{getCurrentVideo().title}</h2>
              <div className="video-meta">
                <span className="video-views">{getCurrentVideo().views} {t('video.views')}</span>
                <span className="video-separator">•</span>
                <span className="video-date">{getCurrentVideo().uploadDate}</span>
                <span className="video-separator">•</span>
                <span className="video-duration">{getCurrentVideo().duration}</span>
              </div>
              <div className="video-description">
                <p>{getCurrentVideo().description}</p>
              </div>
              <div className="video-actions">
                <button className="action-btn primary">
                  ▶️ {t('video.actions.watchNow')}
                </button>
                <button className="action-btn secondary">
                  ⭐ {t('video.actions.saveForLater')}
                </button>
                <button className="action-btn secondary">
                  📤 {t('video.actions.share')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="video-sidebar">
          {/* Category Filter */}
          <div className="category-section">
            <h3 className="section-title">{t('video.categories.title')}</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Up Next / Related Videos */}
          <div className="related-section">
            <h3 className="section-title">
              {selectedCategory === 'all' ? t('video.allVideos') : `${categories.find(c => c.id === selectedCategory)?.name || t('video.videos')}`}
            </h3>
            <div className="related-videos">
              {getFilteredVideos().map(video => (
                <div 
                  key={video.id} 
                  className={`related-video-item ${selectedVideo?.id === video.id ? 'active' : ''}`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="related-thumbnail">
                    <div className="thumbnail-icon">{video.thumbnail}</div>
                    <div className="video-duration-badge">{video.duration}</div>
                  </div>
                  <div className="related-info">
                    <h4 className="related-title">{video.title}</h4>
                    <div className="related-meta">
                      <span className="related-views">{video.views} {t('video.views')}</span>
                      <span className="related-date">{video.uploadDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Category Pills (shown on smaller screens) */}
      <div className="mobile-categories">
        <div className="category-pills">
          {categories.map(category => (
            <button
              key={`mobile-${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid View for Mobile */}
      <div className="mobile-video-grid">
        {getFilteredVideos().map(video => (
          <div 
            key={`mobile-${video.id}`} 
            className="mobile-video-card"
            onClick={() => handleVideoSelect(video)}
          >
            <div className="mobile-thumbnail">
              <div className="thumbnail-icon">{video.thumbnail}</div>
              <div className="video-duration-badge">{video.duration}</div>
            </div>
            <div className="mobile-video-info">
              <h4 className="mobile-video-title">{video.title}</h4>
              <div className="mobile-video-meta">
                <span>{video.views} {t('video.views')} • {video.uploadDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;