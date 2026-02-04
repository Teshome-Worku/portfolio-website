import "../css/projects.css";
import lemiImg from "../assets/images/lemi.png";
import inventoryImg from "../assets/images/inventory.jpg";
import expenseImg from "../assets/images/expense.jpg";
import appointmentImg from "../assets/images/appointment.jpg";

const projects = [
  {
    title: "Lemi Fashion - E-commerce Platform",
    description:
      "A fashion e-commerce platform integrated with a Telegram bot to send real-time order notifications to the shop owner.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Telegram API"],
    image: lemiImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/lemi-fashion",
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
    featured: true,
  },
  {
    title: "Expense Tracker App",
    description:
      "A React-based expense tracker app that helps users manage and visualize their daily expenses.",
    tech: ["React", "CSS"],
    image: expenseImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/expense-tracker-app",
    featured: false,
  },
  {
    title: "Appointment Booking System ",
    description:
      "A booking system that allows users to schedule appointments with services. ",
    tech: ["React","Tailwind CSS"],
    image: appointmentImg,
    live: "#",
    github: "https://github.com/Teshome-Worku/appointment-booking-system",
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