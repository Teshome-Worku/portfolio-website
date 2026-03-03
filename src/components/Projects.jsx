import "../css/projects.css";
import lemiImg from "../assets/images/lemi.png";
import inventoryImg from "../assets/images/inventory.jpg";
import appointmentImg from "../assets/images/appointment.jpg";
import astuComplaintImg from "../assets/images/astu-tracker.png";
import mamiFoodImg from "../assets/images/mami-food.png";

const projects = [
  {
    title: "ASTU Complaint Tracker - Campus Complaint Management System",
    description:
      "A full-stack campus complaint submission and tracking system that allows students to file complaints and monitor their status in real time. Designed to improve transparency and streamline communication within the university.",
    tech: ["React", "Node.js", "Express", "REST API", "Vercel"],
    image: astuComplaintImg,
    live: "https://astu-complaint-tracker.vercel.app/",
    github: "https://github.com/Teshome-Worku/astu-complaint-tracker",
    featured: true,
  },
  
  {
    title: "Mami Food – Online Ordering & Tracking System ",
    description:
      "A full-stack food ordering web application that allows users to browse menu items, add to cart, place orders, and track their order status. ",
    tech: ["React","Node.js","Express","MongoDB","REST API", "Tailwind CSS"],
    image: mamiFoodImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/food-order-frontend",
    featured: true,
  },
  
  {
    title: "Inventory Management System",
    description:
      "A modern inventory management system built with React and IndexedDB for offline data storage and fast performance.",
    tech: ["React", "IndexedDB"],
    image: inventoryImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/inventory-management-system",
    featured: false,
  },
  {
    title: "Lemi Fashion - E-commerce Platform",
    description:
      "A fashion e-commerce platform integrated with a Telegram bot to send real-time order notifications to the shop owner.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Telegram API"],
    image: lemiImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/lemi-fashion",
    featured: false,
  },
 
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some of the real-world applications I have built
        </p>

        {/* Featured Projects */}
        <div className="featured-projects">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div className="project-card featured" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="projects-grid">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;