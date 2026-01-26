import "../css/contact.css";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegram, 
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false); // "success" toast state
 
  const API_URL = "/api/sendMessage";
  const submitHandler= async (e)=>{
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

        try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, message }),
        });
    
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        e.target.reset();
        setToast(true);
        setTimeout(() => setToast(false), 3500);
    
        const data = await response.json();
    } catch (error) {
      alert("Something went wrong. Please try again.");
       console.error("Error submitting form:", error);
      }
      finally { 
        setLoading(false);
      }
  }
  return (
    <section id="contact" className="contact-section">
      {toast && (
        <div className="toast-success">
          ✅ Message sent successfully!
        </div>
      )}

      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">
        Let’s build something amazing together 🚀
      </p>

      <div className="contact-container">
        
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out for collaborations, projects, or just simply to say hi.
          </p>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Adama , Ethiopia</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+251 955 800 626</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>teshomeworku96@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-socials">
            <a href="https://github.com/Teshome-Worku" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/teshome-worku-01" target="_blank"><FaLinkedin /></a>
            <a href="https://t.me/Username_1251" target="_blank"><FaTelegram /></a>
            <a href="https://web.facebook.com/tesheTech" target="_blank"><FaFacebook /></a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="tel" placeholder="Your Phone Number eg. +251 9XX XXX XXX" name="phone" required />
          <textarea placeholder="Your Message" rows="5" name="message" required></textarea>
          <button 
           type="submit"
           disabled={loading}>
           {loading ? <span className="spinner"></span> : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;