import "../css/skills.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJs /> },
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "Tailwind CSS", level: 70, icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: "Node.js", level: 65, icon: <FaNodeJs /> },
    { name: "IndexedDB", level: 60, icon: <FaDatabase /> },
  ],
  tools: [
    { name: "Git", level: 80, icon: <FaGitAlt /> },
    { name: "GitHub", level: 75, icon: <FaGithub /> },
    { name: "Figma", level: 70, icon: <FaFigma /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I use to build modern web applications
      </p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skills-card" key={category}>
            <h3 className="skills-category">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>

            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;