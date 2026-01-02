
export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Session {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  description: string;
  speaker: Speaker;
  track: 'Main Stage' | 'Workshop' | 'Dev Room';
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  status: 'available' | 'sold_out' | 'limited';
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
}
