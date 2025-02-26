import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Shield, Zap, Clock, Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { premiumTweaks, serverBoosts } from '@/data/products';

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
                className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                {product.image && (
                  <Link to={`/product/${product.id}`} className="block h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </Link>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                    </Link>
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
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="mt-3 inline-flex items-center text-primary hover:underline text-sm"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                  
                  {/* Price displayed separately */}
                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-primary mb-4">{formatPrice(product.price)}</p>
                    
                    {/* Buttons in a vertical stack with equal spacing */}
                    <div className="grid grid-cols-2 gap-3">
                      <Link to={`/product/${product.id}`} className="col-span-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-accent text-foreground py-2 rounded-md hover:bg-accent/80 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Add to Cart
                      </motion.button>
                      <Link to={`/product/${product.id}`} className="w-full">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-primary/80 text-white py-2 rounded-md hover:bg-primary/70 transition-colors"
                        >
                          Buy Now
                        </motion.button>
                      </Link>
                    </div>
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
                className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
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
                  
                  {/* Price displayed separately */}
                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-primary mb-4">{formatPrice(boost.price)}</p>
                    
                    {/* Buttons in a vertical stack with equal spacing */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddToCart(boost)}
                        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors col-span-2"
                      >
                        Add to Cart
                      </motion.button>
                      <Link to={`/product/${boost.id}`} className="col-span-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-primary/80 text-white py-2 rounded-md hover:bg-primary/70 transition-colors"
                        >
                          Buy Now
                        </motion.button>
                      </Link>
                    </div>
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