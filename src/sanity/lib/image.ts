import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

const createFallbackBuilder = (): any => {
  const handler: ProxyHandler<any> = {
    get(_target, prop) {
      if (prop === 'url' || prop === 'toString') {
        return () => '';
      }
      return () => new Proxy(() => {}, handler);
    },
    apply() {
      return new Proxy(() => {}, handler);
    }
  };
  return new Proxy(() => {}, handler);
};

export const urlFor = (source: SanityImageSource) => {
  if (!source) return createFallbackBuilder();
  if (typeof source === 'object' && 'asset' in source && !source.asset) {
    return createFallbackBuilder();
  }

  try {
    const imgBuilder = builder.image(source);
    const originalUrl = imgBuilder.url.bind(imgBuilder);
    imgBuilder.url = () => {
      try {
        return originalUrl() || '';
      } catch (err) {
        console.warn('urlFor failed to resolve URL:', err);
        return '';
      }
    };
    return imgBuilder;
  } catch (err) {
    console.warn('urlFor constructor error:', err);
    return createFallbackBuilder();
  }
};
