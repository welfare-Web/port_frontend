import React from "react"
import "./Reviews.css"

/* LEFT STATS AVATARS (4) */
import statsAvatar1 from "../images/review1.jpeg"
import statsAvatar2 from "../images/review2.jpeg"
import statsAvatar3 from "../images/review3.jpeg"
import statsAvatar4 from "../images/review4.jpeg"

/* REVIEW CARD AVATARS (4) */
import reviewAvatar1 from "../images/rating1.jpeg"
import reviewAvatar2 from "../images/rating2.jpeg"
import reviewAvatar3 from "../images/rating3.jpeg"
import reviewAvatar4 from "../images/rating4.jpeg"

const Reviews = () => {
  const reviews = [
    {
      rating: "4.6",
      text:
        "Welfare Healthtech delivered reliable and well-structured solutions with excellent communication throughout the project lifecycle.",
      author: "Jared Kim",
      role: "Operations Manager",
      image: reviewAvatar1,
    },
    {
      rating: "4.9",
      text:
        "Their team felt like an extension of our own — from web application development to customer support, everything was handled smoothly.",
      author: "Maya Collins",
      role: "Product Head",
      image: reviewAvatar2,
    },
    {
      rating: "4.5",
      text:
        "The turnaround time and accuracy in medical coding and data processing exceeded our expectations.",
      author: "Jesse Leigh",
      role: "Healthcare Administrator",
      image: reviewAvatar3,
    },
    {
      rating: "4.7",
      text:
        "From UI/UX design to AI-driven solutions, Welfare Healthtech proved to be professional, dependable, and innovative.",
      author: "Benjamin Daul",
      role: "Technology Director",
      image: reviewAvatar4,
    },
  ]

  return (
    <section id="reviews" className="reviews animate-enter">
      <div className="reviews-container">

        {/* HEADER */}
        <div className="section-header">
          <div className="section-tag">// Reviews //</div>
          <div className="section-title-row">
            <h2 className="section-title">Client Success Stories.</h2>
            <p className="section-description">
              "See how Welfare Healthtech helps businesses succeed with technology,
              healthcare, and digital solutions."
            </p>
          </div>
        </div>

        <div className="reviews-content">

          {/* LEFT STATS */}
          <div className="reviews-stats">
            <div className="stats-rating">4.7/5</div>

            <p className="stats-text">
              Trusted delivery across healthcare, technology, and business services.
            </p>

            {/* 4 SEPARATE STATS AVATARS */}
            <div className="stats-avatars">
              <img src={statsAvatar1} alt="" className="avatar" />
              <img src={statsAvatar2} alt="" className="avatar" />
              <img src={statsAvatar3} alt="" className="avatar" />
              <img src={statsAvatar4} alt="" className="avatar" />
            </div>

            <div className="stats-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="stats-trust">Trusted by growing businesses worldwide</p>
            <p className="stats-subtext">CONSISTENT RESULTS — REAL IMPACT.</p>

            <button className="stats-button">Share your experience</button>
          </div>

          {/* RIGHT GRID */}
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-rating">
                  {r.rating} <span>★</span> RATING
                </div>

                <p className="review-text">“{r.text}”</p>

                <div className="review-author">
                  <div className="author-avatar">
                    <img src={r.image} alt={r.author} />
                  </div>
                  <div>
                    <div className="author-name">{r.author}</div>
                    <div className="author-role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews
