import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpg";
import hero_bg from "../assets/imgbg.jpg";
import about_img from "../assets/aboutusimg.jpg";
import new_img from "../assets/fountain.jpeg";
import new_img2 from "../assets/skypalce.jpeg";
import new_img3 from "../assets/wheel.jpg";
import new_img4 from "../assets/fire cracker img 5.jpg";
import Header from './HeaderLayouts';
import Footer from './FooterLayouts';
import { FiX, FiCheck, FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiAlertTriangle } from 'react-icons/fi';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isRenderPopup, setIsRenderPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoverState, setHoverState] = useState({});

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showPopup) {
      setIsRenderPopup(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRenderPopup(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem('hasSeenPopup', 'true');
    }, 300);
  };

  const setHover = (id, value) => {
    setHoverState(prev => ({ ...prev, [id]: value }));
  };

  // Contact form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setSubmitStatus(null);
    
    // Simulate form submission (replace with actual API call)
    try {
      // This would be your actual API call in a real application
      // await submitContactForm(formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmittingContact(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  // Dynamic styles based on mobile
  const getStyles = () => {
    const gap = isMobile ? '1rem' : '2rem';
    const padding = isMobile ? '1rem' : '2rem';
    const fontSize = isMobile ? '1rem' : '1.1rem';

    return {
      // Popup
    popupOverlay: {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: isMobile ? '10px' : '20px', // Less padding on mobile
},
    popupContainer: {
  backgroundColor: '#fff',
  borderRadius: isMobile ? '14px' : '16px',
  maxWidth: isMobile ? '95vw' : '500px',
  width: '100%',
  overflow: 'hidden',
  boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: isMobile ? '90vh' : 'auto', // Prevent overflow on small screens
},
      popupHeader: {
       background: 'linear-gradient(90deg, #FF6B35, #F8B500)',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      popupTitle: {
        margin: 0,
        fontSize: '1.4rem',
        fontWeight: '600',
      },
     closeButton: {
  background: 'rgba(255, 255, 255, 0.2)',
  border: 'none',
  color: 'white',
  fontSize: '1.5rem',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
},
closeButtonHover: {
  background: 'rgba(255, 255, 255, 0.3)',
  transform: 'scale(1.1)',
},
     popupContent: {
  padding: isMobile ? '20px 16px' : '30px 20px',
  lineHeight: 1.7,
  color: '#333',
  textAlign: 'center',
  fontSize: isMobile ? '0.95rem' : '1rem',
  flex: 1, // This makes it grow and push button down
},
     acceptButton: {
  display: 'block',
  width: '100%',
  padding: '16px',
  background: 'linear-gradient(90deg, #FF6B35, #F8B500)',
  color: 'white',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius: '0 0 16px 16px',
  transition: 'all 0.3s',
},
acceptButtonHover: {
  background: 'linear-gradient(90deg, #E55A2B, #D8A000)',
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 15px rgba(255, 107, 53, 0.6)',
},
      // Hero
      heroSection: {
        height: '90vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${hero_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
      },
      heroContent: {
        zIndex: 2,
        maxWidth: '800px',
        padding: '20px',
      },
      heroTitle: {
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        background: 'linear-gradient(90deg, #FFD700, #FF9800)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0 0 1rem 0',
        fontWeight: 'bold',
      },
      heroSubtitle: {
        fontSize: '1.3rem',
        opacity: 0.9,
        marginBottom: '2rem',
      },
      heroButton: {
        display: 'inline-block',
        padding: '14px 40px',
        background: 'linear-gradient(90deg, #FF6B35, #F8B500)',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: '1.2rem',
        boxShadow: '0 6px 20px rgba(255, 107, 53, 0.5)',
        transition: 'all 0.3s',
      },
      heroButtonHover: {
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 30px rgba(255, 107, 53, 0.7)',
      },

      // Feature Strip
      featureStrip: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        padding: '15px 20px',
        backgroundColor: '#FFF3E0',
        color: '#541354',
        fontSize: '1rem',
        flexWrap: 'wrap',
      },
      featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: '500',
      },

      // About Section
      aboutSection: {
        padding: '80px 20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '50px',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#FDF9F5',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      },
      aboutImageWrapper: {
        flex: '1 1 400px',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
      },
      aboutImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      aboutText: {
        flex: '1 1 500px',
        padding: '20px',
      },
      aboutTitle: {
        fontSize: '2.4rem',
        color: '#541354',
        marginBottom: '1.2rem',
      },
      aboutDesc: {
        fontSize: fontSize,
        lineHeight: 1.7,
        color: '#444',
        marginBottom: '1rem',
      },
      ctaLink: {
        display: 'inline-block',
        padding: '12px 28px',
        background: 'linear-gradient(90deg, #541354, #8E24AA)',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.3s',
      },
      ctaLinkHover: {
        background: '#541354',
        transform: 'translateY(-2px)',
      },

      // Products
      productsSection: {
        padding: '80px 20px 0',
        textAlign: 'center',
      },
      sectionTitle: {
        fontSize: '2.5rem',
        color: '#541354',
        marginBottom: '40px',
      },
      productGrid: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
      },
      productCard: {
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
      },
      productCardHover: {
        transform: 'translateY(-8px)',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
      },
      productImg: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
      },
      productInfo: {
        padding: '16px',
        backgroundColor: '#fff',
      },
      productName: {
        margin: '0 0 6px 0',
        fontSize: '1.1rem',
        color: '#541354',
        fontWeight: '600',
      },
      productDesc: {
        margin: '0',
        fontSize: '0.9rem',
        color: '#666',
      },
      viewAll: {
        display: 'inline-block',
        marginTop: '30px',
        padding: '12px 30px',
        background: 'transparent',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.3s',
        background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
      },

      // Safety Banner
      safetyBanner: {
        margin: '0 20px',
        padding: '10px 20px',
        background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
        color: '#541354',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0px',
        flexWrap: 'wrap',
        fontSize: '1rem',
        fontWeight: '500',
      },
      safetyLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '600',
      },

      // Contact Section
      contactSection: {
        padding: '50px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      },
      contactContainer: {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '30px' : '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      },
      contactTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      },
      contactTitle: {
        fontSize: '2.6rem',
        color: '#541354',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: 0,
      },
      contactSubtitle: {
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: 1.6,
        margin: 0,
      },
      contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1rem',
      },
      contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '1.1rem',
        color: '#333',
      },
      contactForm: {
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
        transform: isMobile ? 'none' : 'translateY(20px)',
      },
      
      // Form styles
      modernFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      },
     formRowStyle: {
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  gap: '12px',
  marginBottom: '1rem',
},
    modernInputStyle: {
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  width: '100%',
  backgroundColor: '#fff',
  transition: 'all 0.3s',
  boxSizing: 'border-box',
},
      modernSelectStyle: {
        padding: '14px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        width: '100%',
        backgroundColor: '#fff',
        transition: 'all 0.3s',
      },
      modernTextareaStyle: {
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  width: '100%',
  minHeight: '120px',
  resize: 'vertical',
  backgroundColor: '#fff',
  transition: 'all 0.3s',
  boxSizing: 'border-box',
},
      modernSubmitButton: {
        padding: '14px',
        background: '#541354',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.3s',
      },
      submitButtonHover: {
        background: '#4A104A',
        transform: 'translateY(-2px)',
      },
      modernSuccessStyle: {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: '#d4edda',
        color: '#155724',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.9rem',
      },
      modernErrorStyle: {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.9rem',
      },

      // Background Decoration
      contactBg: {
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0) 70%)',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.6,
      },
    };
  };

  const styles = getStyles();

  return (
    <>
      <Header />

      {/* === Popup === */}
     {isRenderPopup && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: isVisible ? 'auto' : 'none',
  }}>
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '600px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      transform: isVisible ? 'scale(1)' : 'scale(0.95)',
      transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }}>
      
      {/* Header with #ff4057 color theme */}
      <div style={{
          background: "linear-gradient(90deg, #FF6B35, #F8B500)",
        color: 'white',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <FiAlertTriangle size={20} />
          </div>
          <h2 style={{ 
            margin: 0, 
            fontSize: '1.25rem', 
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            Important Notice
          </h2>
        </div>
        <button 
          onClick={handleClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '5px',
            transition: 'transform 0.2s ease',
            ':hover': {
              transform: 'rotate(90deg)'
            }
          }}
        >
          <FiX />
        </button>
      </div>

      {/* Content */}
      <div style={{ 
        padding: '25px',
        maxHeight: '60vh', 
        overflowY: 'auto',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <p style={{
            margin: 0,
            color: '#333',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}>
            As per 2018 Supreme Court Order, online sale of firecrackers is NOT permitted. 
            We value our customers and at the same time, we respect the jurisdiction.
          </p>
          
          <p style={{
            margin: 0,
            color: '#333',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}>
            We request our customers to:
          </p>
          
          <ul style={{
            margin: 0,
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            <li>Select your products in the Estimate Page to see your estimation</li>
            <li>Submit the required crackers through the Get Estimate Button</li>
          </ul>
          
          <p style={{
            margin: 0,
            color: '#333',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}>
            We will contact you within 2 hours and confirm the order through phone call. 
            Please add and submit your enquiries and enjoy your Diwali with NEW CRACKERS.
          </p>
          
          <p style={{
            margin: 0,
            color: '#333',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}>
            NEW CRACKERS is a shop following 100% legal & statutory compliances and 
            all our shops, go-downs are maintained as per the explosive acts. We send 
            the parcels through registered and legal transport service providers.
          </p>
        </div>
      </div>

      {/* Footer with #ff4057 color theme */}
      <div style={{
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #f0f0f0',
        background: '#f9f9f9',
      }}>
        <button
          onClick={handleClose}
          style={{
              background: "linear-gradient(90deg, #FF6B35, #F8B500)",
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(255, 64, 87, 0.3)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(255, 64, 87, 0.4)',
                background: "linear-gradient(90deg, #FF6B35, #F8B500)",
            }
          }}
        >
          <FiCheck />
          I Understand
        </button>
      </div>
    </div>
  </div>
)}

      {/* === Hero === */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Where Fire Meets Festival</h1>
          <p style={styles.heroSubtitle}>Spreading Smiles with Every Spark!</p>
          <Link
            to="/product"
            style={{
              ...styles.heroButton,
              ...(hoverState.hero ? styles.heroButtonHover : {}),
            }}
            onMouseEnter={() => setHover('hero', true)}
            onMouseLeave={() => setHover('hero', false)}
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* === About === */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutImageWrapper}>
          <img src={about_img} alt="About" style={styles.aboutImage} />
        </div>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutTitle}>Born from Fire, Built on Trust</h2>
          <p style={styles.aboutDesc}>
            we believe every celebration deserves to sparkle with joy, color, and unforgettable memories. With years of expertise in crafting premium-quality firecrackers, we are dedicated to bringing safe, vibrant, and eco-friendly fireworks to your festive moments.
          </p>
          <p style={styles.aboutDesc}>
            Our collection ranges from traditional favorites to innovative fireworks that combine dazzling effects with safety and sustainability. Each product is carefully tested to ensure the highest standards of quality, performance, and customer satisfaction.
          </p>
          <p style={styles.aboutDesc}>
            We don't just sell crackers. We deliver memories that echo through generations.
          </p>
          <Link
            to="/about"
            style={{
              ...styles.ctaLink,
              ...(hoverState.about ? styles.ctaLinkHover : {}),
            }}
            onMouseEnter={() => setHover('about', true)}
            onMouseLeave={() => setHover('about', false)}
          >
            Our Legacy
          </Link>
        </div>
      </section>

      {/* === Products === */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>This Season's Stars</h2>
        <div style={styles.productGrid}>
          {[
            { img: new_img2, name: "Sky Palace", desc: "100-shot aerial burst" },
            { img: new_img, name: "Fountain Gold", desc: "Colorful ground bloom" },
            { img: new_img3, name: "Rainbow Wheel", desc: "Spinning joy" },
            { img: new_img4, name: "Silver Cascade", desc: "Elegant silver flow" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                ...styles.productCard,
                ...(hoverState[`card${i}`] ? styles.productCardHover : {}),
              }}
              onMouseEnter={() => setHover(`card${i}`, true)}
              onMouseLeave={() => setHover(`card${i}`, false)}
            >
              <img src={item.img} alt={item.name} style={styles.productImg} />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{item.name}</h3>
                <p style={styles.productDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/product"
          style={{
            ...styles.viewAll,
            ...(hoverState.viewAll ? styles.viewAllHover : {}),
          }}
        >
          View All Crackers →
        </Link>
      </section>

      {/* === Contact Section === */}
      <section style={styles.contactSection}>
        <div style={styles.contactBg}></div>
        <div style={styles.contactContainer}>
          <div style={styles.contactTextWrapper}>
            <h2 style={styles.contactTitle}>Let's Light Up the Conversation</h2>
            <p style={styles.contactSubtitle}>
              Have questions? Need help with your Diwali order? We're here for you — before, during, and after the spark.
            </p>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}><FiMapPin /> Virudhunagar, TN 626189</div>
              <div style={styles.contactItem}><FiPhone /> +91 9787009888</div>
              <div style={styles.contactItem}><FiMail /> srigokilaacrackers0@gmail.com</div>
              <div style={styles.contactItem}><FiClock /> Mon–Sat: 9AM–8PM</div>
            </div>
          </div>
          <div style={styles.contactForm}>
           <form style={styles.modernFormStyle} onSubmit={handleContactSubmit}>
  {/* Name & Email Row */}
  <div style={styles.formRowStyle}>
    <input 
      type="text" name="name" placeholder="Full Name"
      style={styles.modernInputStyle} value={formData.name}
      onChange={handleInputChange} required
    />
    <input 
      type="email" name="email" placeholder="Email Address"
      style={styles.modernInputStyle} value={formData.email}
      onChange={handleInputChange} required
    />
  </div>

  {/* Phone & Subject Row */}
  <div style={styles.formRowStyle}>
    <input 
      type="tel" name="phone" placeholder="Phone Number"
      style={styles.modernInputStyle} value={formData.phone}
      onChange={handleInputChange}
    />
    <select 
      name="subject" style={styles.modernSelectStyle}
      value={formData.subject} onChange={handleInputChange}
    >
      <option value="">Select Topic</option>
      <option value="sales">Product Inquiry</option>
      <option value="wholesale">Bulk Orders</option>
      <option value="support">Customer Support</option>
      <option value="other">General Question</option>
    </select>
  </div>

  {/* Message Area */}
  <div style={{ marginBottom: '1rem' }}>
    <textarea 
      name="message" placeholder="Tell us about your celebration plans..."
      rows="5"
      style={{
        ...styles.modernTextareaStyle,
        padding: '14px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        width: '100%',
        minHeight: '120px',
        resize: 'vertical',
        backgroundColor: '#fff',
        transition: 'all 0.3s',
        boxSizing: 'border-box',
      }}
      value={formData.message}
      onChange={handleInputChange}
      required
    ></textarea>
  </div>

  {/* Status Messages */}
  {submitStatus === 'success' && (
    <div style={styles.modernSuccessStyle}>
      <FiCheck /> Message sent successfully! We'll contact you soon.
    </div>
  )}
  {submitStatus === 'error' && (
    <div style={styles.modernErrorStyle}>
      <FiX /> Failed to send message. Please try again.
    </div>
  )}

  {/* Submit Button */}
  <button 
    type="submit" 
    style={{
      ...styles.modernSubmitButton,
      ...(hoverState.submit ? styles.submitButtonHover : {}),
      padding: '14px',
      background: '#541354',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s',
    }} 
    onMouseEnter={() => setHover('submit', true)}
    onMouseLeave={() => setHover('submit', false)}
    disabled={isSubmittingContact}
  >
    {isSubmittingContact ? 'Sending...' : (
      <>
        <FiSend />
        Send Message
      </>
    )}
  </button>
</form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;