import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Success from './pages/Success';
import ProductDetail from './pages/ProductDetail';
import PaymentPending from './pages/PaymentPending';
import ChatBot from './components/ChatBot';
import BackgroundPattern from './components/BackgroundPattern';
import FloatingObjects from './components/FloatingObjects';
import { CartProvider } from 'react-use-cart';

const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setShowAlert(true);
      } else if (currentScrollY > lastScrollY) {
        setShowAlert(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative bg-background">
          {/* Alert Banner */}
          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-primary/5 border-b border-primary/10 relative z-50 overflow-hidden"
              >
                <div className="w-full px-6 sm:px-10 lg:px-16 py-2 overflow-hidden">
                  <div className="flex items-center justify-center space-x-2 text-sm whitespace-nowrap">
                    <div className="animate-marquee inline-flex items-center">
                      <Zap className="w-4 h-4 text-primary animate-pulse" />
                      <span className="font-medium ml-2">All services are fully operational</span>
                      <span className="mx-4 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        Place your order today and enjoy our performance optimization tweaks!
                      </span>
                      <span className="mx-4 text-muted-foreground">•</span>
                      <Zap className="w-4 h-4 text-primary animate-pulse mx-2" />
                      <span className="font-medium">Instant delivery via Discord</span>
                      <span className="mx-4 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        24/7 customer support available
                      </span>
                      <span className="mx-4 text-muted-foreground">•</span>
                      <Zap className="w-4 h-4 text-primary animate-pulse mx-2" />
                      <span className="font-medium">All services are fully operational</span>
                      <span className="mx-4 text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        Place your order today and enjoy our performance optimization tweaks!
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="fixed inset-0 z-0">
            <BackgroundPattern />
            <FloatingObjects />
          </div>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/success" element={<Success />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/payment-pending" element={<PaymentPending />} />
              </Routes>
            </main>
            <Footer />
            <ChatBot />
            <Toaster position="bottom-right" />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;