import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "./ProjectDetails.css";
import { FiArrowLeft } from "react-icons/fi";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData[slug];
  if (!project) return null;

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="project-details page-enter-up">
      {/* BACK BUTTON */}
      <button className="back-home-btn" onClick={handleBack}>
        <span className="back-icon">
          <FiArrowLeft />
        </span>
        <span className="back-text">BACK TO HOME</span>
      </button>

      {/* HEADER */}
      <h1 className="project-title">{project.title}</h1>
      <p className="project-desc">
        Brand-new solution designed to convert and scale.
      </p>

      {/* META */}
      <div className="project-meta">
        <div>
          <span  className="slash">//</span><span className="text">TOPIC</span>
          <h4>{project.topic}</h4>
        </div>
      </div>

      {/* HERO + CONTENT */}
      <div className="project-hero-image">
        <img src={project.images[0]} alt={project.title} />

        <div className="project-info">
          <div className="info-block">
            <span  className="slash"  style={{ fontSize: "20px"}}>//</span><span className="text" id="txt">OVERVIEW</span>

            {project.content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
