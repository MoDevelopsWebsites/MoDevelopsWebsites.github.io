import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ExternalLink, Minimize2, Maximize2 } from 'lucide-react';

const commonQuestions = [
  {
    question: "What do I do after purchasing?",
    answer: (
      <div className="space-y-2">
        <p>After purchasing, please follow these steps:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Join our Discord server</li>
          <li>Create a support ticket</li>
          <li>Provide your order details</li>
          <li>Our team will assist you with the setup</li>
        </ol>
        <a
          href="https://discord.gg/PCDJ2Sc98D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-2"
        >
          Join Discord <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    )
  },
  {
    question: "How do the tweaks work?",
    answer: "Our tweaks optimize your system settings, network configuration, and game files to enhance performance. They're safe, tested, and easily reversible."
  },
  {
    question: "Are the tweaks safe to use?",
    answer: "Yes, all our tweaks are thoroughly tested and safe. They only modify approved system settings and don't use any third-party software or cheats."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery is instant! After purchase, you'll get immediate access through our Discord support system."
  },
  {
    question: "Will the tweaks affect my warranty?",
    answer: "No, our tweaks don't make any permanent hardware changes. They only modify software settings that can be easily reverted, so your warranty remains intact."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "Not at all! Our team provides step-by-step guidance through the entire process. We've designed our service to be accessible for all users regardless of technical expertise."
  },
  {
    question: "Which games do your tweaks support?",
    answer: (
      <div className="space-y-2">
        <p>Our tweaks support all major competitive games including:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Fortnite</li>
          <li>Valorant</li>
          <li>Call of Duty (All titles)</li>
          <li>Apex Legends</li>
          <li>Counter-Strike 2</li>
          <li>Rainbow Six Siege</li>
          <li>And many more!</li>
        </ul>
        <p className="text-xs mt-2">If you have a specific game not listed, feel free to ask in our Discord.</p>
      </div>
    )
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards through our secure Stripe payment system, as well as PayPal for your convenience and security."
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a 24-hour satisfaction guarantee. If you're not satisfied with our service within 24 hours of purchase, we'll provide a full refund. Please contact our support team through Discord to process any refund requests."
  },
  {
    question: "How much FPS improvement can I expect?",
    answer: "Results vary depending on your hardware, but most users experience a 15-40% increase in FPS. Lower-end systems often see the most dramatic improvements, while high-end systems may see more stability benefits and reduced input delay."
  }
];

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { 
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: React.ReactNode }>>([]);
  const [inputValue, setInputValue] = useState('');

  const handleQuestionClick = (question: string, answer: React.ReactNode) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', content: question },
      { type: 'bot', content: answer }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user' as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for custom questions
    const lowercaseInput = inputValue.toLowerCase();
    let botResponse = "I'm not sure about that. Please try asking one of the common questions above or join our Discord for specific help.";

    // Check for purchase-related questions
    if (lowercaseInput.includes('after purchase') || lowercaseInput.includes('bought') || lowercaseInput.includes('receive') || lowercaseInput.includes('get my')) {
      botResponse = commonQuestions[0].answer;
    } 
    // Check for safety-related questions
    else if (lowercaseInput.includes('safe') || lowercaseInput.includes('security') || lowercaseInput.includes('risk') || lowercaseInput.includes('damage')) {
      botResponse = commonQuestions[2].answer;
    } 
    // Check for delivery-related questions
    else if (lowercaseInput.includes('delivery') || lowercaseInput.includes('receive') || lowercaseInput.includes('how long') || lowercaseInput.includes('wait time')) {
      botResponse = commonQuestions[3].answer;
    } 
    // Check for how-it-works questions
    else if (lowercaseInput.includes('work') || lowercaseInput.includes('how') || lowercaseInput.includes('function') || lowercaseInput.includes('do they')) {
      botResponse = commonQuestions[1].answer;
    }
    // Check for warranty questions
    else if (lowercaseInput.includes('warranty') || lowercaseInput.includes('guarantee') || lowercaseInput.includes('permanent')) {
      botResponse = commonQuestions[4].answer;
    }
    // Check for technical knowledge questions
    else if (lowercaseInput.includes('technical') || lowercaseInput.includes('difficult') || lowercaseInput.includes('complicated') || lowercaseInput.includes('hard to')) {
      botResponse = commonQuestions[5].answer;
    }
    // Check for game support questions
    else if (lowercaseInput.includes('game') || lowercaseInput.includes('support') || lowercaseInput.includes('fortnite') || lowercaseInput.includes('valorant') || lowercaseInput.includes('cod') || lowercaseInput.includes('apex')) {
      botResponse = commonQuestions[6].answer;
    }
    // Check for payment questions
    else if (lowercaseInput.includes('payment') || lowercaseInput.includes('pay') || lowercaseInput.includes('credit card') || lowercaseInput.includes('paypal')) {
      botResponse = commonQuestions[7].answer;
    }
    // Check for refund questions
    else if (lowercaseInput.includes('refund') || lowercaseInput.includes('money back') || lowercaseInput.includes('cancel') || lowercaseInput.includes('return')) {
      botResponse = commonQuestions[8].answer;
    }
    // Check for performance improvement questions
    else if (lowercaseInput.includes('fps') || lowercaseInput.includes('performance') || lowercaseInput.includes('improve') || lowercaseInput.includes('better') || lowercaseInput.includes('increase')) {
      botResponse = commonQuestions[9].answer;
    }
    // Check for Discord-related questions
    else if (lowercaseInput.includes('discord') || lowercaseInput.includes('server') || lowercaseInput.includes('join') || lowercaseInput.includes('support')) {
      botResponse = (
        <div className="space-y-2">
          <p>Our Discord server is the central hub for all support and service delivery. After purchase, you'll need to join our server to receive your tweaks.</p>
          <a
            href="https://discord.gg/PCDJ2Sc98D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-2"
          >
            Join Discord <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      );
    }
    // Check for contact questions
    else if (lowercaseInput.includes('contact') || lowercaseInput.includes('help') || lowercaseInput.includes('support') || lowercaseInput.includes('talk to')) {
      botResponse = (
        <div className="space-y-2">
          <p>The fastest way to get support is through our Discord server. Our team is available 24/7 to assist you with any questions or issues.</p>
          <a
            href="https://discord.gg/PCDJ2Sc98D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-2"
          >
            Join Discord <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      );
    }

    setInputValue('');
    
    // Delayed bot response for natural feel
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 500);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-card rounded-lg shadow-xl border border-border backdrop-blur-sm mb-2 mr-2 w-full max-w-[calc(100vw-2rem)] sm:max-w-[384px]"
          >
            <motion.div 
              className="p-4 border-b border-border flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold">Support Chat</h3>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={toggleMinimize}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="p-4 space-y-4">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-sm font-medium">Common Questions:</p>
                      <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                        {commonQuestions.map((q, i) => (
                          <motion.button
                            key={i}
                            onClick={() => handleQuestionClick(q.question, q.answer)}
                            className="text-sm text-left w-full px-3 py-2 rounded-md hover:bg-accent transition-all duration-200"
                            whileHover={{ scale: 1.02, backgroundColor: 'hsl(var(--accent))' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                          >
                            {q.question}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <div className="h-48 sm:h-64 overflow-y-auto space-y-4 my-4 scroll-smooth">
                      <AnimatePresence mode="popLayout">
                        {messages.map((message, index) => (
                          <motion.div
                            key={index}
                            layout
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <motion.div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.type === 'user'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-accent'
                              }`}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                              {message.content}
                            </motion.div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="p-4 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      />
                      <motion.button
                        type="submit"
                        className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default ChatBot;