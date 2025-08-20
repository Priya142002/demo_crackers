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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
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
    maxWidth: "1000px",
    margin: "0 auto 60px auto",
    boxSizing: "border-box",
  },

  aboutText: {
    fontSize: "1.15rem",
    lineHeight: "1.9",
    color: "#333",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "900px",
  },

  aboutTextParagraph: {
    marginBottom: "20px",
    display: "block",
  },

  // Achievements section with gradient background
  achievementsSection: {
    width: "100%",
    margin: "40px auto",
    textAlign: "center",
    background: "linear-gradient(135deg, #FF6B6B, #FF8E53, #FFC107, #FFD166)",
    borderRadius: "12px",
    padding: "40px 20px",
    boxShadow: "0 10px 30px rgba(255, 107, 107, 0.3)",
    maxWidth: "1200px",
    boxSizing: "border-box",
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
    height: "50px",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  achievementNumber: {
    fontSize: "2.3rem",
    fontWeight: "700",
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
    maxWidth: "1200px",
    margin: "60px auto",
    backgroundColor: "#f8f9fa",
    padding: "40px 20px",
    borderRadius: "12px",
    boxSizing: "border-box",
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
    margin: "0 auto",
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

// Comprehensive mobile styles with proper CSS
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

  /* Large tablets and small desktops */
  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 25px !important;
    }
    
    .content-container {
      padding: 35px 25px !important;
    }
    
    .about-text-container {
      padding: 35px !important;
    }
  }

  /* Tablets */
  @media (max-width: 768px) {
    .hero-section {
      height: 200px !important;
    }
    
    .hero-title {
      font-size: 2.2rem !important;
      padding: 0 15px !important;
    }

    .content-container {
      padding: 30px 15px !important;
    }

    .about-text-container {
      padding: 30px 25px !important;
      margin-bottom: 40px !important;
    }
    
    .about-text {
      font-size: 1.1rem !important;
    }
    
    .about-text p {
      margin-bottom: 20px !important;
      text-align: justify !important;
      display: block !important;
    }
    
    .about-text-container .about-text p {
      margin-bottom: 25px !important;
      padding-bottom: 10px !important;
    }

    .achievements-section {
      margin: 30px auto !important;
      padding: 35px 15px !important;
    }

    .achievements-heading {
      font-size: 2.2rem !important;
      margin-bottom: 30px !important;
    }

    .achievements-grid {
      grid-template-columns: 1fr !important;
      gap: 25px !important;
      max-width: 400px !important;
      margin: 0 auto !important;
    }

    .achievement-card {
      padding: 25px !important;
    }

    .features-section {
      margin: 40px auto !important;
      padding: 35px 15px !important;
    }
    
    .features-heading {
      font-size: 2.2rem !important;
      margin-bottom: 30px !important;
    }

    .features-grid {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
      max-width: 400px !important;
      margin: 0 auto !important;
    }

    .feature-card {
      padding: 25px 20px !important;
    }
  }

  /* Mobile phones */
  @media (max-width: 480px) {
    .hero-section {
      height: 180px !important;
    }
    
    .hero-title {
      font-size: 1.8rem !important;
      padding: 0 10px !important;
    }

    .content-container {
      padding: 20px 10px !important;
    }

    .about-text-container {
      padding: 25px 20px !important;
      margin-bottom: 30px !important;
      border-radius: 8px !important;
    }

    .about-text {
      font-size: 1rem !important;
      line-height: 1.7 !important;
    }
    
    .about-text p {
      margin-bottom: 18px !important;
      text-align: justify !important;
      display: block !important;
    }
    
    .about-text-container .about-text p {
      margin-bottom: 20px !important;
      padding-bottom: 8px !important;
    }

    .achievements-section {
      margin: 20px auto !important;
      padding: 30px 10px !important;
      border-radius: 8px !important;
    }

    .achievements-heading {
      font-size: 1.9rem !important;
      margin-bottom: 25px !important;
    }

    .achievements-grid {
      gap: 20px !important;
      max-width: 320px !important;
    }

    .achievement-card {
      padding: 20px 15px !important;
      border-radius: 8px !important;
    }

    .achievement-icon {
      width: 60px !important;
      height: 60px !important;
      margin-bottom: 15px !important;
    }

    .achievement-number {
      font-size: 2rem !important;
    }

    .achievement-label {
      font-size: 1.1rem !important;
    }

    .features-section {
      margin: 30px auto !important;
      padding: 30px 10px !important;
      border-radius: 8px !important;
    }

    .features-heading {
      font-size: 1.9rem !important;
      margin-bottom: 25px !important;
    }

    .features-grid {
      gap: 15px !important;
      max-width: 320px !important;
    }

    .feature-card {
      padding: 20px 15px !important;
      border-radius: 8px !important;
    }

    .feature-icon {
      width: 50px !important;
      height: 50px !important;
      font-size: 1.5rem !important;
      margin-bottom: 15px !important;
    }

    .feature-title {
      font-size: 1.2rem !important;
      margin-bottom: 12px !important;
    }

    .feature-text {
      font-size: 0.95rem !important;
      line-height: 1.5 !important;
    }
  }

  /* Extra small phones */
  @media (max-width: 360px) {
    .hero-title {
      font-size: 1.6rem !important;
    }

    .achievements-heading,
    .features-heading {
      font-size: 1.7rem !important;
    }

    .about-text-container,
    .achievements-section,
    .features-section {
      margin-left: 5px !important;
      margin-right: 5px !important;
    }

    .about-text p {
      margin-bottom: 15px !important;
      text-align: justify !important;
    }
    
    .about-text-container .about-text p {
      margin-bottom: 18px !important;
      padding-bottom: 5px !important;
      display: block !important;
    }

    .achievements-grid,
    .features-grid {
      max-width: 280px !important;
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
        <div style={styles.heroSection} className="hero-section">
          <h1 style={styles.heroTitle} className="hero-title">About Demo Crackers</h1>
        </div>

        {/* Main content container */}
        <div style={styles.contentContainer} className="content-container">
          {/* About text container */}
          <div style={styles.aboutTextContainer} className="about-text-container">
            <div style={styles.aboutText} className="about-text">
              <p style={styles.aboutTextParagraph}>
                Demo Crackers is the most trusted and reliable website for online crackers shopping in India. We are happy to deliver the best quality crackers at the best price. We sell different varieties of conventional crackers and fancy novel crackers. Every year, new varieties of crackers are introduced for our online customers. We serve our clients faster and better every time with our 24/7 online support.
              </p>
              <p style={styles.aboutTextParagraph}>
                Customer satisfaction is our priority and we don't compromise on our quality. We follow all safety standards from packing to delivery. Celebrate every special occasion with our wide range of crackers and spread happiness around you!
              </p>
            </div>
          </div>

          {/* Achievements section */}
          <div style={styles.achievementsSection} className="achievements-section">
            <h2 style={styles.achievementsHeading} className="achievements-heading">Our Achievements</h2>
            <div style={styles.achievementsGrid} className="achievements-grid">
              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon} className="achievement-icon">
                  <img src={productimage} alt="Products" width="35" />
                </div>
                <h3 style={styles.achievementNumber} className="achievement-number">200+</h3>
                <p style={styles.achievementLabel} className="achievement-label">Quality Products</p>
              </div>

              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon} className="achievement-icon">
                  <img src={happyclient} alt="Happy Clients" width="35" />
                </div>
                <h3 style={styles.achievementNumber} className="achievement-number">500+</h3>
                <p style={styles.achievementLabel} className="achievement-label">Satisfied Customers</p>
              </div>

              <div style={styles.achievementCard} className="achievement-card">
                <div style={styles.achievementIcon} className="achievement-icon">
                  <img src={customer} alt="Customer Satisfaction" width="35" />
                </div>
                <h3 style={styles.achievementNumber} className="achievement-number">100%</h3>
                <p style={styles.achievementLabel} className="achievement-label">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div style={styles.featuresSection} className="features-section">
            <h2 style={styles.featuresHeading} className="features-heading">Why Choose Us</h2>
            <div style={styles.featuresGrid} className="features-grid">
              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon} className="feature-icon">📦</div>
                <h3 style={styles.featureTitle} className="feature-title">Premium Packaging</h3>
                <p style={styles.featureText} className="feature-text">
                  Each cracker is carefully wrapped and tested for maximum safety during celebrations.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon} className="feature-icon">🎧</div>
                <h3 style={styles.featureTitle} className="feature-title">24/7 Support</h3>
                <p style={styles.featureText} className="feature-text">
                  Our expert team provides round-the-clock assistance for a seamless shopping experience.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon} className="feature-icon">🚚</div>
                <h3 style={styles.featureTitle} className="feature-title">Fast Delivery</h3>
                <p style={styles.featureText} className="feature-text">
                  Get your crackers delivered within 5 days anywhere in India with our express network.
                </p>
              </div>

              <div style={styles.featureCard} className="feature-card">
                <div style={styles.featureIcon} className="feature-icon">💳</div>
                <h3 style={styles.featureTitle} className="feature-title">Secure Payments</h3>
                <p style={styles.featureText} className="feature-text">
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