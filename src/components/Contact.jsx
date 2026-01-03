import React, { useState } from 'react';
import './Contact.css';

import { FiPaperclip } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [showPopup, setShowPopup] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  const API_URL = import.meta.env.VITE_API_URL;
  if (!API_URL) {
    alert("API URL not configured");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    if (data.status === "success") {
      setShowPopup(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      alert(data.message || "Submission failed");
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Server error. Please try again later.",error);
  }
};



  return (
    <section id="contact" className="contact animate-enter">
      {showPopup && (
        <div className="toast toast-success">
          <FiCheckCircle className="toast-icon" />
          <div className="toast-content">
            <strong>Message sent!</strong>
            <span>We’ll contact you shortly.</span>
          </div>
        </div>
      )}
      <div className="contact-container">
        <div className="section-header">
          <div className="section-tag">// Contact //</div>
          <div className="section-title-row">
            <h2 className="section-title">Let’s connect.</h2>
            <p className="section-description">
              "Have a project in mind or need support with technology, design, or healthcare solutions?
              The Welfare Healthtech team is here to help."
            </p>
          </div>
        </div>

        <div className="contact-content">

          {/* CONTACT INFO */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FiPaperclip />
              </div>
              <div className="contact-label">/Talk to our team</div>
              <div className="contact-value">nandhini@welfarehealthtechslm.com</div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <LuPhoneCall />
              </div>

              <div className="contact-label">/Call us</div>
              <div className="contact-value">+91 80568 05416</div>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Your Phone Number"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setFormData({ ...formData, phone: value });
                  }
                }}
              />

            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements — web apps, mobile apps, medical coding, UI/UX, digital marketing, AI solutions, or support services."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Send message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;


