import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import "./Work.css";

/* LOCAL IMAGES */
import work1 from "../images/WebDevelopment.jpg";
import work2 from "../images/Mobile App UI.png";
import work3 from "../images/Publishing Services 1.png";
import work4 from "../images/Python.jpg";
import work5 from "../images/Branding & Logo Design.png";
import work6 from "../images/BPO.png";

const Work = () => {
  const navigate = useNavigate();

  const projects = [
  {
    title: "Full Stack Development",
    category: "Website Design & Development",
    image: work1,
    slug: "full-stack-website-development",
  },
  {
    title: "Mobile App Development",
    category: "Android & iOS platforms",
    image: work2,
    slug: "mobile-app-development",
  },
  {
    title: "Digital Publishing Services",
    category: "ePub Creation & XML / HTML Conversion",
    image: work3,
    slug: "digital-publishing-services",
  },
  {
    title: "Python Development",
    category: "Automation & Scripting",
    image: work4,
    slug: "python-web-application-development",
  },
  {
    title: "Digital Marketing",
    category: "Search Engine Optimization & Social Media Marketing",
    image: work5,
    slug: "digital-marketing-services",
  },
  {
    title: "Business Process Outsourcing",
    category: "Customer Support Services & Business Process Automation",
    image: work6,
    slug: "business-process-outsourcing",
  },
];


  return (
    <section id="work" className="work animate-enter">
      <div className="work-container">
        <div className="section-header">
          <div className="section-tag">// Work //</div>
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-description">
            "We provide complete digital services—from UI/UX and frontend to backend, mobile, QA, DevOps, and marketing—helping businesses build, scale, and succeed with confidence."
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.slug} className="work-card">
              <div className="work-image">
                <img src={project.image} alt={project.title} />

                {/* <div className="work-overlay">
                  <button
                    className="work-overlay-content work-button"
                    onClick={() => navigate(`/work/${project.slug}`)}
                  >
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-category">{project.category}</p>
                  </button>
                </div> */}

                <div className="work-card-footer">
                  <button
                    className="work-footer-button"
                    onClick={() => navigate(`/work/${project.slug}`)}
                  >
                    <div className="work-footer-text">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                    <div className="work-footer-icon"><GoArrowUpRight /></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
