import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useCart } from 'react-use-cart';

const Success = () => {
  const navigate = useNavigate();
  const { emptyCart } = useCart();
  const orderId = Math.random().toString(36).substring(2, 15).toUpperCase();

  useEffect(() => {
    // Clear the cart on success page load
    emptyCart();

    // Show Discord prompt
    toast((t) => (
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm font-medium">Please join our Discord server to redeem your purchase:</p>
        <a
          href="https://discord.gg/PCDJ2Sc98D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Join Discord Server
        </a>
      </div>
    ), {
      duration: 10000,
      position: 'top-center',
    });
  }, [emptyCart]);

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    toast.success('Order ID copied to clipboard');
  };

  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-4 bg-card p-8 rounded-lg shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <div className="mb-6">
          <p className="text-muted-foreground mb-2">Your Order ID:</p>
          <div className="flex items-center justify-center space-x-2 bg-accent p-3 rounded-md">
            <code className="font-mono text-lg">{orderId}</code>
            <button
              onClick={copyOrderId}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-muted-foreground mb-8">
          Please save your Order ID and join our Discord server to redeem your purchase.
        </p>
        <div className="space-y-4">
          <a
            href="https://discord.gg/PCDJ2Sc98D"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Join Discord
          </a>
          <button
            onClick={() => navigate('/')}
            className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground py-3 rounded-md transition-colors flex items-center justify-center space-x-2"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;