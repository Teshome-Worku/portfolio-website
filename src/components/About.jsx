import "../css/about.css";
import profileImage from "../assets/images/image.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img src={profileImage} alt="Teshe Profile" />
        </div>

        {/* Right Content */}
        <div className="about-content">
            <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a frontend developer focused on building fast, responsive, and user-friendly web interfaces.
            I enjoy turning ideas into clean and scalable web applications.
            Currently, I’m expanding my skills toward full-stack development and modern UI/UX design.
          </p>

          {/* Tech Stack */}
          <div className="about-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Tailwind CSS</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Figma</span>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div>
              <h3>5+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>Years Learning</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Passion</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;