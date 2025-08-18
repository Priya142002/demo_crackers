import React, { useState, useEffect, useRef } from "react";
import Header from "./HeaderLayouts";
import Footer from "./FooterLayouts";
import aboutimage from "../assets/aboutimage.png";
import productimage from "../assets/fire-cracker.png";
import happyclient from "../assets/happyClient.png";
import customer from "../assets/Customer.png";
import backgroundimg from "../assets/crackers.jpg";

const styles = {
  aboutUsContainer: {
    position: "relative",
    background: "linear-gradient(45deg, #FF6B9D, #C44569, #F8B500, #FF6B35, #6C5CE7)",
    backgroundSize: "300% 300%",
    animation: "gradient-shift 8s ease infinite",
    minHeight: "100vh",
    overflow: "hidden",
  },

  geometricShapes: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
  },

  shape: {
    position: "absolute",
    opacity: 0.1,
    animation: "float-shapes 15s linear infinite",
  },

heroSection: {
  position: "relative",
  height: "40vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(15px)",
  margin: "0 5px", // Reduced from 10px
  borderRadius: "15px 15px 0 0", // Reduced from 20px
  marginTop: "5px", // Reduced from 10px
},

  heroContent: {
    textAlign: "center",
    maxWidth: "800px", // Slightly smaller
    padding: "0 20px", // Reduced
  },

  heroTitle: {
    fontSize: "3.5rem", // Reduced from 5rem
    fontWeight: "900",
    background: "linear-gradient(45deg, #FF6B9D, #C44569, #6C5CE7)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "10px", // Reduced
    textTransform: "uppercase",
    letterSpacing: "2px", // Reduced
    animation: "text-bounce 2s ease-in-out infinite",
  },

  heroDescription: {
    fontSize: "1.2rem", // Reduced
    color: "#333",
    fontWeight: "500",
    lineHeight: "1.5", // Tighter
    marginBottom: "20px",
  },

  contentWrapper: {
  position: "relative",
  zIndex: 2,
  background: "white",
  margin: "0 10px",
  borderRadius: "20px",
  padding: "40px 0",
  // Remove margin if you want full width:
  margin: "0",
},

  zigzagSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px", // Reduced
  },

storyContainer: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0",
  marginBottom: "40px", // Reduced from 60px
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  height: "400px", // Set fixed height instead of maxHeight
},

storyContent: {
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.98) 100%)",
  padding: "15px", // Reduced from 40px 30px
  color: "white",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  clipPath: "polygon(0 0, 95% 0, 100% 100%, 0 100%)",
  zIndex: 2,
  height: "100%", // Take full height
},

storyImageSection: {
  position: "relative",
  borderRadius: "0",
  overflow: "hidden",
  clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
  zIndex: 1,
  display: "flex",
  alignItems: "center", // Changed from stretch to center
  justifyContent: "center",
  height: "100%", // Take full height of container
},
  storyTitle: {
    fontSize: "2.5rem", // Reduced
    fontWeight: "700",
    marginBottom: "20px", // Reduced
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },

  storyText: {
    fontSize: "1.1rem", // Reduced
    lineHeight: "1.6", // Tighter
    marginBottom: "15px", // Reduced
    opacity: 0.95,
  },

storyImage: {
  width: "70%",
  height: "70%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.5s ease",
  minHeight: "80%", // Ensure it covers full height
  '&:hover': {
    transform: "scale(1.05)",
  },
  filter: "brightness(1.1) saturate(1.1)",
},

floatingSparkles: {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
  overflow: "hidden",
  zIndex: 2,
},
sparkle: {
  position: "absolute",
  background: "white",
  borderRadius: "50%",
  opacity: 0,
  animation: "sparkle-fall 5s linear infinite",
},
 // Update these styles in your styles object
statsSection: {
  marginBottom: "40px",
  textAlign: "center",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  padding: "40px 0",
  width: "100%", // Already set to 100%
  marginLeft: "0",
  marginRight: "0",
  maxWidth: "none", // Remove any max-width constraints
  // Add these new properties:
  margin: "0 -20px", // Negative margin to extend beyond container
  padding: "40px 20px", // Add horizontal padding
},

statsTitle: {
  fontSize: "2rem", // Reduced from 2.5rem
  fontWeight: "800",
  color: "#333",
  marginBottom: "30px", // Reduced from 40px
  textTransform: "uppercase",
  letterSpacing: "1px",
},

statsContainer: {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
  // Remove maxWidth constraint or make it larger:
  maxWidth: "none",
  margin: "0 auto",
  // Remove padding to allow full width:
  padding: "0",
},

