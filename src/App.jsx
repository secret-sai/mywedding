import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Heart, Utensils, Music, Sparkles } from 'lucide-react';
import './index.css';

const Loader = ({ onComplete }) => {
  return (
    <motion.div 
      className="loader-overlay"
      initial={{ scaleY: 1 }}
      exit={{ 
        scaleY: 0,
        transition: { duration: 1.8, ease: [0.77, 0, 0.175, 1] }
      }}
    >
      <div className="loader-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="script-font loader-text">
            Sai <span className="weds-small">weds</span> Sandhya
          </p>
        </motion.div>
        <div className="carpet-lines">
          <motion.div 
            className="line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.8, y: 30 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const galleryImages = [
    "/assets/couple-duo-1.png",
    "/assets/couple-duo-2.png",
    "/assets/couple-duo-3.png",
    "/assets/couple-duo-4.png"
  ];

  return (
    <div className="wedding-site ghibli-theme">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero flex-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/ghibli-hero.png')" }}>
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.p className="script-font floating" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '4px 4px 20px rgba(0,0,0,0.8)' }}>
            <Sparkles size={24} style={{ marginRight: '10px' }} />
            The Wedding Invitation
          </motion.p>
          <h1 className="main-title" style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)', letterSpacing: '1px' }}>
            Sai <span className="weds-mid">weds</span> Sandhya
          </h1>
          <p className="sub-title" style={{ fontWeight: '700', textShadow: '2px 2px 15px rgba(0,0,0,0.9)', fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
            APRIL 18TH, 2026 • VISAKHAPATNAM
          </p>
          <motion.div className="date-badge" whileHover={{ scale: 1.05 }}>
            <p>SAVE THE DATE</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <p style={{ fontSize: '0.7rem', letterSpacing: '4px', fontWeight: 'bold' }}>DISCOVER</p>
          <div className="mouse" />
        </motion.div>
      </section>

      {/* Separate Portraits Section */}
      <section className="section-padding lush-section" style={{ backgroundImage: "url('/assets/lush-bg.png')" }}>
        <div className="container">
          <motion.div {...fadeInUp} className="portrait-intro text-center">
            <p className="script-font">The Happy Couple</p>
            <h2 className="section-title">Our Souls Unite</h2>
            <div className="portrait-grid">
              <motion.div className="portrait-card" whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}>
                <div className="portrait-frame">
                  <img src="/assets/groom-sketchy.png" alt="Sai" />
                </div>
                <h3>Sai</h3>
                <p className="role">THE GROOM</p>
              </motion.div>
              <div className="portrait-connector">
                <Heart size={50} className="floating-heart" color="#D4AF37" fill="#D4AF37" />
              </div>
              <motion.div className="portrait-card" whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}>
                <div className="portrait-frame">
                  <img src="/assets/bride-solo.png" alt="Sandhya" />
                </div>
                <h3>Sandhya</h3>
                <p className="role">THE BRIDE</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Celebrations Section */}
      <section className="section-padding events-section-refined">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center" style={{ marginBottom: '60px' }}>
            <p className="script-font" style={{ color: 'var(--ghibli-gold)' }}>Events</p>
            <h2 className="section-title-white">The Celebrations</h2>
          </motion.div>
          
          <div className="events-grid-refined">
            <motion.div {...scaleUp} className="event-card-premium">
              <div className="card-top">
                <Music color="#D4AF37" size={48} className="event-icon" />
              </div>
              <h3>The Wedding Ceremony</h3>
              <div className="divider" />
              <div className="event-info-box">
                <p><Calendar size={20} /> Saturday, April 18, 2026</p>
                <p><Clock size={20} /> 09:00 AM onwards</p>
                <p><MapPin size={20} /> Grand A1 Kalyanamandapam</p>
              </div>
              <p className="event-desc">Join us as we take our vows in the presence of family and friends.</p>
            </motion.div>
            
            <motion.div {...scaleUp} className="event-card-premium" transition={{ delay: 0.3 }}>
              <div className="card-top">
                <Utensils color="#D4AF37" size={48} className="event-icon" />
              </div>
              <h3>The Grand Feast</h3>
              <div className="divider" />
              <div className="event-info-box">
                <p><Calendar size={20} /> Saturday, April 18, 2026</p>
                <p><Clock size={20} /> 12:30 PM onwards</p>
                <p><MapPin size={20} /> Banquet Hall, Grand A1</p>
              </div>
              <p className="event-desc">Let's celebrate our union with a delicious traditional banquet.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding gallery-section">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center">
            <p className="script-font">Gallery</p>
            <h2 className="section-title">Frozen Moments</h2>
            <div className="gallery-layout">
              {galleryImages.map((img, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  className={`gallery-box box-${index + 1}`}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                >
                  <img src={img} alt={`Moment ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="section-padding venue-section" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/ghibli-food.png')" }}>
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <p className="script-font" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>Location</p>
            <h2 className="venue-title-refined">Grand A1 Kalyanamandapam</h2>
            <p className="venue-address-refined">
              <MapPin size={24} /> Madillapalem, Vishakapatnam, Andhra Pradesh
            </p>
            <div className="ghibli-border-premium">
              <img src="/assets/ghibli-food.png" alt="Venue" className="venue-img-refined" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-refined">
        <div className="footer-content">
          <p className="script-font" style={{ fontSize: 'clamp(2rem, 10vw, 3.5rem)' }}>See you there!</p>
          <div className="footer-line" />
          <p className="hashtag">#SaiWedsSandhya2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
