import  { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [error, setError] = useState(false); // error state

  const API_URL = "/api/sendMessage";
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    // message to telegram and send email

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: templateParams.name,
          email: templateParams.email,
          phone: formData.get("phone"),
          message: templateParams.message,
        }),
      });
  
      if (!response.ok) throw new Error("Telegram failed");
  
      // 2️⃣ Send confirmation email to VISITOR
      await emailjs.send(
        "service_d2ar56j",
        "template_9kypzmr",
        templateParams,
        "xhI3_R7hCRalnTxoc"
      );
  
      setToast(true);
      e.target.reset();
      setTimeout(() => setToast(false), 3500);
  
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 3500);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      {toast && (
        <div className="toast-success">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {error && (
        <div className="toast-error">
          ❌ Failed to send message. Please try again.
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
            <a href="https://www.linkedin.com/in/teshome-worku-017834392" target="_blank"><FaLinkedin /></a>
            <a href="https://t.me/Username_1251" target="_blank"><FaTelegram /></a>
            <a href="https://web.facebook.com/tesheTech" target="_blank"><FaFacebook /></a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="tel" placeholder="Your Phone Number " name="phone" required />
          <textarea placeholder="Your Message" rows="5" name="message" required></textarea>
          <button 
           type="submit"
           disabled={loading}>
           {loading ? <div className="spinner"></div> : <span>Send Message</span>}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;