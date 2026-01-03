import React from "react"
import "./Hero.css"

/* HERO GRID IMAGES */
import { FaArrowRight } from "react-icons/fa";
import img1 from "../images/portrait-business-person-work.jpg"
import img2 from "../images/File ITR for Salary and Capital Gain.jpg"
import img3 from "../images/22.jpg"
import img4 from "../images/30 Incredible Stay-at-Home Job Options for Parents.jpg"
import img5 from "../images/AI (1).jpg"
import img6 from "../images/AI & Automation.jpg"

/* AVATARS */
import avatar1 from "../images/hero1.jpeg"
import avatar2 from "../images/hero2.jpeg"
import avatar3 from "../images/hero3.jpeg"
import avatar4 from "../images/hero4.jpeg"

const Hero = () => {
  return (
    <section id="home" className="hero animate-enter">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">
          <span className="hero-tag">// Available For Projects //</span>

          <h1 className="hero-title">
            Powering Business Growth Through <span className="highlight">Web & Mobile Innovation</span>
            {/* <br /> */}
          </h1>

          <p className="hero-description">
            Building scalable, high-performance web applications for modern businesses.
Designing intuitive and secure mobile apps for iOS and Android platforms.
Empowering businesses to grow through reliable web and mobile development.
          </p>

          <div className="hero-buttons">
  <button
    className="btn-secondary"
    onClick={() => {
      const el = document.getElementById("contact");
      if (!el) return;

      const headerOffset = 120; // height of fixed header
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }}
  >
    Book Free Call
    <FaArrowRight className="btn-arrow" />
  </button>
</div>

          <div className="hero-social-proof">
            <div className="avatars">
              <img src={avatar1} alt="Client 1" className="avatar" />
              <img src={avatar2} alt="Client 2" className="avatar" />
              <img src={avatar3} alt="Client 3" className="avatar" />
              <img src={avatar4} alt="Client 4" className="avatar" />
            </div>

            <div>
              <div className="stars">★★★★★</div>
              <p className="trust-text">Trusted by 50+ businesses</p>
              <p className="trust-subtext">
                Delivering scalable, reliable, and future-ready solutions.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – IMAGE GRID */}
        <div className="hero-grid">
          <div className="grid-column column-up">
            {[img1, img2, img3, img1, img2, img3].map((img, i) => (
              <div key={i} className="grid-card">
                <img src={img} alt="" />
              </div>
            ))}
          </div>

          <div className="grid-column column-down">
            {[img4, img5, img6, img4, img5, img6].map((img, i) => (
              <div key={i} className="grid-card">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
