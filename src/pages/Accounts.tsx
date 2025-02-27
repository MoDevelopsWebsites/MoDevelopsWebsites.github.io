import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { toast } from 'react-hot-toast';
import { MessageSquare } from 'lucide-react';

const accounts = [
  {
    id: 'account-1',
    title: 'Premium Fortnite Account',
    description: 'Rare skins and exclusive items',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop'
  },
  {
    id: 'account-2',
    title: 'OG Fortnite Account',
    description: 'Season 1 items and rare emotes',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop'
  }
];

const Accounts = () => {
  const { addItem } = useCart();
  const [loading] = useState(false);

  const handleAddToCart = (account: any) => {
    addItem({
      ...account,
      price: account.price
    });
    toast.success(`Added ${account.title} to cart!`);
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
        <p className="text-xs text-gray-500">Create a support ticket to receive your account</p>
      </div>
    ), {
      duration: 10000,
      position: 'top-center',
    });
  };

  const handlePaypalCheckout = (account: any) => {
    showDiscordPrompt();
    window.open(`https://paypal.me/AshirHassan629/${account.price}`, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Fortnite Accounts</h1>
          <p className="text-muted-foreground">Browse our selection of premium Fortnite accounts</p>
        </motion.div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading accounts...</div>
        ) : accounts.length === 0 ? (
          <div className="text-center text-muted-foreground">No accounts available</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={account.image}
                  alt={account.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{account.title}</h3>
                  <p className="text-muted-foreground mb-4">{account.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">${account.price}</p>
                    <motion.button
                      onClick={() => handlePaypalCheckout(account)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy with PayPal
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accounts;