squareCard: {
  width: "320px",
  height: "180px",
  background: "white",
  borderRadius: "20px", // Rounded corners
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#333",
  position: "relative",
  transition: "all 0.4s ease",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  border: "2px solid #667eea", // Added border
},

squareIcon: {
  width: "50px",
  height: "50px",
  borderRadius: "12px", // Slightly rounded
  background: "rgba(102, 126, 234, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
},

squareNumber: {
  fontSize: "2.5rem",
  fontWeight: "900",
  marginBottom: "5px",
  color: "#667eea",
},

squareLabel: {
  fontSize: "1.1rem",
  fontWeight: "600",
  textAlign: "center",
  color: "#666",
  padding: "0 10px",
},
featuresSection: {
  marginBottom: "40px", // Reduced from 60px
  padding: "40px 10px", // Reduced from 60px 20px
  background: "white",
  textAlign: "center",
},

  featuresTitle: {
    fontSize: "2.2rem", // Reduced
    fontWeight: "700",
    color: "#333",
    marginBottom: "40px", // Reduced
    position: "relative",
    display: "inline-block",
  },

featuresGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "15px", // Reduced from 20px
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 5px", // Reduced from 10px
},

featureCard: {
  background: "white",
  borderRadius: "12px",
  padding: "30px 15px",
  textAlign: "center",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // Stronger shadow
  transition: "all 0.3s ease",
  borderTop: "4px solid #FF6B35",
},


  featureIcon: {
    fontSize: "2.2rem", // Reduced
    marginBottom: "15px",
    lineHeight: 1,
  },

  featureTitle: {
    fontSize: "1.4rem", // Reduced
    fontWeight: "700",
    marginBottom: "10px",
    color: "#333",
  },

  featureDescription: {
    fontSize: "1rem", // Reduced
    lineHeight: 1.5,
    color: "#666",
    fontWeight: "600",
  },

bottomWave: {
  position: "relative",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
  padding: "60px 20px 30px", // Reduced from 80px 30px 50px
  color: "white",
  textAlign: "center",
  zIndex: 2,
  margin: "0 5px 5px", // Reduced from 10px
  borderRadius: "0 0 15px 15px", // Reduced from 20px
},

  waveTitle: {
    fontSize: "2.2rem", // Reduced
    fontWeight: "700",
    marginBottom: "15px",
  },

  waveText: {
    fontSize: "1.15rem", // Reduced
    maxWidth: "700px", // Tighter width
    margin: "0 auto",
    lineHeight: "1.6",
    opacity: 0.95,
  },
};

