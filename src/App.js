import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/i18n'; // Import i18n configuration BEFORE any components
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import StoriesPage from './pages/StoriesPage';
import VideoPage from './pages/VideoPage';
import AccommodationPage from './pages/AccommodationPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import MuseumPage from './pages/MuseumPage';
import WardrobeRoom from './components/WardrobeRoom';
import CuisinePage from './pages/CuisinePage';
import GuidedToursPage from './pages/GuidedToursPage';

function App() {
  return (
    <Suspense fallback={
      <div style={{ 
        color: 'white', 
        fontSize: '2rem', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#000000',
        fontFamily: 'Arial, sans-serif'
      }}>
        Loading translations...
      </div>
    }>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="app-container">
          <NavigationBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/museums" element={<MuseumPage />} />
              <Route path="/wardrobe-room" element={<WardrobeRoom />} />
              <Route path="/cuisine" element={<CuisinePage />} />
              <Route path="/guided-tours" element={<GuidedToursPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;