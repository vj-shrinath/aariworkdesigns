'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, Minimize2, ZoomIn, ZoomOut, Lock, Unlock, X, Move, RotateCw, Type, LayoutGrid, List, Sparkles } from 'lucide-react';
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
  const [isUploading, setIsUploading] = useState(false);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [textToTrace, setTextToTrace] = useState('');
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('trace_view_mode');
      return (saved === 'list' || saved === 'grid') ? saved : 'grid';
    }
    return 'grid';
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const wasOpenedFromUrl = useRef(false);

  const handleSetViewMode = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('trace_view_mode', mode);
    }
  };


  const fonts = [
    // English/Global
    'Inter', 'Playfair Display', 'Dancing Script', 'Pacifico', 'Great Vibes', 'Montserrat', 'Cinzel', 'Homemade Apple',
    // Devanagari
    'Poppins', 'Hind', 'Kalam', 'Rozha One', 'Teko',
    // Special
    'Infinity-05'
  ];

  // Enhanced Unicode to AMS Mapping
  const convertUnicodeToAMS = (text: string) => {
    if (!text) return '';
    
    let converted = text;

    // 1. Handle the 'i' matra (ि) reordering
    // Unicode: Consonant + \u093f -> AMS: i + mapped(Consonant)
    converted = converted.replace(/([\u0915-\u0939])(\u093f)/g, 'i$1');

    // 2. Map other common matras
    const matraMapping: { [key: string]: string } = {
      '\u093e': 'A', // ा
      '\u0940': 'I', // ी
      '\u0941': 'u', // ु
      '\u0942': 'U', // ू
      '\u0947': 'e', // े
      '\u0948': 'E', // ै
      '\u094b': 'o', // ो
      '\u094c': 'O', // ौ
      '\u0902': 'M', // ं
      '\u0903': 'H', // ः
    };

    // 3. Map consonants
    const consonantMapping: { [key: string]: string } = {
      'क': 'k', 'ख': 'K', 'ग': 'g', 'घ': 'G', 'ङ': 'f',
      'च': 'c', 'छ': 'C', 'ज': 'j', 'झ': 'J', 'ञ': 'F',
      'ट': 't', 'ठ': 'T', 'ड': 'd', 'ढ': 'D', 'ण': 'N',
      'त': 'v', 'थ': 'V', 'द': 'y', 'ध': 'Y', 'न': 'n',
      'प': 'p', 'फ': 'P', 'ब': 'b', 'भ': 'B', 'म': 'm',
      'य': 'z', 'र': 'r', 'ल': 'l', 'व': 'w', 'श': 'S',
      'ष': 'q', 'स': 's', 'ह': 'h', 'ळ': 'L', 'क्ष': 'X', 'ज्ञ': 'Z',
      // Vowels
      'अ': 'a', 'आ': 'A', 'इ': 'i', 'ई': 'I', 'उ': 'u', 'ऊ': 'U',
      'ए': 'e', 'ऐ': 'E', 'ओ': 'o', 'औ': 'O'
    };

    // Apply mappings
    Object.keys(matraMapping).forEach(key => {
      converted = converted.replace(new RegExp(key, 'g'), matraMapping[key]);
    });
    
    Object.keys(consonantMapping).forEach(key => {
      converted = converted.replace(new RegExp(key, 'g'), consonantMapping[key]);
    });

    return converted;
  };

  const getDisplayText = (text: string, font: string) => {
    if (font === 'Infinity-05') return convertUnicodeToAMS(text);
    return text;
  };

  
  const [initialDistance, setInitialDistance] = useState<number | null>(null);
  const [initialAngle, setInitialAngle] = useState<number | null>(null);
  const [initialScale, setInitialScale] = useState(1);
  const [initialRotation, setInitialRotation] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const wakeLock = useRef<any>(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  // Handle URL query parameter 'img' to automatically open in tracing studio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const imgUrl = params.get('img');
      if (imgUrl) {
        wasOpenedFromUrl.current = true;
        setSelectedImage({
          isLocal: true,
          url: imgUrl,
          title: 'Tracing Image'
        });
      }
    }
  }, []);

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

  // Helper functions for multi-touch
  const getDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getAngle = (touches: React.TouchList) => {
    const dx = touches[1].clientX - touches[0].clientX;
    const dy = touches[1].clientY - touches[0].clientY;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  // Dragging and Multi-touch logic
  const handleStart = (e: any) => {
    if (isLocked) return;
    
    if (e.type === 'touchstart' && e.touches.length === 2) {
      // Start multi-touch (pinch/rotate)
      isDragging.current = false; // Stop dragging when multi-touch starts
      const dist = getDistance(e.touches);
      const angle = getAngle(e.touches);
      setInitialDistance(dist);
      setInitialAngle(angle);
      setInitialScale(scale);
      setInitialRotation(rotation);
    } else {
      // Start single touch/mouse (drag)
      isDragging.current = true;
      const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
      startPos.current = { x: clientX - position.x, y: clientY - position.y };
    }
  };

  const handleMove = (e: any) => {
    if (isLocked) return;

    if (e.type === 'touchmove' && e.touches.length === 2) {
      if (initialDistance === null || initialAngle === null) return;
      
      // Handle Zoom
      const currentDist = getDistance(e.touches);
      const newScale = (currentDist / initialDistance) * initialScale;
      setScale(Math.min(Math.max(newScale, 0.1), 5));

      // Handle Rotation
      const currentAngle = getAngle(e.touches);
      const angleDiff = currentAngle - initialAngle;
      setRotation((initialRotation + angleDiff) % 360);
      
      e.preventDefault(); // Prevent scrolling while pinching
    } else if (isDragging.current) {
      // Handle Drag
      const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
      setPosition({
        x: clientX - startPos.current.x,
        y: clientY - startPos.current.y
      });
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    setInitialDistance(null);
    setInitialAngle(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Show instantly in canvas
    const localUrl = URL.createObjectURL(file);
    setSelectedImage({
      isLocal: true,
      url: localUrl,
      title: 'My Design'
    });

    // 2. Background upload
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }
      console.log('Background upload success');
    } catch (err) {
      console.error('Background upload error:', err);
    } finally {
      setIsUploading(false);
    }
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
          onClick={() => {
            if (document.fullscreenElement) {
              document.exitFullscreen().catch(err => console.error(err));
            }
            if (wasOpenedFromUrl.current && typeof window !== 'undefined') {
              if (document.referrer && document.referrer.includes(window.location.host)) {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = document.referrer;
                }
              } else {
                window.location.href = '/';
              }
            } else {
              setSelectedImage(null);
              if (typeof window !== 'undefined') {
                window.history.replaceState({}, '', window.location.pathname);
              }
            }
          }}
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
          style={{ touchAction: isLocked ? 'none' : 'none' }} // Disable default touch behavior
        >
          {isLocked && <div className={styles.lockOverlay} />}
          
          {selectedImage.isText ? (
            <div
              className={styles.traceText}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                filter: `brightness(${brightness}) contrast(${contrast})`,
                fontFamily: `'${selectedFont}', sans-serif`,
                fontSize: '100px'
              }}
            >
              {getDisplayText(selectedImage.text, selectedFont)}
            </div>
          ) : (
            <img
              src={selectedImage.isLocal ? selectedImage.url : urlFor(selectedImage.mainImage).url()}
              alt="Tracing design"
              className={styles.traceImage}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                filter: `brightness(${brightness}) contrast(${contrast})`
              }}
              draggable={false}
            />
          )}

          {isUploading && (
            <div className={styles.uploadIndicator}>
              <div className={styles.spinner}></div>
              <span>Analyzing design...</span>
            </div>
          )}

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

            {selectedImage?.isText && (
              <select 
                className={styles.toolbarSelect}
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                disabled={isLocked}
              >
                {fonts.map(font => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.heroArea}>
        <div className={styles.heroBackground}></div>
        <div className={`${styles.container} container`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>✦ Online Tracing Tool</div>
            <h1 className={styles.title}>Tracing <span className="text-gradient">Studio</span></h1>
            <p className={styles.subtitle}>
              Select any design from our collection or <strong>upload your own</strong> to open it in full-screen trace mode. 
              Adjust the size, lock your screen, and trace directly onto your fabric.
            </p>

            <div className={styles.uploadSection}>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
              <button 
                className={styles.uploadBtn}
                onClick={() => fileInputRef.current?.click()}
              >
                <Maximize2 size={20} />
                Upload Photo
              </button>
              <button 
                className={styles.textBtn}
                onClick={() => setIsTextModalOpen(true)}
              >
                <Type size={20} />
                Write Text
              </button>
            </div>

            {isTextModalOpen && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                  <button className={styles.closeModalBtn} onClick={() => setIsTextModalOpen(false)}>
                    <X size={24} />
                  </button>
                  <h2 className={styles.modalTitle}>Write Your Text</h2>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Text to Trace</label>
                    <textarea 
                      className={styles.textInput}
                      placeholder="Type your text here..."
                      value={textToTrace}
                      onChange={(e) => setTextToTrace(e.target.value)}
                      rows={3}
                    />
                  </div>

                  {textToTrace && (
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Font Preview</label>
                      <div 
                        className={styles.fontPreview}
                        style={{ 
                          fontFamily: `'${selectedFont}', sans-serif`
                        }}
                      >
                        {getDisplayText(textToTrace, selectedFont)}
                      </div>
                    </div>
                  )}

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Choose Font</label>
                    <select 
                      className={styles.selectInput}
                      value={selectedFont}
                      onChange={(e) => setSelectedFont(e.target.value)}
                    >
                      {fonts.map(font => (
                        <option key={font} value={font}>{font}</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    className={styles.startBtn}
                    onClick={() => {
                      if (!textToTrace.trim()) return;
                      setSelectedImage({
                        isText: true,
                        text: textToTrace,
                        font: selectedFont
                      });
                      setIsTextModalOpen(false);
                    }}
                  >
                    Start Tracing
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`${styles.container} container`}>
        {/* Controls block for Grid/List view */}
        <div className={styles.listControls}>
          <h2 className={styles.sectionTitle}>Select a Design Template</h2>
          <div className={styles.viewToggleWrapper}>
            <button
              type="button"
              onClick={() => handleSetViewMode('grid')}
              className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleSetViewMode('list')}
              className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className={styles.grid}>
            {initialImages.map((image, idx) => (
              <div 
                key={image._id || idx} 
                className={styles.imageCard}
                onClick={() => setSelectedImage(image)}
              >
                <div className={styles.cardImageContainer}>
                  <Image
                    src={urlFor(image.mainImage).width(400).height(400).url()}
                    alt={image.title || 'Design'}
                    fill
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardTitle}>{image.title}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.listViewContainer}>
            {initialImages.map((image, idx) => (
              <div 
                key={image._id || idx} 
                className={styles.listItem}
                onClick={() => setSelectedImage(image)}
              >
                <div className={styles.listItemLeft}>
                  <div className={styles.listImageWrapper}>
                    <img
                      src={urlFor(image.mainImage).width(600).height(600).url()}
                      alt={image.title || 'Design'}
                      className={styles.listImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.listItemInfo}>
                    <h3 className={styles.listItemTitle}>{image.title}</h3>
                    <span className={styles.listBadge}>Tracing Pattern</span>
                  </div>
                </div>
                <div className={styles.listItemRight}>
                  <div className={styles.listItemAction}>
                    <span>Open in Studio</span>
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
