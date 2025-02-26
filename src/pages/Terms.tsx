import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, Shield, FileText, CreditCard, HelpCircle, Zap } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Please read these terms carefully before using our services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <AlertTriangle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">BEFORE PURCHASING</h2>
          </div>
          <p className="mb-4">
            This website is in NO way affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.
          </p>
          <p className="mb-4">
            By using our services, you agree to the terms below. If you have any questions or concerns, feel free to open a ticket on our Discord{' '}
            <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://discord.gg/PCDJ2Sc98D
            </a>.
          </p>
          <p className="font-semibold">
            If you do not accept all of the terms and conditions of our service, please DO NOT use our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">SUPPORT POLICY</h2>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              We'll respond to support & delivery tickets on our Discord ONLY{' '}
              <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                (https://discord.gg/PCDJ2Sc98D)
              </a>{' '}
              within 15 minutes to 24 hours (sometimes up to 48 hours).
            </li>
            <li>We'll NOT be supporting via Calls or DMs.</li>
            <li>We'll ensure your products arrive on time, except in cases of technical issues.</li>
            <li>Our support team is available 24/7 to assist with any questions or concerns about our performance optimization services.</li>
            <li>For technical support with our tweaks, please provide detailed information about your system and the issues you're experiencing.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Shield className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">RETURN & REFUND POLICY</h2>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>If there's a problem with our products or if you DON'T get them in a specified duration, we'll give you a refund.</li>
            <li>
              If the performance tweaks aren't functioning the way they're supposed to, you may be ELIGIBLE for a refund. Contact us on our Discord{' '}
              <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://discord.gg/PCDJ2Sc98D
              </a>{' '}
              for more info.
            </li>
            <li>We offer a 24-hour satisfaction guarantee on all our performance optimization services.</li>
            <li>Refunds WON'T apply if a feature is unavailable because of your location/billing country.</li>
            <li>Refunds WON'T apply if you DO NOT follow the installation guidelines provided by our team.</li>
            <li>Refunds WON'T apply if you DO NOT use the product the way it should be used or modify the tweaks without our guidance.</li>
            <li>We DON'T accept any returns or exchanges after the product is delivered and confirmed working.</li>
            <li>Depending on the case, sometimes the payment processing fee is NOT returned.</li>
            <li>We CAN'T control Discord Server boost revocations, and we CAN'T guarantee replacements.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <CreditCard className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">PAYMENT, VERIFICATION & PRIVACY POLICY</h2>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>We only collect the information we need to process your order, comply with law and provide customer support.</li>
            <li>We collect Billing Information (your full name & address), your Discord username, Email address & IP address.</li>
            <li>We keep your data safe and sound through reputable processors like PayPal and Stripe.</li>
            <li>We might use third-party services, and each of them has its privacy policy.</li>
            <li>If you try to reverse a payment without asking for help, we'll blacklist you from the shop.</li>
            <li>We might hold payments for a short while (up to 21 days) to make sure they're legitimate.</li>
            <li>
              We reserve the right to refuse payments if we can't verify their authenticity. This decision is irreversible & may be done EVEN if you've made smaller purchases before.
            </li>
            <li>
              We will NEVER ASK for your credit card statement, government ID or any other sensitive information to verify the authenticity of your payment. Report scams immediately on our Discord{' '}
              <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://discord.gg/PCDJ2Sc98D
              </a>.
            </li>
            <li>If you pay using Credit or Debit Card or PayPal, you'll be limited to 2 purchases/month for the first 21 days - 3 months.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Zap className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">PRODUCT & SERVICES</h2>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>The price of any product is subject to change at any time without notice. We reserve the right to discontinue any product at any time.</li>
            <li>Any offer for any product can change or be removed at any time without giving any notice. If an ongoing order is in place, the buyer will be warned and given notice.</li>
            <li>
              If the description of the product is updated, we'll be doing an announcement on our Discord{' '}
              <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://discord.gg/PCDJ2Sc98D
              </a>.
            </li>
            <li>Our performance optimization tweaks are designed for personal use only and should not be redistributed or resold.</li>
            <li>We do not guarantee specific performance improvements as results may vary based on your hardware configuration and other factors.</li>
            <li>Our tweaks do not include any third-party software or cheats that could violate game terms of service or result in account bans.</li>
            <li>We are not responsible for any issues that may arise from improper installation or modification of our tweaks.</li>
            <li>All our services are delivered digitally through our Discord server after purchase confirmation.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <FileText className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">ADDITIONAL TERMS</h2>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>We reserve the right to modify these terms at any time without prior notice. Continued use of our services constitutes acceptance of any changes.</li>
            <li>Our performance tweaks are provided "as is" without warranties of any kind, either express or implied.</li>
            <li>We are not liable for any damages that may result from the use of our services.</li>
            <li>These terms shall be governed by and construed in accordance with the laws of the United Kingdom.</li>
            <li>Any disputes arising from these terms or our services shall be resolved through arbitration in the United Kingdom.</li>
          </ul>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Last updated: June 15, 2025
          </p>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;