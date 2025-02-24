import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';

const premiumTweaks = [
  {
    id: 'premium-bundle',
    name: 'Premium Bundle',
    price: 30,
    stripeLink: 'https://buy.stripe.com/aEUaHBcHYdbD8RW5kk',
    description: 'Comprehensive optimization package',
    features: [
      'Advanced FPS Optimization',
      'Input Delay Reduction',
      'Network Latency Optimization',
      'System Performance Tweaks',
      'Custom Configuration Files',
      'Priority Support Access',
      'Regular Updates',
      'Performance Monitoring Tools'
    ]
  },
  {
    id: 'input-delay',
    name: 'Input Delay Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/7sI4jd7nEefH7NS5kn',
    description: 'Minimize input lag and enhance responsiveness',
    features: [
      'USB Port Optimization',
      'DirectInput Enhancement',
      'System Latency Reduction',
      'Custom Input Configuration'
    ]
  },
  {
    id: 'fps-tweaks',
    name: 'FPS Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/bIY9Dx4bs2wZ4BG5kl',
    description: 'Boost your frames per second',
    features: [
      'GPU Optimization',
      'CPU Priority Settings',
      'Memory Management',
      'Graphics Optimization'
    ]
  },
  {
    id: 'ping-tweaks',
    name: 'Ping Tweaks',
    price: 15,
    stripeLink: 'https://buy.stripe.com/fZebLF5fw4F70lq5ko',
    description: 'Reduce latency and improve connection',
    features: [
      'Network Protocol Optimization',
      'Router Configuration',
      'DNS Optimization',
      'Traffic Prioritization'
    ]
  }
];

const serverBoosts = {
  oneMonth: [
    { id: 'boost-2-1m', name: '2 Boosts', price: 3, duration: '1 Month', stripeLink: 'https://buy.stripe.com/28o7vp8rI4F73xC3ck' },
    { id: 'boost-6-1m', name: '6 Boosts', price: 7, duration: '1 Month', stripeLink: 'https://buy.stripe.com/cN202XeQ66Nf8RW9AJ' },
    { id: 'boost-8-1m', name: '8 Boosts', price: 10, duration: '1 Month', stripeLink: 'https://buy.stripe.com/14k7vp8rIefH9W028i' },
    { id: 'boost-14-1m', name: '14 Boosts', price: 15, duration: '1 Month', stripeLink: 'https://buy.stripe.com/aEU7vpgYe5Jbgko8wH' },
    { id: 'boost-30-1m', name: '30 Boosts', price: 30, duration: '1 Month', stripeLink: 'https://buy.stripe.com/6oE8zt7nE7Rj7NS6oA' }
  ],
  threeMonths: [
    { id: 'boost-2-3m', name: '2 Boosts', price: 5, duration: '3 Months', stripeLink: 'https://buy.stripe.com/28o9Dx23k6NfgkoaER' },
    { id: 'boost-6-3m', name: '6 Boosts', price: 12, duration: '3 Months', stripeLink: 'https://buy.stripe.com/4gw8zt4bs7Rj6JOdR4' },
    { id: 'boost-8-3m', name: '8 Boosts', price: 18, duration: '3 Months', stripeLink: 'https://buy.stripe.com/dR602X0Zgc7zd8c7sH' },
    { id: 'boost-14-3m', name: '14 Boosts', price: 25, duration: '3 Months', stripeLink: 'https://buy.stripe.com/3cs4jd9vM6Nf4BGfZe' },
    { id: 'boost-30-3m', name: '30 Boosts', price: 40, duration: '3 Months', stripeLink: 'https://buy.stripe.com/14kaHBazQ4F7d8c4gx' }
  ],
  oneYear: [
    { id: 'boost-14-1y', name: '14 Boosts', price: 120, duration: '1 Year', stripeLink: 'https://buy.stripe.com/bIY4jdazQ7Rj5FK00i' },
    { id: 'boost-30-1y', name: '30 Boosts', price: 175, duration: '1 Year', stripeLink: 'https://buy.stripe.com/dR6dTN37oc7z1pu3cv' }
  ]
};

const Shop = () => {
  const { addItem } = useCart();
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState('1 Month');

  const [tweaksRef, tweaksInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [boostsRef, boostsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success(`Added ${product.name} to cart`, {
      icon: '🛒',
      style: {
        background: '#10B981',
        color: '#fff',
      },
    });
  };

  const toggleProductDetails = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Premium Tweaks Section */}
        <motion.div
          ref={tweaksRef}
          initial="hidden"
          animate={tweaksInView ? "show" : "hidden"}
          variants={container}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tweaksInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Premium Tweaks</h1>
            <p className="text-muted-foreground">Optimize your gaming experience with our premium solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumTweaks.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleProductDetails(product.id)}
                      className="text-primary"
                    >
                      {expandedProduct === product.id ? <ChevronUp /> : <ChevronDown />}
                    </motion.button>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedProduct === product.id ? 'auto' : 0,
                      opacity: expandedProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Server Boosts Section */}
        <motion.div
          ref={boostsRef}
          initial="hidden"
          animate={boostsInView ? "show" : "hidden"}
          variants={container}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={boostsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Server Boosts</h2>
            <p className="text-muted-foreground">Enhance your server performance with our boost packages</p>
          </motion.div>

          <div className="flex justify-center mb-8 space-x-4">
            {['1 Month', '3 Months', '1 Year'].map((duration) => (
              <motion.button
                key={duration}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDuration(duration)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedDuration === duration
                    ? 'bg-primary text-white'
                    : 'bg-accent text-primary hover:bg-accent/80'
                }`}
              >
                {duration}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedDuration === '1 Month'
              ? serverBoosts.oneMonth
              : selectedDuration === '3 Months'
              ? serverBoosts.threeMonths
              : serverBoosts.oneYear
            ).map((boost) => (
              <motion.div
                key={boost.id}
                variants={item}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold">{boost.name}</h3>
                      <p className="text-sm text-muted-foreground">{boost.duration}</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      <span className="text-muted-foreground">Duration: {boost.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-primary mr-2" />
                      <span className="text-muted-foreground">Instant Activation</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">${boost.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(boost)}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;