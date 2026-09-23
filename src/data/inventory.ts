export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  fullName: string;
  condition: 'Foreign Used';
  bodyType: string;
  price: string;
  badge?: string;
  arrival?: string;
  features?: string[];
  specs: {
    transmission?: string;
    fuel?: string;
    drivetrain?: string;
    engine?: string;
    mileage?: string;
    exteriorColour?: string;
    interior?: string;
    duty?: string;
    location: string;
  };
  images: string[];
  youtubeVideoUrl?: string;
  tiktokVideoUrl?: string;
  instagramVideoUrl?: string;
  isNew?: boolean;
}

const LOCATION = '47 Ogunnusi Road, Ogba, Ikeja, Lagos';

export const inventory: Vehicle[] = [
  {
    id: 'mercedes-gla250-2015',
    year: 2015,
    make: 'Mercedes-Benz',
    model: 'GLA 250',
    fullName: '2015 Mercedes-Benz GLA 250',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    features: ['Push-Button Start'],
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2015-mercedes-gla250-01.jpg',
      '/src/assets/2015-mercedes-gla250-02.jpg',
      '/src/assets/2015-mercedes-gla250-03.jpg',
      '/src/assets/2015-mercedes-gla250-04.jpg',
      '/src/assets/2015-mercedes-gla250-07.jpg',
      '/src/assets/2015-mercedes-gla250-08.jpg',
      '/src/assets/2015-mercedes-gla250-09.jpg',
    ],
    isNew: true,
  },
  {
    id: 'toyota-camry-2012',
    year: 2012,
    make: 'Toyota',
    model: 'Camry',
    fullName: '2012 Toyota Camry',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    badge: 'JUST ARRIVED',
    arrival: 'September 2026',
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2012-toyota-camry-01.jpg',
      '/src/assets/2012-toyota-camry-02.jpg',
      '/src/assets/2012-toyota-camry-03.jpg',
      '/src/assets/2012-toyota-camry-04.jpg',
      '/src/assets/2012-toyota-camry-07.jpg',
      '/src/assets/2012-toyota-camry-08.jpg',
    ],
    isNew: true,
  },
  {
    id: 'hyundai-elantra-gt-2017',
    year: 2017,
    make: 'Hyundai',
    model: 'Elantra GT',
    fullName: '2017 Hyundai Elantra GT',
    condition: 'Foreign Used',
    bodyType: 'Hatchback',
    price: 'Contact for Price',
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2017-hyundai-elantra-gt-01.jpg',
      '/src/assets/2017-hyundai-elantra-gt-02.jpg',
      '/src/assets/2017-hyundai-elantra-gt-04.jpg',
      '/src/assets/2017-hyundai-elantra-gt-09.jpg',
      '/src/assets/2017-hyundai-elantra-gt-10.jpg',
    ],
    isNew: true,
  },
  {
    id: 'toyota-camry-se-2015',
    year: 2015,
    make: 'Toyota',
    model: 'Camry SE',
    fullName: '2015 Toyota Camry SE',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2015-toyota-camry-se-01.jpg',
      '/src/assets/2015-toyota-camry-se-02.jpg',
      '/src/assets/2015-toyota-camry-se-03.jpg',
      '/src/assets/2015-toyota-camry-se-05.jpg',
      '/src/assets/2015-toyota-camry-se-06.jpg',
    ],
  },
  {
    id: 'lexus-es350-2013',
    year: 2013,
    make: 'Lexus',
    model: 'ES 350',
    fullName: '2013 Lexus ES 350',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2013-lexus-es350-01.jpg',
      '/src/assets/2013-lexus-es350-02.jpg',
      '/src/assets/2013-lexus-es350-04.jpg',
      '/src/assets/2013-lexus-es350-06.jpg',
      '/src/assets/2013-lexus-es350-07.jpg',
      '/src/assets/2013-lexus-es350-08.jpg',
    ],
  },
  {
    id: 'hyundai-tucson-2016',
    year: 2016,
    make: 'Hyundai',
    model: 'Tucson 1.6T',
    fullName: '2016 Hyundai Tucson 1.6T',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    specs: {
      location: LOCATION,
    },
    images: [
      '/src/assets/2016-hyundai-tucson-1-6t-01.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-02.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-03.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-06.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-07.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-08.jpg',
      '/src/assets/2016-hyundai-tucson-1-6t-09.jpg',
    ],
  },
  {
    id: 'toyota-camry-2018',
    year: 2018,
    make: 'Toyota',
    model: 'Camry',
    fullName: '2018 Toyota Camry',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '2.5L 4-Cylinder',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600'],
  },
  {
    id: 'toyota-corolla-2017',
    year: 2017,
    make: 'Toyota',
    model: 'Corolla',
    fullName: '2017 Toyota Corolla',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '1.8L 4-Cylinder',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600'],
  },
  {
    id: 'lexus-rx350-2016',
    year: 2016,
    make: 'Lexus',
    model: 'RX 350',
    fullName: '2016 Lexus RX 350',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '3.5L V6',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1742941158083-be03727c216b?w=600'],
  },
  {
    id: 'lexus-es350-2018',
    year: 2018,
    make: 'Lexus',
    model: 'ES 350',
    fullName: '2018 Lexus ES 350',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '3.5L V6',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1779983625011-e9c207710d11?w=600'],
  },
  {
    id: 'honda-accord-2017',
    year: 2017,
    make: 'Honda',
    model: 'Accord',
    fullName: '2017 Honda Accord',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '2.4L 4-Cylinder',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1614220654876-8a75c41f7a7c?w=600'],
  },
  {
    id: 'mercedes-c300-2018',
    year: 2018,
    make: 'Mercedes-Benz',
    model: 'C300',
    fullName: '2018 Mercedes-Benz C300',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '2.0L Turbocharged',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1686562483617-3cf08d81e117?w=600'],
  },
  {
    id: 'toyota-rav4-2019',
    year: 2019,
    make: 'Toyota',
    model: 'RAV4',
    fullName: '2019 Toyota RAV4',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '2.5L 4-Cylinder',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600'],
  },
  {
    id: 'toyota-highlander-2017',
    year: 2017,
    make: 'Toyota',
    model: 'Highlander',
    fullName: '2017 Toyota Highlander',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '3.5L V6',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=600'],
  },
  {
    id: 'hyundai-sonata-2018',
    year: 2018,
    make: 'Hyundai',
    model: 'Sonata',
    fullName: '2018 Hyundai Sonata',
    condition: 'Foreign Used',
    bodyType: 'Sedan',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '2.4L 4-Cylinder',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=600'],
  },
  {
    id: 'honda-crv-2019',
    year: 2019,
    make: 'Honda',
    model: 'CR-V',
    fullName: '2019 Honda CR-V',
    condition: 'Foreign Used',
    bodyType: 'SUV',
    price: 'Contact for Price',
    specs: {
      transmission: 'Automatic',
      fuel: 'Petrol',
      engine: '1.5L Turbocharged',
      location: LOCATION,
    },
    images: ['https://images.unsplash.com/photo-1622210642960-0f6a2cdbdc9f?w=600'],
  },
];

export function openWhatsApp(message: string) {
  const phone = '2348037122549';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export function getSavedIds(): string[] {
  try {
    return JSON.parse(localStorage.getItem('dashlink-saved') || '[]');
  } catch {
    return [];
  }
}

export function toggleSaved(id: string): string[] {
  const saved = getSavedIds();
  const idx = saved.indexOf(id);
  if (idx >= 0) {
    saved.splice(idx, 1);
  } else {
    saved.push(id);
  }
  localStorage.setItem('dashlink-saved', JSON.stringify(saved));
  return saved;
}
