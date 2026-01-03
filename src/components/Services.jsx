import React, { useState, useEffect } from "react"
import "./Services.css"

/* ✅ FOLDER ICON */
import { FaFolder } from "react-icons/fa6";

/* EXISTING SLIDER IMAGES (UNCHANGED) */
import brand1 from "../images/3 (1).png"
import brand2 from "../images/3 (2).png"
import brand3 from "../images/3 (3).png"

import web1 from "../images/2 (1).png"
import web2 from "../images/2 (2).png"
import web3 from "../images/2 (3).png"

import nocode1 from "../images/1 (1).png"
import nocode2 from "../images/1 (2).png"
import nocode3 from "../images/1 (3).png"

/* 🔥 FOLDER HOVER IMAGES (3 PER CARD) */
import f1 from "../images/folder1.jpeg"
import f2 from "../images/folder2.jpeg"
import f3 from "../images/folder3.jpeg"

import f4 from "../images/folder4.jpeg"
import f5 from "../images/folder5.jpeg"
import f6 from "../images/folder6.jpeg"

import f7 from "../images/folder7.jpeg"
import f8 from "../images/folder8.jpeg"
import f9 from "../images/Dowins.jpg"

const Services = () => {
  const services = [
    {
      title: "Web & Mobile Applications",
      description:
        "Custom web and mobile application development focused on performance, scalability, and user experience.",
      tags: [
        "Web Application",
        "Mobile Application",
        "UI / UX Design",
        "Cloud-Based Development",
      ],
      images: [brand1, brand2, brand3],
      folderImages: [f1, f2, f3],
    },
    {
      title: "Medical coding & Business Process Outsourcing",
      description:
        "Delivering reliable services powered by accurate medical coding and smart technology-driven automation to support operational excellence.",
      tags: [
        "Medical Coding",
        "Data Entry Processing",
        "Telecommunication",
        "Customer Support",
      ],
      images: [web1, web2, web3],
      folderImages: [f4, f5, f6],
    },
    {
      title: "Digital, AI & Support Services",
      description:
        "Intelligent digital solutions driven by AI, secure cloud platforms, telecom expertise, and customer-first support systems.",
      tags: [
        "AI Technologies",
        "AI Cloud & MLOps Services",
        "Machine Learning",
        "Generative AI",
      ],
      images: [nocode1, nocode2, nocode3],
      folderImages: [f7, f8, f9],
    },
  ]

  return (
    <section id="services" className="services animate-enter">
      <div className="services-container">

        {/* ✅ RESTORED HEADER */}
        <div className="section-header">
          <div className="section-tag">// Services //</div>
          <div className="section-title-row">
            <h2 className="section-title">What we do.</h2>
            <p className="section-description">
              "We develop modern web and mobile applications that help businesses build a strong digital presence and operate efficiently."
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ===========================
   SERVICE CARD
=========================== */

const ServiceCard = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === service.images.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [service.images.length])

  return (
    <div className="service-column">

      {/* CARD */}
      <div className="service-card">

        {/* 🔥 FOLDER ICON + HOVER PREVIEW */}
        <div className="folder-wrapper">
          <FaFolder className="folder-icon" />

          {service.folderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`folder-preview fp-${i + 1}`}
            />
          ))}
        </div>

        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>

        <div className="service-tags">
          {service.tags.map((tag, i) => (
            <span key={i} className="service-tag">
              <span className="tag-dot" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* EXISTING SLIDER (UNCHANGED) */}
      {/* EXISTING SLIDER */}
<div className="service-image">
  <div
    className="image-track"
    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
  >
    {service.images.map((img, i) => (
      <img key={i} src={img} alt="" />
    ))}
  </div>

  <div className="image-dots">
    {service.images.map((_, i) => (
      <span
        key={i}
        className={`dot ${i === activeIndex ? "active" : ""}`}
      />
    ))}
  </div>
</div>


    </div>
  )
}

export default Services
