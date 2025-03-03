import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Copy, MessageSquare } from 'lucide-react';
import { sendPurchaseConfirmation } from '@/lib/email';
import { toast } from 'react-hot-toast';
import { useCart } from 'react-use-cart';

const Success = () => {
  const navigate = useNavigate();
  const { emptyCart } = useCart();
  const [hasJoinedDiscord, setHasJoinedDiscord] = useState(false);
  const [orderId] = useState(() => Math.random().toString(36).substring(2, 15).toUpperCase());
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    // Clear the cart on success page load
    emptyCart();
    
    // Simulate loading order details
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [emptyCart]);

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    toast.success('Order ID copied to clipboard', {
      position: 'bottom-center'
    });
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await sendPurchaseConfirmation({
        orderId,
        productName: "Performance Optimization Package",
        customerEmail: email,
        totalAmount: "£30.00"
      });

      setIsEmailSent(true);
      toast.success('Purchase confirmation sent to your email!');
    } catch (error) {
      toast.error('Failed to send email. Please try again.');
    }
  };

  const handleDiscordClick = () => {
    setHasJoinedDiscord(true);
    // Open Discord in a new tab
    window.open('https://discord.gg/PCDJ2Sc98D', '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-4 bg-card p-8 rounded-lg shadow-lg text-center"
      >
        {isLoading ? (
          <div className="py-8 flex flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full mb-4"
            />
            <p className="text-lg font-medium">Loading order details...</p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
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

            {/* Email Confirmation Form */}
            {!isEmailSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-accent/30 rounded-lg border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Get Email Confirmation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enter your email to receive purchase confirmation and order details.
                </p>
                <form onSubmit={handleSendEmail} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Confirmation
                  </button>
                </form>
              </motion.div>
            )}

            {/* Discord Join Prompt - Persistent until clicked */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-4 ${hasJoinedDiscord ? 'bg-green-500/10' : 'bg-primary/10'} rounded-lg border-2 ${hasJoinedDiscord ? 'border-green-500/20' : 'border-primary/20'}`}
            >
              <MessageSquare className={`w-8 h-8 mx-auto mb-3 ${hasJoinedDiscord ? 'text-green-500' : 'text-primary'}`} />
              <h3 className="text-lg font-semibold mb-2">
                {hasJoinedDiscord ? 'Discord Server Joined!' : 'Important: Join Discord to Redeem'}
              </h3>
              <p className="text-muted-foreground mb-4">
                {hasJoinedDiscord 
                  ? 'Thank you for joining! Please create a support ticket to receive your purchase.'
                  : 'You must join our Discord server to receive your purchase. Click the button below to join.'}
              </p>
              <button
                onClick={handleDiscordClick}
                className={`w-full py-3 rounded-md transition-colors flex items-center justify-center space-x-2 ${
                  hasJoinedDiscord
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                <span>{hasJoinedDiscord ? 'Return to Discord' : 'Join Discord Server'}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            <button
              onClick={() => navigate('/')}
              className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground py-3 rounded-md transition-colors flex items-center justify-center space-x-2"
            >
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Success;