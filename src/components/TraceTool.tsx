'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, Minimize2, ZoomIn, ZoomOut, Lock, Unlock, X, Move, RotateCw } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import styles from './TraceTool.module.css';

interface TraceToolProps {
  initialImages: any[];
}

export default function TraceTool({ initialImages }: TraceToolProps) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLocked, setIsLocked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const wakeLock = useRef<any>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  // Handle Screen Wake Lock
  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && selectedImage) {
        try {
          wakeLock.current = await (navigator as any).wakeLock.request('screen');
        } catch (err: any) {
          console.error(`${err.name}, ${err.message}`);
        }
      }
    };

    if (selectedImage) {
      requestWakeLock();
    } else {
      if (wakeLock.current) {
        wakeLock.current.release();
        wakeLock.current = null;
      }
    }

    return () => {
      if (wakeLock.current) {
        wakeLock.current.release();
      }
    };
  }, [selectedImage]);

  // Handle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Dragging logic
  const handleStart = (e: any) => {
    if (isLocked) return;
    isDragging.current = true;
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    startPos.current = { x: clientX - position.x, y: clientY - position.y };
  };

  const handleMove = (e: any) => {
    if (!isDragging.current || isLocked) return;
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    setPosition({
      x: clientX - startPos.current.x,
      y: clientY - startPos.current.y
    });
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  // Hide controls after inactivity when locked
  useEffect(() => {
    if (isLocked) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  }, [isLocked]);

  if (selectedImage) {
    return (
      <div className={styles.traceMode} ref={containerRef}>
        <button 
          className={styles.closeBtn} 
          onClick={() => setSelectedImage(null)}
          title="Exit Tool"
        >
          <X size={24} />
        </button>

        <div 
          className={styles.canvasContainer}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onClick={() => isLocked && setShowControls(!showControls)}
        >
          {isLocked && <div className={styles.lockOverlay} />}
          
          <img
            src={urlFor(selectedImage.mainImage).url()}
            alt="Tracing design"
            className={styles.traceImage}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
              filter: `brightness(${brightness}) contrast(${contrast})`
            }}
            draggable={false}
          />

          {isLocked && showControls && (
            <div className={styles.unlockHint}>Tap anywhere to show controls</div>
          )}
        </div>

        <div className={`${styles.controls} ${!showControls ? styles.controlsHidden : ''}`}>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>Size: {Math.round(scale * 100)}%</span>
              <input 
                type="range" min="0.1" max="5" step="0.01" value={scale} 
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className={styles.slider} disabled={isLocked}
              />
            </div>

            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>Brightness: {Math.round(brightness * 100)}%</span>
              <input 
                type="range" min="0.5" max="3" step="0.1" value={brightness} 
                onChange={(e) => setBrightness(parseFloat(e.target.value))}
                className={styles.slider} disabled={isLocked}
              />
            </div>

            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>Contrast: {Math.round(contrast * 100)}%</span>
              <input 
                type="range" min="0.5" max="3" step="0.1" value={contrast} 
                onChange={(e) => setContrast(parseFloat(e.target.value))}
                className={styles.slider} disabled={isLocked}
              />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.controlBtn} 
              onClick={() => { setPosition({ x: 0, y: 0 }); setScale(1); setRotation(0); setBrightness(1); setContrast(1); }}
              disabled={isLocked} title="Reset All"
            >
              <Move size={20} />
            </button>

            <button 
              className={styles.controlBtn} 
              onClick={() => setRotation(prev => (prev + 90) % 360)}
              disabled={isLocked} title="Rotate 90°"
            >
              <RotateCw size={20} />
            </button>

            <button 
              className={styles.controlBtn} onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            <button 
              className={styles.controlBtn} onClick={() => setIsLocked(!isLocked)}
              style={isLocked ? { background: 'var(--accent)', color: 'black' } : {}}
              title={isLocked ? "Unlock Controls" : "Lock for Tracing"}
            >
              {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} container`}>
      <h1 className={styles.title}>Tracing <span className="text-gradient">Studio</span></h1>
      <p className={styles.subtitle}>
        Select any design from our collection to open it in full-screen trace mode. 
        Adjust the size, lock your screen, and trace directly onto your fabric.
      </p>

      <div className={styles.grid}>
        {initialImages.map((image, idx) => (
          <div 
            key={image._id || idx} 
            className={styles.imageCard}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={urlFor(image.mainImage).width(400).height(400).url()}
              alt={image.title || 'Design'}
              fill
              className={styles.cardImage}
            />
            <div className={styles.cardTitle}>{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
