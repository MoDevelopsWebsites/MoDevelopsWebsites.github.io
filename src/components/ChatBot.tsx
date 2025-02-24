import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ExternalLink } from 'lucide-react';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react';

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
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: React.ReactNode }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const { refs, floatingStyles, update } = useFloating({
    placement: 'top-end',
    middleware: [
      offset(10),
      flip({
        fallbackAxisSideDirection: 'start',
        padding: 20
      }),
      shift({ padding: 20 })
    ],
    whileElementsMounted: autoUpdate
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (update) update();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [update]);

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

    if (lowercaseInput.includes('after purchase') || lowercaseInput.includes('bought')) {
      botResponse = commonQuestions[0].answer;
    } else if (lowercaseInput.includes('safe') || lowercaseInput.includes('security')) {
      botResponse = commonQuestions[2].answer;
    } else if (lowercaseInput.includes('delivery') || lowercaseInput.includes('receive')) {
      botResponse = commonQuestions[3].answer;
    } else if (lowercaseInput.includes('work') || lowercaseInput.includes('how')) {
      botResponse = commonQuestions[1].answer;
    }

    setInputValue('');
    
    // Delayed bot response for natural feel
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 500);
  };

  return (
    <>
      <motion.button
        ref={refs.setReference}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ 
          transform: `translateY(${Math.min(0, -scrollPosition)}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              transform: `translateY(${Math.min(0, -scrollPosition)}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-20 right-4 w-96 bg-card rounded-lg shadow-xl border border-border backdrop-blur-sm"
          >
            <motion.div 
              className="p-4 border-b border-border flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold">Support Chat</h3>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <div className="p-4 space-y-4">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm font-medium">Common Questions:</p>
                <div className="space-y-2">
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

              <div className="h-64 overflow-y-auto space-y-4 my-4 scroll-smooth">
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
    </>
  );
};

export default ChatBot;