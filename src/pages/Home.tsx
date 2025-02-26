import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Star, Users, Zap, Trophy, ArrowRight } from 'lucide-react';
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

const stats = [
  { icon: Users, label: "Active Users", value: "50K+" },
  { icon: Zap, label: "Server Boosts", value: "100K+" },
  { icon: Star, label: "5-Star Reviews", value: "10K+" },
  { icon: Trophy, label: "Tournament Winners", value: "500+" }
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Bundle",
    price: 30,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "FPS Tweaks",
    price: 15,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Input Delay Tweaks",
    price: 15,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=400&fit=crop"
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
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Stunnas Tweaks
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Optimize Your Gaming Experience
          </p>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              Explore Products
              <ArrowRight className="inline-block ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block p-4 rounded-full bg-primary/10 mb-4"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
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
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="w-[300px] sm:w-[400px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;