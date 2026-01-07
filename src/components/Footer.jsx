import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

/* ===============================
   ANIMATION VARIANTS
================================ */

const footerButtonsVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ===============================
   FOOTER COMPONENT
================================ */

const Footer = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { label: "Services", id: "services" },
    { label: "Benefits", id: "benefits" },
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQs", id: "faqs" },
  ];

  const resources = ["Privacy Policy", "Terms of Service", "404 Page"];
  const socials = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/welfare-healthtech-a9703038a",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/welfarehealthtech?igsh=cGl1cGd2bDhjZWt5",
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  /* 🔥 CORRECT NAV HANDLER */
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Route first, scroll later (handled in Home.jsx)
      navigate("/", { state: { scrollTarget: id } });
    } else {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 120;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ================= CONTENT ================= */}
        <div className="footer-content">

          {/* NEWSLETTER */}
          <div className="footer-section newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-description">
              "We deliver scalable software, web, and digital solutions that help businesses innovate, optimize operations, and grow securely in a fast-changing tech landscape."
            </p>
            <p><b>Address:</b> Gf. 379-1, SS pushpam Complex, Bharadhi street, Opp. Gowri theatre, 5-Roads, Salem – 636 004</p>
            <p><b>Phone:</b>+91 96003 63797, +91 93443 54654</p>
            <p><b>Email:</b> info@welfarehealthtechslm.com</p>
          </div>

          {/* NAVIGATION (FIXED) */}
          <div className="footer-section navigation">
            <h4 className="footer-label">/Navigation</h4>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    className="footer-link-btn"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}

          {/* SOCIALS */}
          <div className="footer-section social">
            <h4 className="footer-label">/Socials</h4>
            <ul className="footer-links">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-btn"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            ©2025 Welfare Healthtech. All rights reserved.
          </p>

          {/* FIXED BUTTONS */}
          <motion.div
            className="footer-buttons"
            variants={footerButtonsVariants}
            initial="hidden"
            animate="visible"
            key={`footer-buttons-${location.pathname}`}
          >
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