const mobileStyles = `
.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 32px rgba(0,0,0,0.18); /* Deeper shadow on hover */
}

@keyframes sparkle-fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
    width: 5px;
    height: 5px;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
    width: 2px;
    height: 2px;
  }
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
}
@media (max-width: 768px) {
  .story-content-mobile {
    padding: 30px 20px !important; /* Reduce further on mobile */
  }
}
  
  .stats-title-mobile {
    font-size: 1.8rem !important; // Reduced from 2rem
    margin-bottom: 20px !important; // Reduced from 30px
  }
  @media (max-width: 768px) {
  .stats-container-mobile {
    gap: "30px !important", // Increased from 20px
    padding: "0 20px !important",
  }
  @media (max-width: 768px) {
  .stats-container-mobile {
    gap: 20px !important;
    padding: 0 15px !important;
  }
  
  .square-card-mobile {
    width: 150px !important;
    height: 150px !important;
    border-radius: 15px !important;
  }
  
  .square-number-mobile {
    font-size: 2rem !important;
  }
  
  .square-label-mobile {
    font-size: 0.9rem !important;
  }
}

@media (max-width: 480px) {
  .stats-container-mobile {
    gap: 15px !important;
  }
  
  .square-card-mobile {
    width: 130px !important;
    height: 130px !important;
    border-radius: 12px !important;
  }
  
  .square-number-mobile {
    font-size: 1.8rem !important;
  }
}
  .hero-title-mobile {
    font-size: 2.5rem !important; // Reduced from 3rem
    margin-bottom: 5px !important;
  }
  
  .hero-description-mobile {
    font-size: 1rem !important; // Reduced from 1.2rem
    padding: 0 10px !important; // Reduced from 20px
  }
  
  .story-content-mobile, .story-image-section-mobile {
    padding: 30px 15px !important; // Reduced from 40px 30px
  }
  
  .story-title-mobile {
    font-size: 1.8rem !important; // Reduced from 2.2rem
    margin-bottom: 15px !important;
  }
 @media (max-width: 768px) {
  .story-container-mobile {
    height: auto !important;
    grid-template-columns: 1fr !important;
  }
  
  .story-image-section-mobile {
    height: 300px !important; // Reduced mobile height
    clip-path: none !important;
  }
  
  .story-content-mobile {
    padding: 30px 20px !important;
  }
}

@media (max-width: 480px) {
  .story-image-section-mobile {
    height: 250px !important; // Even smaller for mobile
  }
}
  
  .feature-card {
    padding: 20px 10px !important; // Reduced from 30px 20px
  }
  
  .wave-title-mobile {
    font-size: 1.8rem !important; // Reduced from 2rem
  }
  
  .wave-text-mobile {
    font-size: 1rem !important; // Reduced from 1.1rem
    padding: 0 15px !important; // Reduced from 20px
  }
}

@media (max-width: 480px) {
  .hero-title-mobile {
    font-size: 2rem !important; // Reduced from 2.5rem
  }
  
  .stats-container-mobile {
    gap: 10px !important; // Reduced from 15px
  }
  
  .hexagon-card-mobile {
    width: 140px !important; // Reduced from 160px
    height: 140px !important;
  }
}
  /* Why We're Different Section Styling */
.features-section {
  padding: 60px 20px !important;
  background: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.features-title {
  font-size: 2.5rem !important;
  font-weight: 700;
  color: #333;
  margin-bottom: 50px !important;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.features-title::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 4px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #FF6B35, #F8B500);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
}

.features-grid {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 25px !important;
  max-width: 1300px !important;
  margin: 0 auto !important;
  padding: 0 20px !important;
}

.feature-card {
  background: white;
  border-radius: 12px !important;
  padding: 30px 15px !important;
  text-align: center !important;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08) !important;
  transition: all 0.4s ease !important;
  border-top: 4px solid transparent !important;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35, #F8B500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 2;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
  border-color: #FF6B35;
}

.feature-icon {
  font-size: 2.8rem !important;
  margin-bottom: 15px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  background: linear-gradient(135deg, #FF6B35, #F8B500);
  color: white;
  border-radius: 50%;
  margin: 0 auto 15px auto;
  box-shadow: 0 6px 15px rgba(255, 107, 53, 0.3);
}

.feature-title {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #333 !important;
  margin-bottom: 12px !important;
}

.feature-description {
  font-size: 1.05rem !important;
  color: #555 !important;
  line-height: 1.6 !important;
  padding: 0 10px;
  opacity: 0.9;
}

/* Responsive for Tablets */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px !important;
  }
}

/* Responsive for Mobile */
@media (max-width: 768px) {
  .features-section {
    padding: 40px 15px !important;
  }
  
  .features-title {
    font-size: 2rem !important;
    margin-bottom: 35px !important;
  }
  
  .features-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
  
  .feature-icon {
    font-size: 2.4rem !important;
    width: 60px;
    height: 60px;
  }
  
  .feature-title {
    font-size: 1.4rem !important;
  }
  
  .feature-description {
    font-size: 1rem !important;
    padding: 0 5px;
  }
}

@media (max-width: 480px) {
  .features-title {
    font-size: 1.8rem !important;
  }
  
  .feature-card {
    padding: 25px 10px !important;
  }
}
`;

