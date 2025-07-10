import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Html, useProgress } from '@react-three/drei';
import Wardrobe from './Wardrobe';
import DisplayTable from './DisplayTable';
import OldCabinet from './OldCabinet';
import DisplayCabinet from './DisplayCabinet';
import Statues from './Statues';
import Carrier from './Carrier';
import Golden from './Golden';
import Picture from './Picture';
import ObjectDetailsModal from './ObjectDetailsModal';
import InteractiveObject from './InteractiveObject';
import Room from './Room';

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ 
        color: 'white', 
        fontSize: '16px',
        background: 'rgba(0,0,0,0.8)',
        padding: '15px 20px',
        borderRadius: '10px'
      }}>
        Loading Room: {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

// Navigation Instructions Modal Component
const NavigationInstructions = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `rgba(0, 0, 0, ${isVisible ? '0.85' : '0'})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1001,
      padding: '2rem',
      backdropFilter: `blur(${isVisible ? '15px' : '0px'})`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: isVisible ? 1 : 0
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        borderRadius: '20px',
        padding: '0',
        maxWidth: '450px',
        width: '90%',
        overflow: 'hidden',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `
          0 25px 50px rgba(0, 0, 0, 0.3),
          0 10px 25px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        transform: `scale(${isVisible ? '1' : '0.9'}) translateY(${isVisible ? '0' : '20px'})`,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
      }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)',
          color: 'white',
          padding: '2rem 2.5rem 1.5rem',
          position: 'relative',
          textAlign: 'center'
        }}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: 'white',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              fontWeight: 'normal'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          <div style={{
            fontSize: '2.5rem',
            marginBottom: '0.5rem'
          }}>
            🏠
          </div>

          <h2 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.8rem',
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }}>
            Bavarian Room
          </h2>

          <p style={{
            margin: 0,
            fontSize: '1rem',
            opacity: 0.9,
            fontWeight: '300'
          }}>
            Navigate & explore artifacts
          </p>
        </div>

        {/* Content */}
        <div style={{
          padding: '2rem 2.5rem',
          color: '#2c3e50'
        }}>
          
          {/* Quick Controls */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {[
              { icon: '🖱️', action: 'Drag', description: 'Look around' },
              { icon: '🔍', action: 'Scroll', description: 'Zoom in/out' },
              { icon: '👆', action: 'Right drag', description: 'Move view' },
              { icon: '✨', action: 'Click', description: 'Object details' }
            ].map((control, index) => (
              <div
                key={index}
                style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {control.icon}
                </div>
                <div style={{
                  color: '#2c3e50',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.2rem'
                }}>
                  {control.action}
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.8rem'
                }}>
                  {control.description}
                </div>
              </div>
            ))}
          </div>

          {/* Quick tip */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(155, 89, 182, 0.1))',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(52, 152, 219, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#495057',
              margin: 0,
              fontSize: '0.9rem',
              lineHeight: '1.4'
            }}>
              💡 Look for glowing objects to learn their history
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: '#f8f9fa',
          padding: '1.5rem 2.5rem',
          borderTop: '1px solid #e9ecef',
          textAlign: 'center'
        }}>
          <button
            onClick={handleClose}
            style={{
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: 'white',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

const WardrobeRoom = () => {
  const [selectedObject, setSelectedObject] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Auto-hide instructions after 30 seconds if user doesn't close them
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a1a' }}>
      {/* Navigation Instructions Modal */}
      {showInstructions && (
        <NavigationInstructions onClose={() => setShowInstructions(false)} />
      )}

      {/* Object Details Modal */}
      <ObjectDetailsModal 
        object={selectedObject} 
        onClose={() => setSelectedObject(null)} 
      />

      {/* Back Button - moved down to avoid blocking logo */}
      <button 
        onClick={() => window.history.back()} 
        style={{
          position: 'absolute',
          top: '100px',
          left: '20px',
          background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(74, 144, 226, 0.6))',
          color: 'white',
          border: '2px solid rgba(74, 144, 226, 0.5)',
          padding: '0.8rem 1.5rem',
          borderRadius: '25px',
          fontSize: '1rem',
          cursor: 'pointer',
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          fontWeight: '500'
        }}
      >
        ← Back
      </button>

      {/* Help Button to reopen instructions */}
      <button 
        onClick={() => setShowInstructions(true)} 
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          background: 'rgba(52, 152, 219, 0.8)',
          color: 'white',
          border: '2px solid rgba(52, 152, 219, 0.5)',
          padding: '0.8rem 1.5rem',
          borderRadius: '25px',
          fontSize: '1rem',
          cursor: 'pointer',
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        💡 Help
      </button>

      {/* Info Panel - moved down to avoid blocking navigation */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: 'white',
        background: 'rgba(0,0,0,0.7)',
        padding: '15px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        zIndex: 100,
        maxWidth: '280px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>🏠 Bavarian Room</h3>
        <p style={{ margin: '0', fontSize: '13px', opacity: 0.8, lineHeight: '1.4' }}>
          Traditional Alpine room setting with authentic artifacts.
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '11px', opacity: 0.6 }}>
          Click objects for details • Use help for navigation
        </p>
      </div>

      <Canvas
        camera={{ position: [3, 2, 5], fov: 60 }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          {/* ONLY CHANDELIER LIGHTING */}
          
          {/* NO ambient light */}
          <ambientLight intensity={0.0} />
          
          {/* Main light source */}
          <pointLight 
            position={[0, 3, 3]} 
            intensity={70.0} 
            color="#FFE066"
            distance={20}
            decay={2}
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-near={0.1}
            shadow-camera-far={20}
            shadow-bias={-0.001}
          />

          {/* Room Environment */}
          <Room />
          
          {/* Interactive Objects with Enhanced Hover Effects */}
          
          {/* Wardrobe positioned on the left wall, same wall as display cabinet */}
          <InteractiveObject onClick={() => setSelectedObject('wardrobe')} objectId="wardrobe">
            <Wardrobe 
              position={[-4.5, 2.0, -2]} 
              rotation={[0, Math.PI / 2, 0]}
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Display Table positioned in center */}
          <InteractiveObject onClick={() => setSelectedObject('displayTable')} objectId="displayTable">
            <DisplayTable 
              position={[0, 0.5, 0]} 
              rotation={[0, Math.PI, 0]}
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Old Cabinet positioned on the right side */}
          <InteractiveObject onClick={() => setSelectedObject('oldCabinet')} objectId="oldCabinet">
            <OldCabinet 
              position={[3, 1.2, -4.2]} 
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Display Cabinet positioned on the left wall, facing center */}
          <InteractiveObject onClick={() => setSelectedObject('displayCabinet')} objectId="displayCabinet">
            <DisplayCabinet 
              position={[-4.5, 1.7, 2.5]} 
              rotation={[0, Math.PI / 2, 0]}
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Statues positioned against the back wall */}
          <InteractiveObject onClick={() => setSelectedObject('statues')} objectId="statues">
            <Statues 
              position={[-2, 2.0, -4.5]} 
              rotation={[0, -Math.PI / 6, 0]}
              scale={[3, 3, 3]}
            />
          </InteractiveObject>
          
          {/* Carrier positioned against the right wall */}
          <InteractiveObject onClick={() => setSelectedObject('carrier')} objectId="carrier">
            <Carrier 
              position={[3.8, 1.6, 3]} 
              rotation={[0, -Math.PI / 2, 0]}
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Picture positioned against the right wall */}
          <InteractiveObject onClick={() => setSelectedObject('picture')} objectId="picture">
            <Picture 
              position={[4.90, 2.5, -1]} 
              rotation={[0, Math.PI / 360, 0]}
              scale={[2, 2, 2]}
            />
          </InteractiveObject>
          
          {/* Golden chandelier positioned above the display table */}
          <InteractiveObject onClick={() => setSelectedObject('golden')} objectId="golden">
            <Golden 
              position={[0, 4, 0]} 
              rotation={[0, 0, 0]}
              scale={[1.3, 1.3, 1.3]}
            />
          </InteractiveObject>
          
          {/* Ground shadows */}
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, 0.01, 0]}
            opacity={0.3}
            width={8}
            height={8}
            blur={2}
            far={4}
          />
          
          {/* Camera Controls - targeting the center of the room */}
          <OrbitControls
            target={[0, 1.5, 0]}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={12}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WardrobeRoom;