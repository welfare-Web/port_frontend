import React from "react";
import "./Benefits.css";

import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { FiMousePointer } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";

const Benefits = () => {
  const benefits = [
    {
      icon: PiCurrencyDollarBold,
      title: "Transparent Pricing",
      description:
        "Clear and predictable pricing for healthcare, digital, and technology services, giving organizations full cost visibility, budget control, and long-term value.",
    },
    {
      icon: TbActivityHeartbeat,
      title: "Fast & Reliable Delivery",
      description:
        "Efficient turnaround times across web, mobile, medical, and data services, helping businesses move faster, respond quicker, and scale with confidence.",
    },
    {
      icon: FaArrowsRotate,
      title: "Scalable Solutions",
      description:
        "Our services scale with your business, supporting startups, growing teams, and enterprise operations at every stage.",
    },
    {
      icon: FiMousePointer,
      title: "Centralized Management",
      description:
        "Manage applications, data, and workflows through streamlined systems, enabling smoother operations, faster decisions, and better visibility.",
    },
    {
      icon: FiSend,
      title: "Industry-Grade Quality",
      description:
        "High-quality delivery backed by experienced professionals and proven processes, bringing expertise, precision, and accountability to every project.",
    },
    {
      icon: BsGraphUpArrow,
      title: "Smart Problem Solving",
      description:
        "We solve complex business and healthcare challenges using AI-driven insights, transforming data into actionable intelligence.",
    },
  ];

  return (
    <section id="benefits" className="benefits animate-enter">
      <div className="benefits-container">
        <div className="section-header">
          <div className="section-tag">// Benefits //</div>
          <div className="section-title-row">
            <h2 className="section-title">Our Benefits.</h2>
            <p className="section-description">
              "Discover how Welfare Healthtech delivers reliable technology,
              healthcare, and digital solutions with consistency and confidence."
            </p>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-dots">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className={`dot ${dot === 1 ? "active" : ""}`}
                  />
                ))}
              </div>

              {/* ✅ ICON FIX */}
              <div className="benefit-icon">
                <benefit.icon />
              </div>

              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
