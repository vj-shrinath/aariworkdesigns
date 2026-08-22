export interface AmazonProduct {
  id: string; // ASIN or internal ID
  title: string;
  priceEstimate: string; // E.g., "From ₹199"
  imageUrl: string; 
  amazonUrl: string; // Base URL, tag will be appended dynamically
  matchKeywords: string[];
  priority: number;
}

export const AMAZON_INDIA_PRODUCTS: AmazonProduct[] = [
  {
    id: 'needle-set',
    title: 'Aari Embroidery Needles/Hooks Set (Tulip/Iron)',
    priceEstimate: '₹250 - ₹400',
    imageUrl: 'https://images.unsplash.com/photo-1605282717149-a2e6dbb57cd2?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=tulip+aari+embroidery+needle',
    matchKeywords: ['needle', 'hook', 'maggam hook', 'tulip needle', 'iron needle', 'stitching', 'chain stitch'],
    priority: 10,
  },
  {
    id: 'zardosi-wire',
    title: 'Premium Zardosi / French Wire for Embroidery',
    priceEstimate: '₹299',
    imageUrl: 'https://images.unsplash.com/photo-1574768390786-8a0323a6f4bd?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=french+wire+zardosi+embroidery',
    matchKeywords: ['zardosi', 'zardozi', 'french wire', 'bullion wire', 'loading', 'padded', 'spring'],
    priority: 9,
  },
  {
    id: 'silk-thread',
    title: 'Anchor Mercerised Cotton / Silk Threads Kit',
    priceEstimate: '₹350',
    imageUrl: 'https://images.unsplash.com/photo-1584852994474-325244be25fb?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=anchor+mercerised+cotton+silk+thread',
    matchKeywords: ['silk thread', 'cotton thread', 'anchor thread', 'zari', 'metallic thread', 'embroidery thread'],
    priority: 8,
  },
  {
    id: 'sugar-beads',
    title: 'Sugar Beads / Cut Beads Set (Antique Gold)',
    priceEstimate: '₹199 - ₹399',
    imageUrl: 'https://images.unsplash.com/photo-1598284500984-789a26dc31db?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=sugar+beads+antique+gold+embroidery',
    matchKeywords: ['beads', 'sugar bead', 'cut bead', 'moti', 'pearl', 'stone', 'kundan'],
    priority: 8,
  },
  {
    id: 'wooden-stand',
    title: 'Aari Maggam Work Stand/Frame (18 inch Wooden)',
    priceEstimate: '₹950',
    imageUrl: 'https://images.unsplash.com/photo-1621256330911-39fe9d05e3be?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=aari+maggam+work+stand+18+inch',
    matchKeywords: ['frame', 'stand', 'maggam stand', 'embroidery hoop', 'cot', 'wooden frame'],
    priority: 9,
  },
  {
    id: 'tracing-paper',
    title: 'Yellow Tracing Carbon Paper for Fabric',
    priceEstimate: '₹150',
    imageUrl: 'https://images.unsplash.com/photo-1584347781078-d5a23f33cc2d?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=yellow+tracing+carbon+paper+fabric',
    matchKeywords: ['trace', 'tracing paper', 'carbon paper', 'yellow paper', 'kerosene', 'transfer pattern'],
    priority: 10,
  },
  {
    id: 'fabric-glue',
    title: 'Fevicryl Fabric Glue (For Stone & Mirror Work)',
    priceEstimate: '₹120',
    imageUrl: 'https://images.unsplash.com/photo-1549491122-cb03f26b5c39?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.in/s?k=fevicryl+fabric+glue',
    matchKeywords: ['glue', 'fabric glue', 'fevicryl', 'adhesive', 'mirror work', 'kundan sticking', 'sticking'],
    priority: 7,
  }
];

// Fallback search link structure if we want general keywords
export const getAmazonSearchUrl = (keyword: string, tag: string) => {
  return `https://www.amazon.in/s?k=${encodeURIComponent(keyword)}&tag=${tag}`;
};
