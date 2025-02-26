import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import { ChevronLeft, ShoppingCart, Check, Plus, Minus, MessageSquare, ExternalLink, CreditCard } from 'lucide-react';
import { getProductById } from '@/data/products';
import { formatPrice } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'faq'>('description');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  
  const product = getProductById(id || '');
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product && !isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop" className="inline-flex items-center text-primary hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      toast.success(`Added ${product.name} to cart`, {
        icon: '🛒',
        style: {
          background: '#10B981',
          color: '#fff',
        },
      });
    }
  };
  
  const handleBuyNow = () => {
    setShowPaymentOptions(true);
  };
  
  const handlePaypalCheckout = () => {
    if (product) {
      // Show Discord prompt
      toast((t) => (
        <div className="flex flex-col items-center space-y-2">
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <p className="text-sm font-medium">After payment, please join our Discord server:</p>
          <a
            href="https://discord.gg/PCDJ2Sc98D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Join Discord Server
          </a>
          <p className="text-xs text-gray-500">Create a support ticket to redeem your purchase</p>
        </div>
      ), {
        duration: 10000,
        position: 'bottom-center',
      });
      
      // Open PayPal in a new tab
      window.open(`https://paypal.me/AshirHassan629/${product.price}`, '_blank');
      
      // Navigate to payment pending page
      navigate('/payment-pending');
    }
  };
  
  const handleCardCheckout = () => {
    if (product && product.stripeLink) {
      // Show Discord prompt
      toast((t) => (
        <div className="flex flex-col items-center space-y-2">
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <p className="text-sm font-medium">After payment, please join our Discord server:</p>
          <a
            href="https://discord.gg/PCDJ2Sc98D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Join Discord Server
          </a>
          <p className="text-xs text-gray-500">Create a support ticket to redeem your purchase</p>
        </div>
      ), {
        duration: 10000,
        position: 'bottom-center',
      });
      
      // Open Stripe checkout in new tab
      window.open(product.stripeLink, '_blank');
      
      // Navigate to payment pending page
      navigate('/payment-pending');
    }
  };
  
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
        />
      </div>
    );
  }

  // Check if the product is a server boost
  const isServerBoost = product?.category === 'boost';
  
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-primary hover:underline">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>
        </div>
        
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={product?.image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop'} 
              alt={product?.name} 
              className="w-full h-full object-cover aspect-video"
            />
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold">{product?.name}</h1>
            <p className="text-xl font-bold text-primary">{formatPrice(product?.price || 0)}</p>
            
            {product?.duration && (
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Duration: {product.duration}
              </div>
            )}
            
            <p className="text-muted-foreground">{product?.description}</p>
            
            {!showPaymentOptions ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-foreground py-3 rounded-md hover:bg-accent/80 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Buy Now
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="font-semibold">Select Payment Method:</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCardCheckout}
                    className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Pay with Card
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePaypalCheckout}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                  >
                    <span className="font-bold mr-1">Pay</span>
                    <span className="font-bold text-blue-200">Pal</span>
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentOptions(false)}
                  className="w-full border border-input bg-background hover:bg-accent py-2 rounded-md transition-colors text-sm"
                >
                  Cancel
                </motion.button>
              </motion.div>
            )}
            
            {/* Only show features for non-boost products */}
            {!isServerBoost && product?.features && (
              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* For server boosts, show duration info */}
            {isServerBoost && (
              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-2">Boost Information:</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{product.name} for {product.duration}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Instant Activation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Discord Support Included</span>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Only show tabs for non-boost products */}
        {!isServerBoost && (
          <>
            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'description'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'features'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Features & Benefits
                </button>
                {product?.faqs && product.faqs.length > 0 && (
                  <button
                    onClick={() => setActiveTab('faq')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'faq'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    FAQ
                  </button>
                )}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-12">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose max-w-none"
                >
                  <p className="text-lg leading-relaxed">{product?.longDescription}</p>
                  
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                    <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                    <ol className="space-y-4 list-decimal list-inside">
                      <li className="pl-2">
                        <span className="font-medium">Purchase the product</span> - Select your preferred payment method and complete the checkout process.
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Join our Discord server</span> - After purchase, you'll need to join our Discord community for delivery.
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Create a support ticket</span> - Open a ticket in our Discord server and provide your order details.
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Receive your tweaks</span> - Our team will provide you with the tweaks and guide you through the installation process.
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Enjoy improved performance</span> - Experience the benefits of optimized gaming performance!
                      </li>
                    </ol>
                    
                    <div className="mt-6 flex justify-center">
                      <a
                        href="https://discord.gg/PCDJ2Sc98D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Join Our Discord
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Features Tab */}
              {activeTab === 'features' && product?.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {product?.benefits?.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                          <div className="flex items-center mb-4">
                            <div className="p-3 rounded-full bg-primary/10 mr-4">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold">{benefit.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">All Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* FAQ Tab */}
              {activeTab === 'faq' && product?.faqs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-accent/50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {expandedFaqs.includes(index) ? (
                          <Minus className="w-5 h-5 text-primary" />
                        ) : (
                          <Plus className="w-5 h-5 text-primary" />
                        )}
                      </button>
                      
                      {expandedFaqs.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="p-4 pt-0 border-t border-border bg-accent/10"
                        >
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </>
        )}

        {/* For server boosts, show simplified content */}
        {isServerBoost && (
          <div className="mb-12">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4">About Server Boosts</h3>
              <p className="text-muted-foreground mb-6">
                Server boosts enhance your Discord server with additional perks and features. 
                When you purchase this boost package, you'll receive {product?.name} for {product?.duration}.
              </p>
              
              <h4 className="font-medium mb-2">Benefits include:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Improved server performance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Enhanced audio quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Additional emoji slots</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Higher upload limits</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom server banner</span>
                </li>
              </ul>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-2">How to Redeem:</h4>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Purchase the boost package</li>
                  <li>Join our Discord server</li>
                  <li>Create a support ticket with your order details</li>
                  <li>Our team will apply the boosts to your server</li>
                </ol>
                
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://discord.gg/PCDJ2Sc98D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Join Our Discord
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Ready to Enhance Your Gaming Experience?</h2>
            <p className="text-muted-foreground">Get started with {product?.name} today and feel the difference!</p>
          </div>
          
          {!showPaymentOptions ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="bg-accent text-foreground py-3 px-6 rounded-md hover:bg-accent/80 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyNow}
                className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <Check className="w-5 h-5 mr-2" />
                Buy Now
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <h3 className="font-semibold text-center mb-4">Select Payment Method:</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCardCheckout}
                  className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay with Card
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePaypalCheckout}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <span className="font-bold mr-1">Pay</span>
                  <span className="font-bold text-blue-200">Pal</span>
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPaymentOptions(false)}
                className="w-full border border-input bg-background hover:bg-accent py-2 rounded-md transition-colors text-sm"
              >
                Cancel
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;