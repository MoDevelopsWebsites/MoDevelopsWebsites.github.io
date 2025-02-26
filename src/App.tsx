import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Success from './pages/Success';
import ChatBot from './components/ChatBot';
import BackgroundPattern from './components/BackgroundPattern';
import FloatingObjects from './components/FloatingObjects';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative bg-background">
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
              </Routes>
            </main>
            <Footer />
          </div>
          <ChatBot />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;