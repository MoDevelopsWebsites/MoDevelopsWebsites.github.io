import { Shield, Zap, Clock, Star, Cpu, Gauge, Headphones } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  stripeLink: string;
  description: string;
  longDescription?: string;
  features: string[];
  benefits?: {
    icon: any;
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  image?: string;
  category: 'tweak' | 'boost';
  duration?: string;
}

export const premiumTweaks: Product[] = [
  {
    id: 'premium-bundle',
    name: 'Premium Bundle',
    price: 30,
    stripeLink: 'https://buy.stripe.com/aEUaHBcHYdbD8RW5kk',
    description: 'Comprehensive optimization package',
    longDescription: 'Our Premium Bundle combines all of our optimization tweaks into one comprehensive package. Boost your FPS, reduce input delay, and optimize your network connection for the ultimate gaming experience. This bundle includes everything you need to gain a competitive edge.',
    features: [
      'Advanced FPS Optimization',
      'Input Delay Reduction',
      'Network Latency Optimization',
      'System Performance Tweaks',
      'Custom Configuration Files',
      'Priority Support Access',
      'Regular Updates',
      'Performance Monitoring Tools'
    ],
    benefits: [
      {
        icon: Cpu,
        title: 'Increased FPS',
        description: 'Experience up to 40% higher frame rates for smoother gameplay and better visual clarity during intense gaming moments.'
      },
      {
        icon: Clock,
        title: 'Reduced Input Delay',
        description: 'Feel the difference with up to 30% lower input latency, giving you faster response times and better control.'
      },
      {
        icon: Gauge,
        title: 'Network Optimization',
        description: 'Enjoy more stable connections with reduced packet loss and up to 25% lower ping in competitive games.'
      },
      {
        icon: Headphones,
        title: 'Priority Support',
        description: 'Get access to our dedicated support team for personalized assistance and optimization advice.'
      }
    ],
    faqs: [
      {
        question: 'What games does this work with?',
        answer: 'Our Premium Bundle works with all major competitive games including Fortnite, Valorant, Apex Legends, Call of Duty, and more. The tweaks are designed to optimize your entire system for gaming performance.'
      },
      {
        question: 'Will this affect my warranty or damage my PC?',
        answer: 'No, our tweaks only modify approved system settings and game configurations. They don\'t make any permanent changes to your hardware and can be easily reverted if needed.'
      },
      {
        question: 'How do I receive the tweaks after purchase?',
        answer: 'After purchase, you\'ll need to join our Discord server and create a support ticket. Our team will then provide you with the tweaks and guide you through the installation process.'
      },
      {
        question: 'Do I need technical knowledge to apply these tweaks?',
        answer: 'No technical knowledge is required. We provide step-by-step instructions and our support team is available to help you through the entire process.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    category: 'tweak'
  },
  {
    id: 'input-delay',
    name: 'Input Delay Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/7sI4jd7nEefH7NS5kn',
    description: 'Minimize input lag and enhance responsiveness',
    longDescription: 'Our Input Delay Tweaks are specifically designed to reduce the time between your physical inputs and the corresponding actions in-game. By optimizing your system\'s input processing pipeline, you\'ll experience more responsive controls and gain a competitive advantage in fast-paced games.',
    features: [
      'USB Port Optimization',
      'DirectInput Enhancement',
      'System Latency Reduction',
      'Custom Input Configuration'
    ],
    benefits: [
      {
        icon: Clock,
        title: 'Faster Response Time',
        description: 'Experience up to 30% reduction in input delay for more responsive controls and better precision.'
      },
      {
        icon: Gauge,
        title: 'Improved Accuracy',
        description: 'Enhanced input precision helps you land more shots and execute complex movements with greater accuracy.'
      },
      {
        icon: Shield,
        title: 'Competitive Edge',
        description: 'Gain a significant advantage in fast-paced competitive games where milliseconds matter.'
      },
      {
        icon: Zap,
        title: 'Instant Results',
        description: 'Feel the difference immediately after applying our carefully crafted input delay optimizations.'
      }
    ],
    faqs: [
      {
        question: 'How much input delay reduction can I expect?',
        answer: 'Most users experience a 20-30% reduction in input delay, though results may vary depending on your hardware and current configuration.'
      },
      {
        question: 'Will this work with all input devices?',
        answer: 'Yes, our tweaks optimize the system-level input processing, benefiting all USB and PS/2 input devices including keyboards, mice, and controllers.'
      },
      {
        question: 'Do I need to reinstall these tweaks after a Windows update?',
        answer: 'Major Windows updates may reset some settings. We provide a guide on how to check and reapply tweaks after updates, and our support team is always available to help.'
      },
      {
        question: 'Can I revert these changes if needed?',
        answer: 'Absolutely. We provide instructions on how to revert all changes, and none of the tweaks make permanent modifications to your system.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=600&fit=crop',
    category: 'tweak'
  },
  {
    id: 'fps-tweaks',
    name: 'FPS Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/bIY9Dx4bs2wZ4BG5kl',
    description: 'Boost your frames per second and reduce stuttering',
    longDescription: 'Our FPS Tweaks package is designed to maximize your system\'s performance and deliver higher, more stable frame rates in all your favorite games. By optimizing your GPU and CPU settings, along with game-specific configurations, you\'ll experience smoother gameplay with reduced stuttering and frame drops.',
    features: [
      'GPU Optimization',
      'CPU Priority Settings',
      'Memory Management',
      'Graphics Optimization'
    ],
    benefits: [
      {
        icon: Cpu,
        title: 'Higher Frame Rates',
        description: 'Experience up to 40% increase in FPS for smoother gameplay and better visual clarity.'
      },
      {
        icon: Gauge,
        title: 'Reduced Stuttering',
        description: 'Enjoy more consistent frame times with significantly reduced stuttering and micro-freezes.'
      },
      {
        icon: Zap,
        title: 'Optimized Resource Usage',
        description: 'Better CPU and GPU resource allocation ensures your hardware performs at its maximum potential.'
      },
      {
        icon: Shield,
        title: 'Game-Specific Tweaks',
        description: 'Receive optimized settings for your specific games to maximize performance without sacrificing visual quality.'
      }
    ],
    faqs: [
      {
        question: 'Will these tweaks work on lower-end systems?',
        answer: 'Yes, our FPS tweaks are especially beneficial for lower-end systems, often providing even more noticeable improvements than on high-end hardware.'
      },
      {
        question: 'Do I need to modify my hardware in any way?',
        answer: 'No hardware modifications are required. Our tweaks focus on software optimizations that maximize the performance of your existing hardware.'
      },
      {
        question: 'Will these tweaks affect system stability?',
        answer: 'Our tweaks are thoroughly tested to ensure system stability. We focus on safe optimizations that improve performance without risking system crashes or instability.'
      },
      {
        question: 'How often are the FPS tweaks updated?',
        answer: 'We regularly update our tweaks to accommodate new game releases, driver updates, and Windows changes. Customers receive these updates for free.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=600&fit=crop',
    category: 'tweak'
  },
  {
    id: 'ping-tweaks',
    name: 'Ping Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/fZebLF5fw4F70lq5ko',
    description: 'Reduce latency and improve connection',
    longDescription: 'Our Ping Tweaks package is designed to optimize your network connection for gaming, reducing latency and packet loss for a more stable online experience. By fine-tuning your network settings and optimizing routing, you\'ll experience lower ping, fewer disconnects, and more consistent performance in online games.',
    features: [
      'Network Protocol Optimization',
      'Router Configuration',
      'DNS Optimization',
      'Traffic Prioritization'
    ],
    benefits: [
      {
        icon: Gauge,
        title: 'Lower Ping',
        description: 'Experience up to 25% reduction in ping for faster response times in online games.'
      },
      {
        icon: Shield,
        title: 'Reduced Packet Loss',
        description: 'Enjoy more stable connections with significantly less packet loss and fewer disconnects.'
      },
      {
        icon: Zap,
        title: 'Optimized Routing',
        description: 'Our tweaks ensure your gaming traffic takes the most efficient route to game servers.'
      },
      {
        icon: Headphones,
        title: 'Better Voice Chat',
        description: 'Experience clearer voice communications with less lag and fewer dropouts.'
      }
    ],
    faqs: [
      {
        question: 'Will these tweaks work with my internet provider?',
        answer: 'Yes, our ping tweaks work with all internet service providers and connection types, including fiber, cable, DSL, and even mobile hotspots.'
      },
      {
        question: 'Do I need to change my router settings?',
        answer: 'We provide optional router optimization recommendations, but most of our tweaks work at the system level without requiring router changes.'
      },
      {
        question: 'How much ping reduction can I expect?',
        answer: 'Most users see a 15-25% reduction in ping, though results vary depending on your current network configuration, location, and internet service provider.'
      },
      {
        question: 'Will this affect my internet speed for other applications?',
        answer: 'Our tweaks prioritize gaming traffic without significantly impacting other applications. In many cases, general browsing and streaming performance may also improve.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    category: 'tweak'
  }
];

export const serverBoosts = {
  oneMonth: [
    { id: 'boost-2-1m', name: '2 Boosts', price: 3, duration: '1 Month', stripeLink: 'https://buy.stripe.com/28o7vp8rI4F73xC3ck', category: 'boost' },
    { id: 'boost-6-1m', name: '6 Boosts', price: 7, duration: '1 Month', stripeLink: 'https://buy.stripe.com/cN202XeQ66Nf8RW9AJ', category: 'boost' },
    { id: 'boost-8-1m', name: '8 Boosts', price: 10, duration: '1 Month', stripeLink: 'https://buy.stripe.com/14k7vp8rIefH9W028i', category: 'boost' },
    { id: 'boost-14-1m', name: '14 Boosts', price: 15, duration: '1 Month', stripeLink: 'https://buy.stripe.com/aEU7vpgYe5Jbgko8wH', category: 'boost' },
    { id: 'boost-30-1m', name: '30 Boosts', price: 30, duration: '1 Month', stripeLink: 'https://buy.stripe.com/6oE8zt7nE7Rj7NS6oA', category: 'boost' }
  ],
  threeMonths: [
    { id: 'boost-2-3m', name: '2 Boosts', price: 5, duration: '3 Months', stripeLink: 'https://buy.stripe.com/28o9Dx23k6NfgkoaER', category: 'boost' },
    { id: 'boost-6-3m', name: '6 Boosts', price: 12, duration: '3 Months', stripeLink: 'https://buy.stripe.com/4gw8zt4bs7Rj6JOdR4', category: 'boost' },
    { id: 'boost-8-3m', name: '8 Boosts', price: 18, duration: '3 Months', stripeLink: 'https://buy.stripe.com/dR602X0Zgc7zd8c7sH', category: 'boost' },
    { id: 'boost-14-3m', name: '14 Boosts', price: 25, duration: '3 Months', stripeLink: 'https://buy.stripe.com/3cs4jd9vM6Nf4BGfZe', category: 'boost' },
    { id: 'boost-30-3m', name: '30 Boosts', price: 40, duration: '3 Months', stripeLink: 'https://buy.stripe.com/14kaHBazQ4F7d8c4gx', category: 'boost' }
  ],
  oneYear: [
    { id: 'boost-14-1y', name: '14 Boosts', price: 120, duration: '1 Year', stripeLink: 'https://buy.stripe.com/bIY4jdazQ7Rj5FK00i', category: 'boost' },
    { id: 'boost-30-1y', name: '30 Boosts', price: 175, duration: '1 Year', stripeLink: 'https://buy.stripe.com/dR6dTN37oc7z1pu3cv', category: 'boost' }
  ]
};

export const getAllProducts = (): Product[] => {
  const boosts = [
    ...serverBoosts.oneMonth,
    ...serverBoosts.threeMonths,
    ...serverBoosts.oneYear
  ];
  
  return [...premiumTweaks, ...boosts];
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};