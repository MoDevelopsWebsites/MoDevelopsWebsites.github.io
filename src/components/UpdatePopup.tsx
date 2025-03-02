import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Zap, Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface UpdatePopupProps {
  onClose: () => void;
}

const UpdatePopup: React.FC<UpdatePopupProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'updates' | 'newsletter'>('updates');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, you would send this to your API
      console.log('Submitted email:', email);
      
      // Reset form after 3 seconds and show success message
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
        setActiveTab('updates');
      }, 3000);
    }
  };

  // Current date formatted nicely
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-card w-full max-w-md rounded-xl shadow-2xl overflow-hidden border border-border my-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 p-6 pb-4">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Stunnas Tweaks</h2>
            </div>
            
            <div className="flex border-b border-border">
              <button
                onClick={() => setActiveTab('updates')}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === 'updates'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Latest Updates
              </button>
              <button
                onClick={() => setActiveTab('newsletter')}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === 'newsletter'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Newsletter
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {activeTab === 'updates' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">What's New</h3>
                    <span className="text-xs text-muted-foreground">{currentDate}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Enhanced FPS Tweaks</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our FPS optimization package now includes advanced shader cache management and DirectX optimizations for even better performance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">New Input Delay Reduction Techniques</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          We've added cutting-edge input processing optimizations that can reduce latency by up to an additional 15% in supported games.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">24/7 Discord Support</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our support team is now available 24/7 to assist with any questions or issues you might have with our performance tweaks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-3">Coming Soon</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom optimization profiles for the latest game releases</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Advanced network optimization package with region-specific routing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Performance monitoring dashboard for real-time stats</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={() => setActiveTab('newsletter')}
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Subscribe for updates
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'newsletter' && (
              <div>
                {!isSubmitted ? (
                  <>
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter to receive the latest updates, exclusive offers, and optimization tips directly to your inbox.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1 mr-2"
                          required
                        />
                        <label htmlFor="consent" className="text-xs text-muted-foreground">
                          I agree to receive marketing emails and can unsubscribe at any time. View our{' '}
                          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      You've been successfully subscribed to our newsletter.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-accent/30 p-4 text-center text-xs text-muted-foreground">
            <p>© 2025 Stunnas Tweaks. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UpdatePopup;