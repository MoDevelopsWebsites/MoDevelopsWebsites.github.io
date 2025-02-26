import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import { Trash2, MessageSquare } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    removeItem,
    emptyCart
  } = useCart();

  const handlePaypalCheckout = () => {
    showDiscordPrompt();
    window.open(`https://paypal.me/AshirHassan629/${cartTotal}`, '_blank');
    window.location.href = '/success';
  };

  const handleStripeCheckout = (item: any) => {
    showDiscordPrompt();
    window.open(item.stripeLink, '_blank');
    window.location.href = '/success';
  };

  const showDiscordPrompt = () => {
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
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Your Cart
        </motion.h1>

        {isEmpty ? (
          <div className="text-center text-muted-foreground">
            Your cart is empty
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-4 rounded-lg shadow flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg shadow h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-semibold">{formatPrice(cartTotal)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <motion.button
                  onClick={handlePaypalCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Pay with PayPal
                </motion.button>
                {items.map((item) => (
                  item.stripeLink && (
                    <motion.button
                      key={`stripe-${item.id}`}
                      onClick={() => handleStripeCheckout(item)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Pay with Card ({formatPrice(item.price)})
                    </motion.button>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;