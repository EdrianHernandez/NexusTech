export const EVENT_DATE = new Date('2025-10-24T09:00:00');

export const TICKETS = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    price: 199,
    description: 'Perfect for enthusiasts joining us early.',
    features: ['Access to main stage', 'Digital Swag Bag', 'Networking Lounge', 'Event Recordings'],
    status: 'limited'
  },
  {
    id: 'standard',
    name: 'Standard Pass',
    price: 499,
    description: 'The complete experience for tech professionals.',
    isPopular: true,
    features: ['Everything in Early Bird', 'Workshop Access', 'Gala Dinner', 'Priority Support'],
    status: 'available'
  },
  {
    id: 'vip',
    name: 'VIP Executive',
    price: 999,
    description: 'Premium access and dedicated networking.',
    features: ['Everything in Standard', 'Executive Lounge', 'Private Roundtables', 'Speaker Dinner', 'Luxury Merch Box'],
    status: 'available'
  }
];

const SPEAKERS = {
  s1: { id: 's1', name: 'Sarah Drasner', role: 'VP Developer Experience', company: 'Netlify', avatar: 'https://picsum.photos/id/64/200/200' },
  s2: { id: 's2', name: 'Guillermo Rauch', role: 'CEO', company: 'Vercel', avatar: 'https://picsum.photos/id/65/200/200' },
  s3: { id: 's3', name: 'Rich Harris', role: 'Creator of Svelte', company: 'Vercel', avatar: 'https://picsum.photos/id/66/200/200' },
  s4: { id: 's4', name: 'Lee Robinson', role: 'VP of Product', company: 'Next.js', avatar: 'https://picsum.photos/id/67/200/200' },
};

export const SCHEDULE = [
  {
    id: '1',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    title: 'Opening Keynote: The Future of the Web',
    description: 'Exploring the convergence of AI, edge computing, and modern frameworks.',
    speaker: SPEAKERS.s1,
    track: 'Main Stage'
  },
  {
    id: '2',
    startTime: '10:30 AM',
    endTime: '11:30 AM',
    title: 'Building Performant Interfaces',
    description: 'Deep dive into rendering patterns and performance metrics for 2025.',
    speaker: SPEAKERS.s2,
    track: 'Main Stage'
  },
  {
    id: '3',
    startTime: '01:00 PM',
    endTime: '02:30 PM',
    title: 'Workshop: Full-stack Development with AI',
    description: 'A hands-on session on integrating LLMs into your production workflow.',
    speaker: SPEAKERS.s4,
    track: 'Workshop'
  },
  {
    id: '4',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    title: 'Svelte 5 and the Future of Reactivity',
    description: 'Understanding runes and the evolution of reactive programming.',
    speaker: SPEAKERS.s3,
    track: 'Main Stage'
  }
];

export const SPONSORS = [
  { id: '1', name: 'Google Cloud', tier: 'Platinum', logo: 'https://picsum.photos/id/101/200/100?grayscale' },
  { id: '2', name: 'AWS', tier: 'Platinum', logo: 'https://picsum.photos/id/102/200/100?grayscale' },
  { id: '3', name: 'Microsoft Azure', tier: 'Platinum', logo: 'https://picsum.photos/id/103/200/100?grayscale' },
  { id: '4', name: 'GitHub', tier: 'Gold', logo: 'https://picsum.photos/id/104/200/100?grayscale' },
  { id: '5', name: 'OpenAI', tier: 'Gold', logo: 'https://picsum.photos/id/105/200/100?grayscale' },
  { id: '6', name: 'Figma', tier: 'Gold', logo: 'https://picsum.photos/id/106/200/100?grayscale' },
  { id: '7', name: 'Stripe', tier: 'Silver', logo: 'https://picsum.photos/id/107/200/100?grayscale' },
  { id: '8', name: 'Clerk', tier: 'Silver', logo: 'https://picsum.photos/id/108/200/100?grayscale' },
];
