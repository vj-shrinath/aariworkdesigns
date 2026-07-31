'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, Minimize2, Lock, Unlock, X, Move, RotateCw, Type, LayoutGrid, List, Sparkles } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import styles from './TraceTool.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

interface TraceToolProps {
  initialImages: any[];
}

export default function TraceTool({ initialImages }: TraceToolProps) {
  const { t, locale } = useTranslation();
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
      'ए': 'e', 'ऐ': 'E', '오': 'o', 'औ': 'O'
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

  // Dynamically load tracing fonts only when Tracing Studio is loaded
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Pacifico&family=Great+Vibes&family=Montserrat:wght@400;700&family=Cinzel:wght@400;700&family=Homemade+Apple&family=Poppins:wght@400;700&family=Hind:wght@400;700&family=Kalam:wght@400;700&family=Rozha+One&family=Teko:wght@400;700&display=swap';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

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
    async function requestWakeLock() {
      if (!('wakeLock' in navigator)) return;
      try {
        wakeLock.current = await (navigator as any).wakeLock.request('screen');
      } catch (err) {
        console.error('Wake lock request failed:', err);
      }
    }

    if (selectedImage && isFullscreen) {
      requestWakeLock();
    } else {
      if (wakeLock.current) {
        wakeLock.current.release().then(() => {
          wakeLock.current = null;
        });
      }
    }

    return () => {
      if (wakeLock.current) {
        wakeLock.current.release();
      }
    };
  }, [selectedImage, isFullscreen]);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle image upload from local device
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setSelectedImage({
          isLocal: true,
          url: event.target.result as string,
          title: file.name
        });
      }
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Dragging event handlers
  const handleStart = (e: any) => {
    if (isLocked) return;
    
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    startPos.current = {
      x: clientX - position.x,
      y: clientY - position.y
    };

    // Pinch-to-zoom multi-touch recognition
    if (e.touches && e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
      const angle = Math.atan2(touch2.clientY - touch1.clientY, touch2.clientX - touch1.clientX) * 180 / Math.PI;
      
      setInitialDistance(distance);
      setInitialAngle(angle);
      setInitialScale(scale);
      setInitialRotation(rotation);
    }
  };

  const handleMove = (e: any) => {
    if (!isDragging.current || isLocked) return;

    // Handle Pinch Zoom
    if (e.touches && e.touches.length === 2 && initialDistance !== null && initialAngle !== null) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
      const currentAngle = Math.atan2(touch2.clientY - touch1.clientY, touch2.clientX - touch1.clientX) * 180 / Math.PI;
      
      const newScale = (currentDistance / initialDistance) * initialScale;
      const newRotation = (currentAngle - initialAngle) + initialRotation;

      setScale(Math.max(0.1, Math.min(5, newScale)));
      setRotation(newRotation);
      return;
    }

    // Handle single-touch drag panning
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    setPosition({
      x: clientX - startPos.current.x,
      y: clientY - startPos.current.y
    });
  };

  const handleEnd = () => {
    isDragging.current = false;
    setInitialDistance(null);
    setInitialAngle(null);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.error('Error enabling fullscreen:', err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.error('Error exiting fullscreen:', err));
    }
  };

  useEffect(() => {
    if (isLocked) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  }, [isLocked]);

  if (selectedImage) {
    const showControlsVal = !isLocked || showControls;
    const selectedImageTitle = selectedImage.isLocal ? selectedImage.title : translateField(selectedImage, 'title', locale);
    
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
                window.location.href = `/${locale}`;
              }
            } else {
              setSelectedImage(null);
              if (typeof window !== 'undefined') {
                window.history.replaceState({}, '', window.location.pathname);
              }
            }
          }}
          title={t('traceTool.exitTool', 'Exit Tool')}
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
          style={{ touchAction: 'none' }}
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
              <span>{t('traceTool.analyzingDesign', 'Analyzing design...')}</span>
            </div>
          )}

          {isLocked && showControls && (
            <div className={styles.unlockHint}>{t('traceTool.tapToShowControls', 'Tap anywhere to show controls')}</div>
          )}
        </div>

        <div className={`${styles.controls} ${!showControlsVal ? styles.controlsHidden : ''}`}>
          <div className={styles.sliderGroup}>
            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>{t('traceTool.size', 'Size')}: {Math.round(scale * 100)}%</span>
              <input 
                type="range" min="0.1" max="5" step="0.01" value={scale} 
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className={styles.slider} disabled={isLocked}
              />
            </div>

            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>{t('traceTool.brightness', 'Brightness')}: {Math.round(brightness * 100)}%</span>
              <input 
                type="range" min="0.5" max="3" step="0.1" value={brightness} 
                onChange={(e) => setBrightness(parseFloat(e.target.value))}
                className={styles.slider} disabled={isLocked}
              />
            </div>

            <div className={styles.sliderContainer}>
              <span className={styles.sliderLabel}>{t('traceTool.contrast', 'Contrast')}: {Math.round(contrast * 100)}%</span>
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
              disabled={isLocked} title={t('traceTool.resetAll', 'Reset All')}
            >
              <Move size={20} />
            </button>

            <button 
              className={styles.controlBtn} 
              onClick={() => setRotation(prev => (prev + 90) % 360)}
              disabled={isLocked} title={t('traceTool.rotate90', 'Rotate 90°')}
            >
              <RotateCw size={20} />
            </button>

            <button 
              className={styles.controlBtn} onClick={toggleFullscreen}
              title={isFullscreen ? t('traceTool.exitFullscreen', 'Exit Fullscreen') : t('traceTool.enterFullscreen', 'Fullscreen')}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            <button 
              className={styles.controlBtn} onClick={() => setIsLocked(!isLocked)}
              style={isLocked ? { background: 'var(--accent)', color: 'black' } : {}}
              title={isLocked ? t('traceTool.unlockControls', 'Unlock Controls') : t('traceTool.lockForTracing', 'Lock for Tracing')}
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
            <div className={styles.badge}>{t('traceTool.badge', '✦ Online Tracing Tool')}</div>
            <h1 className={styles.title}>
              {t('traceTool.title', 'Tracing ')}
              <span className="text-gradient">{t('traceTool.titleHighlight', 'Studio')}</span>
            </h1>
            <p 
              className={styles.subtitle}
              dangerouslySetInnerHTML={{
                __html: t('traceTool.subtitle', 'Select any design from our collection or <strong>upload your own</strong> to open it in trace mode.')
              }}
            />

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
                {t('traceTool.uploadPhoto', 'Upload Photo')}
              </button>
              <button 
                className={styles.textBtn}
                onClick={() => setIsTextModalOpen(true)}
              >
                <Type size={20} />
                {t('traceTool.writeText', 'Write Text')}
              </button>
            </div>

            {isTextModalOpen && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                  <button className={styles.closeModalBtn} onClick={() => setIsTextModalOpen(false)}>
                    <X size={24} />
                  </button>
                  <h2 className={styles.modalTitle}>{t('traceTool.writeYourText', 'Write Your Text')}</h2>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>{t('traceTool.textToTrace', 'Text to Trace')}</label>
                    <textarea 
                      className={styles.textInput}
                      placeholder={t('traceTool.textPlaceholder', 'Type your text here...')}
                      value={textToTrace}
                      onChange={(e) => setTextToTrace(e.target.value)}
                      rows={3}
                    />
                  </div>

                  {textToTrace && (
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{t('traceTool.fontPreview', 'Font Preview')}</label>
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
                    <label className={styles.inputLabel}>{t('traceTool.chooseFont', 'Choose Font')}</label>
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
                    {t('traceTool.startTracing', 'Start Tracing')}
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
          <h2 className={styles.sectionTitle}>{t('traceTool.selectDesignTemplate', 'Select Design Template')}</h2>
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
            {initialImages.map((image, idx) => {
              const imageTitle = translateField(image, 'title', locale);
              return (
                <div 
                  key={image._id || idx} 
                  className={styles.imageCard}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={urlFor(image.mainImage).width(400).height(400).url()}
                      alt={imageTitle || 'Design'}
                      fill
                      sizes="(max-width: 600px) 150px, (max-width: 900px) 300px, 400px"
                      className={styles.cardImage}
                    />
                    {/* Traceable badge in corner */}
                    <div className={styles.traceableBadgeCard}>
                      <Sparkles size={12} className={styles.sparkleIcon} />
                      <span>{t('traceTool.traceable', 'Traceable')}</span>
                    </div>
                    {/* Hover action overlay */}
                    <div className={styles.cardOverlayHover}>
                      <span className={styles.overlayBtnText}>
                        <Sparkles size={16} />
                        {t('traceTool.startTracing', 'Start Tracing')}
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardTitle}>{imageTitle}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.listViewContainer}>
            {initialImages.map((image, idx) => {
              const imageTitle = translateField(image, 'title', locale);
              return (
                <div 
                  key={image._id || idx} 
                  className={styles.listItem}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={styles.listItemLeft}>
                    <div className={styles.listImageWrapper}>
                      <img
                        src={urlFor(image.mainImage).width(150).height(150).url()}
                        alt={imageTitle || 'Design'}
                        className={styles.listImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.listItemInfo}>
                      <h3 className={styles.listItemTitle}>{imageTitle}</h3>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span className={styles.listBadge}>{t('traceTool.tracingPattern', 'Tracing Pattern')}</span>
                        <span className={styles.traceableBadge}>{t('traceTool.traceable', 'Traceable')}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItemRight}>
                    <div className={styles.listItemAction}>
                      <span>{t('traceTool.startTracing', 'Start Tracing')}</span>
                      <Sparkles size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