const Aboutus = () => {
  const [shapes, setShapes] = useState([]);
  const [currentFeature, setCurrentFeature] = useState(0);
  const featureRefs = useRef([]);

  // Generate geometric shapes
  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      const shapeTypes = ['◆', '▲', '●', '■', '✦', '▼'];
      
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          size: Math.random() * 30 + 20,
          delay: Math.random() * 8,
          duration: Math.random() * 10 + 8,
          color: ['#FF6B9D', '#C44569', '#F8B500', '#FF6B35', '#6C5CE7', '#A29BFE'][Math.floor(Math.random() * 6)],
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Add styles to document head
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = mobileStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const featuresData = [
    {
      icon: "🎁",
      title: "Premium Packaging",
      frontDesc: "Superior Quality",
      backDesc: "Each cracker is carefully wrapped and tested for maximum safety and enjoyment during your celebrations."
    },
    {
      icon: "🌟",
      title: "24/7 Support",
      frontDesc: "Always Available",
      backDesc: "Our expert team provides round-the-clock assistance to ensure your shopping experience is seamless."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      frontDesc: "Lightning Speed",
      backDesc: "Get your crackers delivered within 5 days anywhere in India with our express delivery network."
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      frontDesc: "100% Safe",
      backDesc: "Multiple payment options with bank-level security to protect your financial information."
    }
  ];

  const timelineData = [
    { year: "2015", event: "Company Founded", color: "#FF6B9D" },
    { year: "2017", event: "Online Platform Launch", color: "#C44569" },
    { year: "2019", event: "500+ Products Added", color: "#F8B500" },
    { year: "2022", event: "Eco-Friendly Range", color: "#6C5CE7" },
    { year: "2024", event: "Industry Leader", color: "#A29BFE" }
  ];

  return (
    <>
      <Header />

      <div style={styles.aboutUsContainer}>
        {/* Floating Geometric Shapes */}
        <div style={styles.geometricShapes}>
          {shapes.map((shape) => (
            <div
              key={shape.id}
              style={{
                ...styles.shape,
                left: `${shape.x}%`,
                fontSize: `${shape.size}px`,
                color: shape.color,
                animationDelay: `${shape.delay}s`,
                animationDuration: `${shape.duration}s`,
              }}
            >
              {shape.shape}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 
              style={styles.heroTitle}
              className="hero-title-mobile"
            >
              About Us
            </h1>
            <p 
              style={styles.heroDescription}
              className="hero-description-mobile"
            >
              Where Every Celebration Becomes Extraordinary
            </p>
            
            {/* Interactive timeline dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "40px" }}>
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: item.color,
                    animation: `pulse-dot 2s ease-in-out infinite ${index * 0.4}s`,
                    cursor: "pointer",
                  }}
                  title={`${item.year} - ${item.event}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div style={styles.contentWrapper}>
          <div style={styles.zigzagSection}>
            
{/* Story Section - Merged Diagonal Container */}
<div style={styles.storyContainer}>
  {/* Text Side */}
  <div style={{ ...styles.storyContent, className: "story-content-mobile" }}>
    <div style={styles.floatingSparkles}>
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          style={{
            ...styles.sparkle,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
    <h2 style={styles.storyTitle}>Our Story</h2>
    <p style={styles.storyText}>
      Sri Gokilaa Crackers isn't just a business—it's a celebration of tradition, innovation, 
      and the pure joy that lights up every festival. Founded with the dream of bringing 
      spectacular moments to every household across India.
    </p>
    <p style={styles.storyText}>
      We've revolutionized the crackers industry by combining time-honored craftsmanship 
      with cutting-edge technology, ensuring that every burst of color and sound creates 
      memories that last a lifetime.
    </p>
  </div>

  {/* Image Side */}
 <div style={{ ...styles.storyImageSection, className: "story-image-section-mobile" }}>
    <img src={aboutimage} alt="Sri Gokilaa Crackers" style={styles.storyImage} />
    {/* Soft Glow Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 3,
        background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)",
        opacity: 0.3,
        mixBlendMode: "screen",
      }}
    />
  </div>
</div>
{/* Statistics Section */}
<div 
  style={styles.statsSection}
  className="stats-section-mobile"
>
  <h2 
    style={styles.statsTitle}
    className="stats-title-mobile"
  >
    Our Impact
  </h2>
  
 <div style={styles.statsContainer} className="stats-container-mobile">
  <div style={styles.squareCard} className="square-card-mobile">
    <div style={styles.squareNumber} className="square-number-mobile">
      200+
    </div>
    <div style={styles.squareLabel} className="square-label-mobile">
      Products
    </div>
  </div>

  <div style={styles.squareCard} className="square-card-mobile">
    <div style={styles.squareNumber} className="square-number-mobile">
      500+
    </div>
    <div style={styles.squareLabel} className="square-label-mobile">
      Happy Clients
    </div>
  </div>

  <div style={styles.squareCard} className="square-card-mobile">
    <div style={styles.squareNumber} className="square-number-mobile">
      100%
    </div>
    <div style={styles.squareLabel} className="square-label-mobile">
      Satisfaction
    </div>
  </div>
</div>
</div>

           {/* Why We're Different Section */}
<div style={styles.featuresSection}>
  <h2 style={styles.featuresTitle}>Why We're Different</h2>
  
  <div style={styles.featuresGrid}>
    {featuresData.map((feature, index) => (
      <div key={index} style={styles.featureCard}>
        <div style={styles.featureIcon}>{feature.icon}</div>
        <h3 style={styles.featureTitle}>{feature.title}</h3>
        <p style={styles.featureDescription}>{feature.frontDesc}</p>
      </div>
    ))}
  </div>
</div>
            {/* Bottom Wave Section */}
            <div style={styles.bottomWave}>
              <h2 
                style={styles.waveTitle}
                className="wave-title-mobile"
              >
                Join Our Celebration
              </h2>
              <p 
                style={styles.waveText}
                className="wave-text-mobile"
              >
                Experience the magic of festivals with Sri Gokilaa Crackers. Every purchase is a 
                step toward creating unforgettable moments. Let's light up the sky together and 
                make every occasion truly spectacular!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;