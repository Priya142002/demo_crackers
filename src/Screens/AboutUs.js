import React, { useState, useEffect } from "react";
import Header from "./HeaderLayouts";
import Footer from "./FooterLayouts";
import productimage from "../assets/fire-cracker.png";
import happyclient from "../assets/happyClient.png";
import customer from "../assets/Customer.png";
import backgroundimg from "../assets/bgimg.jpg";

const styles = {
  aboutUsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
  },

  // Hero section
  heroSection: {
    width: "100%",
    height: "260px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  heroTitle: {
    color: "white",
    fontSize: "2.8rem",
    fontWeight: "700",
    letterSpacing: "1px",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    textAlign: "center",
    padding: "0 20px",
  },

  // Main content container
contentContainer: {
    width: "100%",
    maxWidth: "1200px",           // Max width for desktop
    margin: "0 auto",             // ← This centers it
    padding: "40px 40px",         // Equal left/right padding
    position: "relative",
    zIndex: 2,
  },

  // About text container with yellow theme
  aboutTextContainer: {
    width: "100%",
    backgroundColor: "#FFF9E6",
    borderRadius: "12px",
    padding: "40px",
    boxShadow: "0 8px 25px rgba(255, 195, 0, 0.2)",
    border: "1px solid #FFE082",
    marginBottom: "60px",
    maxWidth: "1000px",           // Limit width inside
    margin: "0 auto",             // Centered
  },

  aboutText: {
    fontSize: "1.15rem",
    lineHeight: "1.9",
    color: "#333",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "900px",
  },

  // Achievements section with gradient background
achievementsSection: {
  width: "100%",
  margin: "40px auto",           // ← Centers the block horizontally
  textAlign: "center",
  background: "linear-gradient(135deg, #FF6B6B, #FF8E53, #FFC107, #FFD166)",
  borderRadius: "12px",
  padding: "10px 20px",          // ← Equal left/right padding
  boxShadow: "0 10px 30px rgba(255, 107, 107, 0.3)",
  maxWidth: "1200px",            // Prevents stretching
  boxSizing: "border-box",       // Ensures padding is included in width
},


  achievementsHeading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "white",
    marginBottom: "40px",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
  },

  achievementsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "30px",
  },

  achievementCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "30px",
    transition: "all 0.3s ease",
    textAlign: "center",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  achievementIcon: {
    width: "70px",
    height: "70px",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  achievementNumber: {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#FF6B6B",
    margin: "0 0 10px 0",
    background: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  achievementLabel: {
    fontSize: "1.2rem",
    color: "#555",
    fontWeight: "600",
  },

featuresSection: {
  width: "100%",
  maxWidth: "1200px",            // Limit max width
  margin: "60px auto",           // ← Centers horizontally with equal left/right
  backgroundColor: "#f8f9fa",
  padding: "10px 20px",          // ← Equal left/right padding (40px)
  borderRadius: "12px",
  boxSizing: "border-box",       // Ensures padding is included in width
},

 featuresHeading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#d35400",
    marginBottom: "40px",
    textAlign: "center",
    position: "relative",
  },

  featuresHeadingUnderline: {
    content: '""',
    position: "absolute",
    width: "80px",
    height: "4px",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "linear-gradient(90deg, #FF6B35, #F8B500)",
    borderRadius: "2px",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",             // Centered
  },

  featureCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    background: "linear-gradient(135deg, #B8860B, #DAA520, #FFD700, #FFEC8B)",
  },

   featureIcon: {
    width: "60px",
    height: "60px",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, #FF6B35, #F8B500)",
    borderRadius: "50%",
    fontSize: "1.8rem",
    color: "#FF8F00",
  },

featureTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#333",
  },

 featureText: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
  },
};

const mobileStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 195, 0, 0.2);
  }

  .achievement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.2rem;
    }

    .about-text-container {
      padding: 30px;
    }

    .achievements-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }

    .features-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }

    .content-container {
      padding: 30px 15px;
    }

    .achievements-heading {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .about-text-container {
      padding: 25px 20px;
    }

    .about-text {
      font-size: 1rem;
    }

    .achievement-card {
      padding: 25px 20px;
    }

    .feature-card {
      padding: 20px 15px;
    }

    .achievement-icon {
      width: 60px;
      height: 60px;
    }

    .achievement-number {
      font-size: 2.2rem;
    }
  }
`;

const Aboutus = () => {
  // Add mobile styles to document head
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

  return (
    <>
      <Header />

      <div style={styles.aboutUsContainer}>
        {/* Hero section */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>About Demo Crackers</h1>
        </div>

        {/* Main content container */}
        <div style={styles.contentContainer}>
          {/* About text container */}
          <div style={styles.aboutTextContainer} className="about-text-container">
            <div style={styles.aboutText} className="about-text">
              <p>
                Demo Crackers is the most trusted and reliable website for online crackers shopping in India. We are happy to deliver the best quality crackers at the best price. We sell different varieties of conventional crackers and fancy novel crackers. Every year, new varieties of crackers are introduced for our online customers. We serve our clients faster and better every time with our 24/7 online support.
              </p>
              <p>
                Customer satisfaction is our priority and we don't compromise on our quality. We follow all safety standards from packing to delivery. Celebrate every special occasion with our wide range of crackers and spread happiness around you!
              </p>
            </div>
          </div>

          {/* Achievements section */}
          <div style={styles.achievementsSection} className="achievements-section">
            <h2 style={styles.achievementsHeading} className="achievements-heading">Our Achievements</h2>
            <div style={styles.achievementsGrid} className="achievements-grid">
              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon}>
                  <img src={productimage} alt="Products" width="35" />
                </div>
                <h3 style={styles.achievementNumber}>200+</h3>
                <p style={styles.achievementLabel}>Quality Products</p>
              </div>

              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon}>
                  <img src={happyclient} alt="Happy Clients" width="35" />
                </div>
                <h3 style={styles.achievementNumber}>500+</h3>
                <p style={styles.achievementLabel}>Satisfied Customers</p>
              </div>

              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon}>
                  <img src={customer} alt="Customer Satisfaction" width="35" />
                </div>
                <h3 style={styles.achievementNumber}>100%</h3>
                <p style={styles.achievementLabel}>Success Rate</p>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div style={styles.featuresSection}>
            <h2 style={styles.featuresHeading}>Why Choose Us</h2>
            <div style={styles.featuresGrid} className="features-grid">
              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon}>📦</div>
                <h3 style={styles.featureTitle}>Premium Packaging</h3>
                <p style={styles.featureText}>
                  Each cracker is carefully wrapped and tested for maximum safety during celebrations.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon}>🎧</div>
                <h3 style={styles.featureTitle}>24/7 Support</h3>
                <p style={styles.featureText}>
                  Our expert team provides round-the-clock assistance for a seamless shopping experience.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon}>🚚</div>
                <h3 style={styles.featureTitle}>Fast Delivery</h3>
                <p style={styles.featureText}>
                  Get your crackers delivered within 5 days anywhere in India with our express network.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon}>💳</div>
                <h3 style={styles.featureTitle}>Secure Payments</h3>
                <p style={styles.featureText}>
                  Multiple payment options with bank-level security to protect your financial information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;