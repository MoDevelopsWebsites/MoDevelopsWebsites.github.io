import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Server, FileText, Globe } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">How we collect, use, and protect your information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Shield className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">INTRODUCTION</h2>
          </div>
          <p className="mb-4">
            At Stunnas Tweaks ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
          </p>
          <p>
            This Privacy Policy applies to all information collected through our website, Discord server, and any related services, sales, marketing, or events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Database className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">INFORMATION WE COLLECT</h2>
          </div>
          <p className="mb-4">We collect several types of information from and about users of our services, including:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <span className="font-medium">Personal Information:</span> We collect personal information that you voluntarily provide to us when you register for our services, express interest in obtaining information about us or our products, or otherwise contact us. This includes:
              <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                <li>Full name</li>
                <li>Email address</li>
                <li>Billing address</li>
                <li>Discord username</li>
                <li>Payment information (processed securely through our payment processors)</li>
              </ul>
            </li>
            <li className="mt-3">
              <span className="font-medium">Automatically Collected Information:</span> When you visit our website, we may automatically collect certain information about your device, including:
              <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages you view</li>
                <li>Time and date of your visit</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Eye className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">HOW WE USE YOUR INFORMATION</h2>
          </div>
          <p className="mb-4">We use the information we collect for various purposes, including to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Provide, operate, and maintain our services</li>
            <li>Process and complete transactions, and send related information including purchase confirmations and invoices</li>
            <li>Deliver the purchased products or services to you through our Discord server</li>
            <li>Respond to your comments, questions, and requests, and provide customer service</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Communicate with you about products, services, offers, promotions, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, prevent, and address technical issues, fraud, or other illegal activities</li>
            <li>Improve our website, products, services, marketing, and customer relationships</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Server className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">DISCLOSURE OF YOUR INFORMATION</h2>
          </div>
          <p className="mb-4">We may disclose your personal information in the following situations:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <span className="font-medium">Third-Party Service Providers:</span> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
            <li>
              <span className="font-medium">Business Transfers:</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <span className="font-medium">Legal Requirements:</span> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
            </li>
            <li>
              <span className="font-medium">Protection of Rights:</span> We may disclose your information to protect the rights, property, or safety of our company, our customers, or others.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Lock className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">DATA SECURITY</h2>
          </div>
          <p className="mb-4">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
          <p>
            We use industry-standard encryption technologies when transferring and receiving consumer data exchanged with our site. We have appropriate security measures in place in our physical facilities to protect against the loss, misuse, or alteration of information that we have collected from you at our site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Globe className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">INTERNATIONAL DATA TRANSFERS</h2>
          </div>
          <p className="mb-4">
            Our services are operated in the United Kingdom. If you are located in another jurisdiction, please be aware that information you provide to us may be transferred to, stored, and processed in the UK and other countries. By using our services or providing us with any information, you consent to the transfer, processing, and storage of your information in countries where the privacy laws may not be as comprehensive as those in the country where you reside or are a citizen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <FileText className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">YOUR PRIVACY RIGHTS</h2>
          </div>
          <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@stunnastweaks.com" className="text-primary hover:underline">
              privacy@stunnastweaks.com
            </a>{' '}
            or through our Discord server at{' '}
            <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://discord.gg/PCDJ2Sc98D
            </a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Shield className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">CHILDREN'S PRIVACY</h2>
          </div>
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us immediately.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <FileText className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">CHANGES TO THIS PRIVACY POLICY</h2>
          </div>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-card p-6 rounded-lg shadow-lg mb-8 border border-border"
        >
          <div className="flex items-center mb-4 text-primary">
            <Lock className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-semibold">CONTACT US</h2>
          </div>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:privacy@stunnastweaks.com" className="text-primary hover:underline">
              privacy@stunnastweaks.com
            </a>{' '}
            or through our Discord server at{' '}
            <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://discord.gg/PCDJ2Sc98D
            </a>.
          </p>
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

export default Privacy;