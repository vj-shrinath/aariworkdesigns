import Image from 'next/image';
import { urlFor } from './image';

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const asset = value?.asset;
      if (!asset) return null;

      // urlFor can handle the image object directly
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
};
