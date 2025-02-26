import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Admin = () => {
  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Lock className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Admin Access Disabled</h2>
        <p className="text-center text-muted-foreground">
          The admin panel is currently disabled. Please contact the system administrator for access.
        </p>
      </motion.div>
    </div>
  );
};

export default Admin;