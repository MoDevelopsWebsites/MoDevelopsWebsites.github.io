import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Star, Users, Zap, Trophy, ArrowRight, MessageSquare, Cpu, Gauge, Clock, Award, Shield, Headphones, BarChart, Gamepad } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Pro Gamer",
    content: "The FPS tweaks completely transformed my gaming experience. My gameplay is smoother than ever!",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Esports Player",
    content: "Input delay optimization made a noticeable difference in my competitive matches. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    content: "The premium bundle is a game-changer. My streams are now butter-smooth with zero lag.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Parker",
    role: "Tournament Player",
    content: "These optimizations gave me the competitive edge I needed. Outstanding results!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
  {
    name: "David Kim",
    role: "Professional Streamer",
    content: "Best investment for my streaming setup. The difference is night and day!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  }
];

// First row of stats for the marquee
const statsRow1 = [
  { icon: Cpu, label: "FPS Increase", value: "Up to 40%" },
  { icon: Clock, label: "Input Delay Reduction", value: "Up to 30%" },
  { icon: Gauge, label: "Network Latency", value: "Reduced by 25%" },
  { icon: Award, label: "Tournament Winners", value: "500+" },
  { icon: Users, label: "Satisfied Clients", value: "10,000+" },
  { icon: Shield, label: "Anti-Cheat Safe", value: "100%" },
];

// Second row of stats for the marquee (in reverse direction)
const statsRow2 = [
  { icon: Headphones, label: "Pro Teams Served", value: "50+" },
  { icon: BarChart, label: "Performance Gain", value: "Up to 35%" },
  { icon: Gamepad, label: "Games Supported", value: "100+" },
  { icon: Star, label: "5-Star Reviews", value: "2,500+" },
  { icon: Zap, label: "Instant Delivery", value: "24/7" },
  { icon: Trophy, label: "Years of Experience", value: "7+" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Bundle",
    price: 30,
    description: "Complete optimization package with all tweaks included",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "FPS Tweaks",
    price: 15,
    description: "Boost your frames per second and reduce stuttering",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Input Delay Tweaks",
    price: 15,
    description: "Reduce input lag for faster response time",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Ping Tweaks",
    price: 15,
    description: "Optimize network connection for lower latency",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
  }
];

const Home = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [newsletterRef, newsletterInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative">
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Professional Gaming Performance Optimization
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Enhance your gaming experience with our specialized FPS, input delay, and network optimization tweaks. 
            Gain the competitive edge with professional-grade performance solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Explore Products
                <ArrowRight className="inline-block ml-2" />
              </motion.button>
            </Link>
            <a href="https://discord.gg/PCDJ2Sc98D" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5865F2] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#4752c4] transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Join Our Discord
                <MessageSquare className="inline-block ml-2" />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Section - Animated Marquee */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-accent overflow-hidden"
      >
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold"
          >
            Performance Metrics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-2"
          >
            Real results from our optimization solutions
          </motion.p>
        </div>

        {/* First row - left to right */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex space-x-12 py-6"
          >
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex space-x-12 whitespace-nowrap"
            >
              {[...statsRow1, ...statsRow1].map((stat, index) => (
                <div key={`row1-${index}`} className="flex flex-col items-center bg-card px-8 py-6 rounded-xl shadow-md min-w-[220px]">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 rounded-full bg-primary/10 mb-4"
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Second row - right to left */}
        <div className="relative mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex space-x-12 py-6"
          >
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex space-x-12 whitespace-nowrap"
            >
              {[...statsRow2, ...statsRow2].map((stat, index) => (
                <div key={`row2-${index}`} className="flex flex-col items-center bg-card px-8 py-6 rounded-xl shadow-md min-w-[220px]">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-4 rounded-full bg-primary/10 mb-4"
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Section - Static Grid */}
      <motion.section
        ref={productsRef}
        className="py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Products
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 lg:gap-x-10 px-2 sm:px-6 md:px-8 lg:px-10">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 w-full h-full flex flex-col"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{product.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                    <Link to="/shop">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold text-center mb-12"
          >
            What Our Users Say
          </motion.h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-card p-6 rounded-lg shadow-lg h-full"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        ref={newsletterRef}
        className="py-20 bg-background"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={newsletterInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Stay Updated</h2>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;