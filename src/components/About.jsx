import React from "react";
import "./About.css";

/* ROLE IMAGES */
import techLead from "../images/cc1.jpeg";
import quality from "../images/cc2.jpeg";
import uiux from "../images/cc3.jpeg";
import tester from "../images/cc4.jpeg";
import frontend from "../images/cc5.jpeg";
import backend from "../images/cc6.jpeg";
import mobile from "../images/cc7.jpeg";
import devops from "../images/cc8.jpeg";

/* ICONS */
import { CiPen } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { FaBullseye, FaEye } from "react-icons/fa";

const About = () => {
  const roles = [
    { title: "Technology Lead", image: techLead, desc: "Leading technical architecture, innovation, and technology strategy across digital platforms." },
    { title: "Testing & Quality Assurance", image: quality, desc: "Ensuring high standards of quality, compliance, and performance across all deliverables." },
    { title: "UI / UX Designer", image: uiux, desc: "Designing intuitive, engaging, and user-centric experiences for web and mobile products." },
    {
      title: "Marketing Executive",
      image: tester,
      desc: "Planning and executing marketing strategies to promote products, strengthen brand presence, and drive business growth."
    },
    { title: "Frontend Developer", image: frontend, desc: "Building responsive, high-performance interfaces using modern frontend technologies." },
    { title: "Backend Developer", image: backend, desc: "Developing scalable APIs, databases, and server-side logic for enterprise systems." },
    { title: "Android / iOS Developer", image: mobile, desc: "Creating robust mobile applications optimized for Android and iOS platforms." },
    { title: "DevOps Developer", image: devops, desc: "Managing cloud infrastructure, CI/CD pipelines, and deployment automation." }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* HEADER */}
        <div className="section-header">
          <div className="section-tag">// About Us //</div>
          <h2 className="section-title">Welfare Healthtech</h2>
          <p className="section-description">
            "We provide professional web development, Android app development, medical coding, and a wide range of IT services tailored to business needs. Our solutions are built with a strong focus on performance, security, scalability, and industry compliance."
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="mv-grid">
          <div className="mv-card animate-card">
            <div className="mv-icon">
              <CiPen />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver reliable and scalable IT solutions that empower businesses to operate with confidence. We specialize in building secure digital platforms, high-performance web and mobile applications, and future-ready technology strategies that enhance efficiency, foster innovation, and support sustainable long-term growth.
            </p>
          </div>

          <div className="mv-card animate-card">
            <div className="mv-icon">
              <TfiWorld />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a globally trusted technology partner providing innovative, secure, and intelligent digital services that empower businesses to grow and adapt in a rapidly evolving digital landscape. We strive to deliver scalable solutions, modern platforms, and forward-thinking strategies that drive efficiency, resilience, and long-term success for organizations worldwide.
            </p>
          </div>
        </div>

        {/* ROLES */}
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div key={index} className="role-card animate-card">
              <div className="role-circle">
                <img src={role.image} alt={role.title} />
              </div>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-desc">{role.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
