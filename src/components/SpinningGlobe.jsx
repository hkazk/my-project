import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';
import './SpinningGlobe.css';

const SpinningGlobe = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const mountRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temp: '12°C',
    condition: 'Partly Cloudy',
    icon: '⛅',
    humidity: '68%',
    wind: '8 km/h'
  });

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Simulate weather data with translations
  useEffect(() => {
    const weatherConditions = [
      { temp: '12°C', condition: t('weather.partlyCloudy'), icon: '⛅', humidity: '68%', wind: '8 km/h' },
      { temp: '15°C', condition: t('weather.sunny'), icon: '☀️', humidity: '55%', wind: '12 km/h' },
      { temp: '8°C', condition: t('weather.lightSnow'), icon: '🌨️', humidity: '85%', wind: '6 km/h' },
      { temp: '18°C', condition: t('weather.clearSky'), icon: '🌤️', humidity: '45%', wind: '10 km/h' }
    ];
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    setWeather(randomWeather);
  }, [t]);

  // Format time for Ruhpolding
  const formatRuhpoldingTime = () => {
    const options = {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return currentTime.toLocaleTimeString('en-GB', options);
  };

  const formatRuhpoldingDate = () => {
    const options = {
      timeZone: 'Europe/Berlin',
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    };
    return currentTime.toLocaleDateString('en-GB', options);
  };

  // Menu options with translations
  const menuOptions = [
    {
      id: 'activities',
      title: t('menu.activities'),
      icon: '🏔️',
      description: t('menu.activitiesDesc'),
      priority: 'high'
    },
    {
      id: 'stories',
      title: t('menu.stories'),
      icon: '📖',
      description: t('menu.storiesDesc'),
      priority: 'low'
    },
    {
      id: 'video',
      title: t('menu.video'),
      icon: '🎬',
      description: t('menu.videoDesc'),
      priority: 'high'
    },
    {
      id: 'accommodation',
      title: t('menu.accommodation'),
      icon: '🏨',
      description: t('menu.accommodationDesc'),
      priority: 'high'
    },
    {
      id: 'contact',
      title: t('menu.contact'),
      icon: '📞',
      description: t('menu.contactDesc'),
      priority: 'low'
    }
  ];

  // Handle option selection with camera dive transition
  const handleOptionSelect = useCallback((option) => {
    if (option.id === 'contact') {
      setShowContactForm(true);
    } else {
      // Hide all UI elements during transition
      const centerInstructions = document.querySelector('.center-instructions');
      const floatingInfoPanel = document.querySelector('.floating-info-panel');
      const optionsPanel = document.querySelector('.options-panel');
      
      if (centerInstructions) centerInstructions.style.display = 'none';
      if (floatingInfoPanel) floatingInfoPanel.style.display = 'none';
      if (optionsPanel) optionsPanel.style.display = 'none';
      
      // Start camera dive transition
      const instance = globeInstanceRef.current;
      if (instance && instance.camera && instance.scene) {
        const startTime = Date.now();
        const duration = 3000;
        const startPosition = instance.camera.position.clone();
        const targetPosition = new THREE.Vector3(0, 0, 0.8);
        
        const animateCameraDive = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeInOutCubic = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          instance.camera.position.lerpVectors(startPosition, targetPosition, easeInOutCubic);
          instance.camera.lookAt(0, 0, 0);
          
          if (progress > 0.8) {
            const shake = (1 - progress) * 0.15;
            instance.camera.position.x += (Math.random() - 0.5) * shake;
            instance.camera.position.y += (Math.random() - 0.5) * shake;
          }
          
          if (instance.globe) {
            instance.globe.rotation.y += 0.03 * (1 + progress * 3);
          }
          
          if (instance.stars) {
            instance.stars.rotation.y += 0.008 * (1 + progress * 4);
            instance.stars.rotation.x += 0.005 * (1 + progress * 3);
          }
          
          if (progress < 1) {
            requestAnimationFrame(animateCameraDive);
          } else {
            setTimeout(() => {
              navigate(`/${option.id}`);
            }, 500);
          }
        };
        
        animateCameraDive();
      } else {
        setTimeout(() => {
          navigate(`/${option.id}`);
        }, 1000);
      }
    }
  }, [navigate]);

  const createGlobe = useCallback(() => {
    if (!mountRef.current || globeInstanceRef.current) return;

    try {
      const globeInstance = {
        scene: null,
        camera: null,
        renderer: null,
        globe: null,
        animationId: null
      };

      // Create scene
      globeInstance.scene = new THREE.Scene();

      // Create camera
      globeInstance.camera = new THREE.PerspectiveCamera(
        60,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      globeInstance.camera.position.set(0, 0, 6);

      // Create renderer
      globeInstance.renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true
      });
      globeInstance.renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      globeInstance.renderer.setClearColor(0x000000, 1);
      
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(globeInstance.renderer.domElement);

      // Create globe
      const globeGeometry = new THREE.SphereGeometry(2.2, 64, 64);
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load(
        'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
        () => setIsLoading(false),
        undefined,
        () => setIsLoading(false)
      );

      const globeMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 150,
        specular: 0x222222
      });

      globeInstance.globe = new THREE.Mesh(globeGeometry, globeMaterial);
      globeInstance.scene.add(globeInstance.globe);

      // Add atmosphere
      const atmosphereGeometry = new THREE.SphereGeometry(2.35, 64, 64);
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x4A90E2,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      globeInstance.scene.add(atmosphere);

      // Create star field
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 5000;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      
      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const radius = 30 + Math.random() * 60;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        const colorType = Math.random();
        const brightness = 0.6 + Math.random() * 0.4;
        
        if (colorType < 0.25) {
          colors[i3] = 0.8 * brightness;
          colors[i3 + 1] = 0.9 * brightness;
          colors[i3 + 2] = 1.0 * brightness;
        } else if (colorType < 0.5) {
          colors[i3] = 1.0 * brightness;
          colors[i3 + 1] = 1.0 * brightness;
          colors[i3 + 2] = 1.0 * brightness;
        } else if (colorType < 0.75) {
          colors[i3] = 1.0 * brightness;
          colors[i3 + 1] = 0.9 * brightness;
          colors[i3 + 2] = 0.6 * brightness;
        } else {
          colors[i3] = 1.0 * brightness;
          colors[i3 + 1] = 0.7 * brightness;
          colors[i3 + 2] = 0.4 * brightness;
        }
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const starMaterial = new THREE.PointsMaterial({
        size: 0.6,
        transparent: true,
        opacity: 0.85,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: false
      });
      
      const stars = new THREE.Points(starGeometry, starMaterial);
      globeInstance.scene.add(stars);
      globeInstance.stars = stars;

      // Add Ruhpolding marker
      const lat = 47.7637;
      const lon = 12.6454;
      const radius = 2.25;
      
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      
      const markerPosition = new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
      
      const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0xff4444,
        transparent: true,
        opacity: 0.9
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(markerPosition);
      globeInstance.scene.add(marker);
      globeInstance.marker = marker;

      // Add pulsing ring around marker
      const ringGeometry = new THREE.RingGeometry(0.05, 0.08, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff4444,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(markerPosition);
      ring.lookAt(0, 0, 0);
      globeInstance.scene.add(ring);
      globeInstance.ring = ring;

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      globeInstance.scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 3, 5);
      globeInstance.scene.add(directionalLight);

      // Animation loop
      const animate = () => {
        if (!globeInstance.scene || !globeInstance.renderer || !globeInstance.camera) return;

        globeInstance.animationId = requestAnimationFrame(animate);
        
        if (globeInstance.globe) {
          globeInstance.globe.rotation.y += 0.005;
        }

        if (globeInstance.stars) {
          globeInstance.stars.rotation.x += 0.0002;
          globeInstance.stars.rotation.y += 0.0003;
          globeInstance.stars.rotation.z += 0.0001;
        }

        if (globeInstance.marker) {
          const time = Date.now() * 0.005;
          globeInstance.marker.material.opacity = 0.7 + Math.sin(time) * 0.3;
        }

        if (globeInstance.ring) {
          const time = Date.now() * 0.003;
          globeInstance.ring.scale.setScalar(1 + Math.sin(time) * 0.3);
          globeInstance.ring.material.opacity = 0.4 + Math.sin(time) * 0.2;
        }
        
        globeInstance.renderer.render(globeInstance.scene, globeInstance.camera);
      };

      // Handle resize
      const handleResize = () => {
        if (globeInstance.camera && globeInstance.renderer && mountRef.current) {
          const width = mountRef.current.clientWidth;
          const height = mountRef.current.clientHeight;
          globeInstance.camera.aspect = width / height;
          globeInstance.camera.updateProjectionMatrix();
          globeInstance.renderer.setSize(width, height);
        }
      };

      window.addEventListener('resize', handleResize);
      globeInstance.handleResize = handleResize;

      animate();
      globeInstanceRef.current = globeInstance;
      setIsLoading(false);

    } catch (err) {
      console.error("Error creating globe:", err);
      setError("Failed to create globe");
      setIsLoading(false);
    }
  }, []);

  const cleanupGlobe = useCallback(() => {
    if (!globeInstanceRef.current) return;
    
    const instance = globeInstanceRef.current;
    
    if (instance.handleResize) {
      window.removeEventListener('resize', instance.handleResize);
    }
    
    if (instance.animationId) {
      cancelAnimationFrame(instance.animationId);
    }
    
    if (mountRef.current && instance.renderer && mountRef.current.contains(instance.renderer.domElement)) {
      mountRef.current.removeChild(instance.renderer.domElement);
    }
    
    if (instance.scene) {
      instance.scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }
    
    if (instance.renderer) {
      instance.renderer.dispose();
    }
    
    globeInstanceRef.current = null;
  }, []);

  useEffect(() => {
    createGlobe();
    return cleanupGlobe;
  }, [createGlobe, cleanupGlobe]);

  if (error) {
    return (
      <div className="error-container">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="spinning-globe-container">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div>{t('common.loading')} Spinning Globe...</div>
        </div>
      )}

      {!isLoading && (
        <div className="center-instructions">
          <div className="explore-badge">{t('globe.explore')}</div>
          <div className="main-title">
            {t('globe.title')}
            <span className="title-accent">{t('globe.subtitle')}</span>
          </div>
          <div className="instruction-text">{t('globe.instruction')}</div>
        </div>
      )}

      <div className="floating-info-panel">
        <div className="info-header">
          <div className="location-icon">📍</div>
          <div className="location-details">
            <h3 className="location-name">{t('globe.location')}</h3>
            <p className="location-subtitle">{t('globe.locationSubtitle')}</p>
          </div>
        </div>

        <div className="time-section">
          <div className="current-time">{formatRuhpoldingTime()}</div>
          <div className="current-date">{formatRuhpoldingDate()}</div>
        </div>

        <div className="weather-section">
          <div className="weather-main">
            <div className="weather-left">
              <span className="weather-icon">{weather.icon}</span>
              <div className="weather-details">
                <div className="weather-temp">{weather.temp}</div>
                <div className="weather-condition">{weather.condition}</div>
              </div>
            </div>
          </div>
          
          <div className="weather-stats">
            <div className="weather-stat">💧 {weather.humidity}</div>
            <div className="weather-stat">💨 {weather.wind}</div>
          </div>
        </div>

        <div className="featured-experience">
          <div className="featured-label">{t('globe.featuredToday')}</div>
          <div className="featured-title">{t('featured.alpineWinterHiking')}</div>
          <div className="featured-description">
            {t('featured.alpineWinterHikingDesc')}
          </div>
        </div>

        <div className="news-offers-section">
          <div className="section-label">{t('globe.latestNews')}</div>
          
          <div className="news-item">
            <div className="news-badge">{t('news.new')}</div>
            <div className="news-content">
              <div className="news-title">{t('featured.springFestival')}</div>
              <div className="news-description">{t('featured.springFestivalDesc')}</div>
            </div>
          </div>

          <div className="news-item">
            <div className="news-badge special">{t('news.offer')}</div>
            <div className="news-content">
              <div className="news-title">{t('featured.earlyBird')}</div>
              <div className="news-description">{t('featured.earlyBirdDesc')}</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={mountRef} className="globe-container" />

      <div className="options-panel">
        <div className="options-list">
          {menuOptions.map((option, index) => (
            <div
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className={`option-item ${option.priority === 'high' ? 'option-large' : 'option-small'}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="option-icon">{option.icon}</div>
              <div className="option-text">{option.title}</div>
            </div>
          ))}
        </div>
      </div>

      {showContactForm && (
        <div className="modal-overlay">
          <div className="contact-modal">
            <button
              onClick={() => setShowContactForm(false)}
              className="close-button"
            >
              ×
            </button>

            <h2 className="contact-title">{t('contact.title')}</h2>

            <form className="contact-form">
              <input type="text" placeholder={t('contact.name')} className="form-input" />
              <input type="email" placeholder={t('contact.email')} className="form-input" />
              <textarea placeholder={t('contact.message')} rows="4" className="form-textarea" />
              <button type="submit" className="submit-button">{t('contact.send')}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinningGlobe;