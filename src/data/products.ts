import { Shield, Zap, Clock, Star, Cpu, Gauge, Headphones, Network, Layers, Workflow, Maximize, Minimize, Crosshair, Monitor, Wifi, Sparkles, BarChart, Gamepad, Keyboard, Mouse } from 'lucide-react';

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
    longDescription: 'Our Premium Bundle combines all of our optimization tweaks into one comprehensive package. Boost your FPS, reduce input delay, and optimize your network connection for the ultimate gaming experience. This bundle includes everything you need to gain a competitive edge, with advanced system-level optimizations that work together synergistically to maximize performance across all aspects of your gaming setup.',
    features: [
      'Advanced FPS Optimization',
      'Input Delay Reduction',
      'Network Latency Optimization',
      'System Performance Tweaks',
      'Custom Configuration Files',
      'Priority Support Access',
      'Regular Updates',
      'Performance Monitoring Tools',
      'Memory Management Optimization',
      'CPU Core Prioritization',
      'GPU Power Management Tweaks',
      'DirectX Optimization',
      'Windows Process Optimization',
      'Registry Performance Tweaks',
      'Shader Cache Optimization',
      'Game-Specific Configuration Profiles',
      'USB Polling Rate Optimization',
      'Sound Latency Reduction',
      'Power Plan Customization',
      'Interrupt Handling Optimization'
    ],
    benefits: [
      {
        icon: Cpu,
        title: 'Increased FPS',
        description: 'Experience up to 40% higher frame rates for smoother gameplay and better visual clarity during intense gaming moments. Our advanced kernel-level optimizations ensure maximum GPU throughput.'
      },
      {
        icon: Clock,
        title: 'Reduced Input Delay',
        description: 'Feel the difference with up to 30% lower input latency, giving you faster response times and better control. Our proprietary interrupt handling techniques minimize processing overhead.'
      },
      {
        icon: Gauge,
        title: 'Network Optimization',
        description: 'Enjoy more stable connections with reduced packet loss and up to 25% lower ping in competitive games. Our TCP/IP stack optimizations prioritize gaming traffic for minimal latency.'
      },
      {
        icon: Headphones,
        title: 'Priority Support',
        description: 'Get access to our dedicated support team for personalized assistance and optimization advice. Our experts can help fine-tune settings for your specific hardware configuration.'
      },
      {
        icon: Layers,
        title: 'System-Wide Performance',
        description: 'Our comprehensive tweaks optimize every layer of your system, from hardware interfaces to application rendering, ensuring all components work together efficiently.'
      },
      {
        icon: Workflow,
        title: 'Adaptive Optimization',
        description: 'Our tweaks intelligently adapt to your usage patterns, dynamically allocating system resources where they are needed most during gameplay.'
      }
    ],
    faqs: [
      {
        question: 'What games does this work with?',
        answer: 'Our Premium Bundle works with all major competitive games including Fortnite, Valorant, Apex Legends, Call of Duty, and more. The tweaks are designed to optimize your entire system for gaming performance, with specific configurations for over 40 popular titles.'
      },
      {
        question: 'Will this affect my warranty or damage my PC?',
        answer: 'No, our tweaks only modify approved system settings and game configurations. They don\'t make any permanent changes to your hardware and can be easily reverted if needed. We use industry-standard optimization techniques that are safe for long-term use.'
      },
      {
        question: 'How do I receive the tweaks after purchase?',
        answer: 'After purchase, you\'ll need to join our Discord server and create a support ticket. Our team will then provide you with the tweaks and guide you through the installation process. We offer screen-sharing support to ensure everything is set up correctly.'
      },
      {
        question: 'Do I need technical knowledge to apply these tweaks?',
        answer: 'No technical knowledge is required. We provide step-by-step instructions and our support team is available to help you through the entire process. Our installation wizard automates most of the complex configuration steps.'
      },
      {
        question: 'How often are the tweaks updated?',
        answer: 'We regularly update our tweaks to accommodate new game releases, driver updates, and Windows changes. Premium Bundle customers receive priority access to all updates and new optimization techniques as they become available.'
      },
      {
        question: 'Can I use these tweaks with anti-cheat software?',
        answer: 'Yes, all our tweaks are fully compatible with major anti-cheat systems including BattlEye, EAC, Vanguard, and VAC. We never modify game files or use techniques that could trigger anti-cheat detection.'
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
    longDescription: 'Our Input Delay Tweaks are specifically designed to reduce the time between your physical inputs and the corresponding actions in-game. By optimizing your system\'s input processing pipeline, you\'ll experience more responsive controls and gain a competitive advantage in fast-paced games. Our proprietary techniques target every stage of the input chain, from USB controller processing to final render output.',
    features: [
      'USB Port Optimization',
      'DirectInput Enhancement',
      'System Latency Reduction',
      'Custom Input Configuration',
      'Interrupt Priority Adjustment',
      'USB Polling Rate Optimization',
      'Device Buffer Reduction',
      'Input Thread Prioritization',
      'DPC Latency Minimization',
      'Raw Input Processing',
      'Mouse Acceleration Removal',
      'Keyboard Response Optimization',
      'Controller Deadzone Adjustment',
      'Input Prediction Removal',
      'Game-Specific Input Profiles',
      'Display Pipeline Optimization',
      'Render Queue Management',
      'Pre-rendered Frames Reduction',
      'Exclusive Fullscreen Enforcement',
      'Windows Timer Resolution Tweaks'
    ],
    benefits: [
      {
        icon: Clock,
        title: 'Faster Response Time',
        description: 'Experience up to 30% reduction in input delay for more responsive controls and better precision. Our advanced interrupt handling techniques minimize processing overhead between your inputs and game actions.'
      },
      {
        icon: Gauge,
        title: 'Improved Accuracy',
        description: 'Enhanced input precision helps you land more shots and execute complex movements with greater accuracy. By eliminating system-level input processing inefficiencies, your actions translate more directly to in-game results.'
      },
      {
        icon: Shield,
        title: 'Competitive Edge',
        description: 'Gain a significant advantage in fast-paced competitive games where milliseconds matter. Professional players rely on minimal input delay to perform at their peak - now you can have the same advantage.'
      },
      {
        icon: Zap,
        title: 'Instant Results',
        description: 'Feel the difference immediately after applying our carefully crafted input delay optimizations. The improvement is particularly noticeable in high-intensity situations where quick reactions are essential.'
      },
      {
        icon: Keyboard,
        title: 'Universal Device Support',
        description: 'Our tweaks optimize input processing for all peripherals including gaming keyboards, mice, and controllers. Each device type receives specialized optimizations for its unique input characteristics.'
      },
      {
        icon: Crosshair,
        title: 'Aim Enhancement',
        description: 'Experience more consistent aim with our mouse input optimizations that eliminate micro-stutters and ensure pixel-perfect cursor movement translation to in-game actions.'
      }
    ],
    faqs: [
      {
        question: 'How much input delay reduction can I expect?',
        answer: 'Most users experience a 20-30% reduction in input delay, though results may vary depending on your hardware and current configuration. High-refresh-rate monitors paired with our tweaks can see even more significant improvements, sometimes exceeding 40% reduction in total system latency.'
      },
      {
        question: 'Will this work with all input devices?',
        answer: 'Yes, our tweaks optimize the system-level input processing, benefiting all USB and PS/2 input devices including keyboards, mice, and controllers. We provide specific optimizations for popular gaming peripherals from major manufacturers like Logitech, Razer, and SteelSeries.'
      },
      {
        question: 'Do I need to reinstall these tweaks after a Windows update?',
        answer: 'Major Windows updates may reset some settings. We provide a guide on how to check and reapply tweaks after updates, and our support team is always available to help. We also offer a lightweight monitoring tool that can alert you when critical settings have been changed.'
      },
      {
        question: 'Can I revert these changes if needed?',
        answer: 'Absolutely. We provide instructions on how to revert all changes, and none of the tweaks make permanent modifications to your system. Our installation process creates automatic restore points for added safety.'
      },
      {
        question: 'Will these tweaks affect my everyday computer use?',
        answer: 'Our input delay tweaks are designed to improve responsiveness across all applications, not just games. You may notice improved desktop navigation and more responsive behavior in creative applications like video editing or digital art software.'
      },
      {
        question: 'Do these tweaks work with wireless peripherals?',
        answer: 'Yes, our tweaks optimize the input processing pipeline regardless of connection type. For wireless devices, we include additional optimizations to minimize wireless protocol overhead and reduce battery impact while maintaining responsiveness.'
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
    longDescription: 'Our FPS Tweaks package is designed to maximize your system\'s performance and deliver higher, more stable frame rates in all your favorite games. By optimizing your GPU and CPU settings, along with game-specific configurations, you\'ll experience smoother gameplay with reduced stuttering and frame drops. Our advanced techniques target rendering pipelines, memory management, and system resource allocation to ensure every component of your PC is working efficiently for gaming.',
    features: [
      'GPU Optimization',
      'CPU Priority Settings',
      'Memory Management',
      'Graphics Optimization',
      'Shader Cache Configuration',
      'Texture Streaming Optimization',
      'Process Lasso Integration',
      'Thread Optimization',
      'Power Plan Customization',
      'NVIDIA/AMD Driver Optimization',
      'DirectX/Vulkan Rendering Tweaks',
      'Game Engine-Specific Optimizations',
      'Windows Game Mode Enhancement',
      'Background Process Management',
      'Disk I/O Prioritization',
      'Pagefile Optimization',
      'Game Config File Tuning',
      'Resolution Scaling Techniques',
      'Render Distance Optimization',
      'Dynamic Resolution Implementation'
    ],
    benefits: [
      {
        icon: Cpu,
        title: 'Higher Frame Rates',
        description: 'Experience up to 40% increase in FPS for smoother gameplay and better visual clarity. Our kernel-level optimizations ensure your CPU and GPU work together efficiently with minimal overhead.'
      },
      {
        icon: Gauge,
        title: 'Reduced Stuttering',
        description: 'Enjoy more consistent frame times with significantly reduced stuttering and micro-freezes. Our frame pacing optimizations ensure smooth delivery of frames even during intense gaming moments.'
      },
      {
        icon: Zap,
        title: 'Optimized Resource Usage',
        description: 'Better CPU and GPU resource allocation ensures your hardware performs at its maximum potential. Our intelligent process management prevents background tasks from interfering with your games.'
      },
      {
        icon: Shield,
        title: 'Game-Specific Tweaks',
        description: 'Receive optimized settings for your specific games to maximize performance without sacrificing visual quality. We analyze rendering pipelines for each supported game to find the optimal balance.'
      },
      {
        icon: Monitor,
        title: 'Enhanced Visual Stability',
        description: 'Our frame pacing optimizations reduce screen tearing and visual artifacts without the performance cost of traditional V-Sync, giving you a competitive edge without visual distractions.'
      },
      {
        icon: Maximize,
        title: 'Thermal Efficiency',
        description: 'Intelligent power management reduces system heat while maintaining peak performance, allowing for sustained high frame rates even during extended gaming sessions.'
      }
    ],
    faqs: [
      {
        question: 'Will these tweaks work on lower-end systems?',
        answer: 'Yes, our FPS tweaks are especially beneficial for lower-end systems, often providing even more noticeable improvements than on high-end hardware. We include specific optimizations for integrated graphics and budget CPUs that can dramatically improve playability on entry-level systems.'
      },
      {
        question: 'Do I need to modify my hardware in any way?',
        answer: 'No hardware modifications are required. Our tweaks focus on software optimizations that maximize the performance of your existing hardware. That said, we do provide optional guidance on safe memory XMP profiles and GPU power limit adjustments for users who want to explore those options.'
      },
      {
        question: 'Will these tweaks affect system stability?',
        answer: 'Our tweaks are thoroughly tested to ensure system stability. We focus on safe optimizations that improve performance without risking system crashes or instability. Each configuration is validated across multiple hardware configurations before being included in our packages.'
      },
      {
        question: 'How often are the FPS tweaks updated?',
        answer: 'We regularly update our tweaks to accommodate new game releases, driver updates, and Windows changes. Customers receive these updates for free. Major game releases and GPU driver updates typically trigger new optimization passes within 48-72 hours.'
      },
      {
        question: 'Do these tweaks work with all games?',
        answer: 'Our core system optimizations benefit all games, and we provide specific configuration files for over 50 popular titles. For unsupported games, we offer general optimization guidelines and our support team can help with custom configurations for your favorite games.'
      },
      {
        question: 'Will these tweaks affect my graphics quality?',
        answer: 'Our default configurations maintain visual quality while improving performance. However, we also provide optional "competitive" profiles that can further boost FPS by intelligently reducing less noticeable visual effects. You can easily switch between quality and performance-focused configurations.'
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
    longDescription: 'Our Ping Tweaks package is designed to optimize your network connection for gaming, reducing latency and packet loss for a more stable online experience. By fine-tuning your network settings and optimizing routing, you\'ll experience lower ping, fewer disconnects, and more consistent performance in online games. Our advanced techniques target every aspect of your network stack, from TCP/IP configuration to QoS implementation, ensuring your gaming traffic takes priority.',
    features: [
      'Network Protocol Optimization',
      'Router Configuration',
      'DNS Optimization',
      'Traffic Prioritization',
      'TCP/IP Stack Optimization',
      'Nagle\'s Algorithm Disabling',
      'Quality of Service (QoS) Setup',
      'Network Adapter Configuration',
      'MTU Size Optimization',
      'Receive Window Auto-Tuning',
      'Congestion Provider Selection',
      'Network Throttling Index',
      'Game Server Region Selection',
      'Packet Prioritization',
      'Buffer Bloat Mitigation',
      'DNS Prefetching',
      'IPv4/IPv6 Optimization',
      'Winsock Reset & Optimization',
      'Network Interface Card Tuning',
      'Routing Table Optimization'
    ],
    benefits: [
      {
        icon: Gauge,
        title: 'Lower Ping',
        description: 'Experience up to 25% reduction in ping for faster response times in online games. Our TCP/IP stack optimizations minimize protocol overhead and reduce round-trip times to game servers.'
      },
      {
        icon: Shield,
        title: 'Reduced Packet Loss',
        description: 'Enjoy more stable connections with significantly less packet loss and fewer disconnects. Our advanced QoS implementations ensure critical game data packets receive priority handling.'
      },
      {
        icon: Zap,
        title: 'Optimized Routing',
        description: 'Our tweaks ensure your gaming traffic takes the most efficient route to game servers, bypassing congested network paths and reducing unnecessary hops.'
      },
      {
        icon: Headphones,
        title: 'Better Voice Chat',
        description: 'Experience clearer voice communications with less lag and fewer dropouts. Our network prioritization ensures voice packets are delivered consistently even during intense gameplay.'
      },
      {
        icon: Wifi,
        title: 'Wireless Connection Improvement',
        description: 'Special optimizations for Wi-Fi users reduce wireless interference and prioritize gaming traffic, bringing wired-like stability to wireless connections.'
      },
      {
        icon: Network,
        title: 'Congestion Management',
        description: 'Intelligent bandwidth allocation prevents other devices on your network from impacting your gaming experience, even on shared internet connections.'
      }
    ],
    faqs: [
      {
        question: 'Will these tweaks work with my internet provider?',
        answer: 'Yes, our ping tweaks work with all internet service providers and connection types, including fiber, cable, DSL, and even mobile hotspots. We provide specific optimizations for different connection technologies to maximize performance regardless of your ISP.'
      },
      {
        question: 'Do I need to change my router settings?',
        answer: 'We provide optional router optimization recommendations, but most of our tweaks work at the system level without requiring router changes. For users comfortable with router configuration, we offer additional advanced optimizations for popular router models and firmware.'
      },
      {
        question: 'How much ping reduction can I expect?',
        answer: 'Most users see a 15-25% reduction in ping, though results vary depending on your current network configuration, location, and internet service provider. Users with initially poor connections often see the most dramatic improvements, sometimes exceeding 40% reduction.'
      },
      {
        question: 'Will this affect my internet speed for other applications?',
        answer: 'Our tweaks prioritize gaming traffic without significantly impacting other applications. In many cases, general browsing and streaming performance may also improve due to our network stack optimizations and reduced buffer bloat.'
      },
      {
        question: 'Do these tweaks work for all online games?',
        answer: 'Yes, our network optimizations benefit all online games and applications. We provide additional game-specific configurations for popular titles like Fortnite, Valorant, and Call of Duty that target their unique network requirements.'
      },
      {
        question: 'Can these tweaks help with server-side lag?',
        answer: 'While we can\'t directly improve server performance, our optimizations ensure your connection to the server is as efficient as possible, minimizing the impact of server-side issues. Our routing optimizations can also help you connect to less congested server nodes in some games.'
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