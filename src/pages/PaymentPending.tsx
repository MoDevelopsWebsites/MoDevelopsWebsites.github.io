import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { useCart } from 'react-use-cart';

const PaymentPending = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing payment verification...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate payment verification process
    const simulateVerification = () => {
      const stages = [
        { progress: 10, message: 'Connecting to payment provider...' },
        { progress: 30, message: 'Verifying transaction details...' },
        { progress: 50, message: 'Processing payment...' },
        { progress: 70, message: 'Confirming payment status...' },
        { progress: 90, message: 'Finalizing transaction...' },
        { progress: 100, message: 'Payment verified successfully!' }
      ];

      let currentStage = 0;

      const interval = setInterval(() => {
        if (currentStage < stages.length) {
          setProgress(stages[currentStage].progress);
          setStatus(stages[currentStage].message);
          currentStage++;
        } else {
          clearInterval(interval);
          
          // Randomly decide if payment was successful (90% chance of success for demo)
          const isSuccessful = Math.random() < 0.9;
          
          if (isSuccessful) {
            // Redirect to success page after a short delay
            setTimeout(() => {
              navigate('/success');
            }, 1000);
          } else {
            // Show error message
            setError('Payment verification failed. Please try again or contact support.');
          }
        }
      }, 1500);

      return () => clearInterval(interval);
    };

    simulateVerification();
  }, [navigate]);

  const handleRetry = () => {
    // Reset state and restart verification
    setProgress(0);
    setStatus('Initializing payment verification...');
    setError(null);
    
    // Simulate verification again
    setTimeout(() => {
      navigate('/success');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/cart');
  };

  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-4 bg-card p-8 rounded-lg shadow-lg"
      >
        <div className="text-center mb-8">
          {error ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4 text-destructive"
            >
              <AlertCircle className="w-16 h-16 mx-auto mb-2" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4"
            >
              <Clock className="w-16 h-16 mx-auto text-primary" />
            </motion.div>
          )}
          
          <h1 className="text-2xl font-bold mb-2">
            {error ? 'Payment Verification Failed' : 'Payment Verification'}
          </h1>
          
          <p className="text-muted-foreground">
            {error || status}
          </p>
        </div>

        {!error && (
          <div className="mb-8">
            <div className="h-2 bg-accent rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-primary"
              />
            </div>
            <div className="mt-2 text-right text-sm text-muted-foreground">
              {progress}% Complete
            </div>
          </div>
        )}

        {error ? (
          <div className="flex flex-col space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRetry}
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <span>Try Again</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCancel}
              className="w-full border border-input bg-background hover:bg-accent py-3 rounded-md transition-colors"
            >
              Return to Cart
            </motion.button>
          </div>
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            <p>Please do not close this window while we verify your payment.</p>
            <p className="mt-2">This may take a few moments.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PaymentPending;