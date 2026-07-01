import Image from 'next/image';
import { urlFor } from './image';
import GallerySlider from '@/components/GallerySlider';


export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const asset = value?.asset;
      if (!asset) return null;

      const imageUrl = urlFor(value).url();
      if (!imageUrl) return null;

      const isTracingDesign = value.isDesignTrace || 
                             value.categories?.some((c: any) => 
                               ['Tracing Design', 'Embroidery Design', 'Aari Pattern'].includes(c.title)
                             );

      return (
        <div className="post-image-container" style={{ margin: '3rem 0' }}>
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img
              src={imageUrl}
              alt={value.alt || 'Aari Design Pattern'}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="image-overlay" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              {/* Overlay actions could go here */}
            </div>
          </div>
          
          {value.caption && (
            <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              {value.caption}
            </p>
          )}

          {isTracingDesign && (
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <a 
                href={`/trace?img=${encodeURIComponent(imageUrl)}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.8rem 2rem',
                  background: 'var(--accent-gradient)',
                  color: 'var(--bg-primary)',
                  borderRadius: '50px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition)'
                }}
                className="trace-button"
              >
                <span>Open in Tracing Tool</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      );
    },
    imageGallery: ({ value }: any) => {
      if (!value.images || value.images.length === 0) return null;

      const displayMode = value.display || 'grid';
      // Gallery-level flag: if true, ALL images are treated as design traces
      const allTrace = value.allImagesAreTrace === true;

      if (displayMode === 'grid') {
        return (
          <div className="image-gallery-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem', 
            margin: '3.5rem 0'
          }}>
            {value.images.map((img: any, index: number) => {
              const imageUrl = urlFor(img).url();
              if (!imageUrl) return null;
              
              // allTrace: gallery-level flag overrides individual per-image flag
              const isTracingDesign = allTrace || img.isDesignTrace;

              return (
                <div 
                  key={img._key || index} 
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-md)',
                    background: 'var(--bg-tertiary)',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ borderRadius: '12px', overflow: 'hidden', width: '100%' }}>
                    <img
                      src={imageUrl}
                      alt={img.alt || `Gallery image ${index + 1}`}
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        objectFit: 'contain', 
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      className="gallery-grid-image"
                    />
                  </div>
                  {(img.alt || img.caption || isTracingDesign) && (
                    <div style={{
                      paddingTop: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}>
                      {img.alt && <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>{img.alt}</span>}
                      {img.caption && <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic' }}>{img.caption}</span>}
                      
                      {isTracingDesign && (
                        <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                          <a
                            href={`/trace?img=${encodeURIComponent(imageUrl)}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.6rem',
                              padding: '0.6rem 1.4rem',
                              background: 'var(--accent-gradient)',
                              color: 'var(--bg-primary)',
                              borderRadius: '50px',
                              fontWeight: '700',
                              textDecoration: 'none',
                              fontSize: '0.85rem',
                              boxShadow: 'var(--shadow-md)',
                              transition: 'var(--transition)',
                              width: '100%',
                              justifyContent: 'center'
                            }}
                            className="trace-button"
                          >
                            <span>Open in Tracing Tool</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      }

      return (
        <GallerySlider images={value.images} displayMode={displayMode} allTrace={allTrace} />
      );
    },
  },
  block: {
    h2: ({ children, value }: any) => {
      const id = value._key;
      return (
        <h2 id={id} className="text-4xl font-black mb-12 pt-16 border-t border-border" style={{ 
          marginTop: '6rem', 
          fontFamily: 'var(--font-heading)', 
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: '1.3'
        }}>
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const id = value._key;
      return (
        <h3 id={id} className="text-2xl font-extrabold mb-10" style={{ 
          marginTop: '4.5rem', 
          fontFamily: 'var(--font-heading)', 
          color: 'var(--accent)',
          letterSpacing: '-0.01em',
          lineHeight: '1.4'
        }}>
          {children}
        </h3>
      );
    },
    normal: ({ children }: any) => (
      <p className="text-xl" style={{ 
        marginBottom: '2.5rem', 
        lineHeight: '2', 
        color: 'var(--text-primary)', 
        opacity: 0.9,
        fontWeight: '400'
      }}>
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote style={{ 
        padding: 'var(--blockquote-padding)', 
        borderRadius: '0 24px 24px 0',
        background: 'rgba(212, 175, 55, 0.05)',
        color: 'var(--accent)',
        lineHeight: '1.8',
        margin: '2rem 0',
        borderLeft: '4px solid var(--accent)',
        fontStyle: 'italic',
        fontSize: '1.4rem'
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-8 mb-16 list-disc space-y-8" style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>{children}</ul>,
    number: ({ children }: any) => <ol className="ml-8 mb-16 list-decimal space-y-8" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '2rem' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="pl-6 leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="pl-6 leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ value, children }: any) => {
      const { href, isAffiliate, productName, productImage, price } = value;
      
      if (isAffiliate) {
        return (
          <span className="affiliate-card">
            {productImage && (
              <img 
                src={urlFor(productImage).width(300).height(300).url()} 
                alt={productName || 'Product'} 
                className="affiliate-img"
              />
            )}
            <span className="affiliate-info">
              <strong className="affiliate-title">{productName || children}</strong>
              {price && <span className="affiliate-price">{price}</span>}
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="affiliate-button"
              >
                Buy Now
              </a>
            </span>
          </span>
        );
      }

      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'var(--accent)', textDecoration: 'underline' }}
        >
          {children}
        </a>
      );
    },
  },
};
