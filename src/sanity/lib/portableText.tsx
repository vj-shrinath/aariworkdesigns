import Image from 'next/image';
import { urlFor } from './image';

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const asset = value?.asset;
      if (!asset) return null;

      const imageUrl = urlFor(value).url();
      if (!imageUrl) return null;

      return (
        <div className="my-10" style={{ margin: '2.5rem 0' }}>
          <img
            src={imageUrl}
            alt={value.alt || 'Blog Image'}
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-12 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      const { href, isAffiliate, productName, productImage, price } = value;
      
      if (isAffiliate) {
        return (
          <span style={{ display: 'block', margin: '2rem 0', clear: 'both' }}>
            <span 
              style={{ 
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.25rem',
                gap: '1.25rem',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              {productImage && (
                <img 
                  src={urlFor(productImage).width(200).height(200).url()} 
                  alt={productName || 'Product'} 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '12px', 
                    objectFit: 'cover' 
                  }} 
                />
              )}
              <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{productName || children}</strong>
                {price && <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{price}</span>}
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    width: 'fit-content',
                    padding: '0.6rem 1.5rem',
                    background: 'var(--accent)',
                    color: 'white',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    marginTop: '0.25rem'
                  }}
                >
                  Buy Now
                </a>
              </span>
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
