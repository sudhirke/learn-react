import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  //record any change in form input and store with formData
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //reset form status and values
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      //send email using emailjs
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      //update form status on success
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      //reset form value
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "An error occurred. Please try again.",
      });
      console.error("! Failed to send message. Please try again.", error);
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="section-title"
        viewport={{ once: true }}
      >
        Get in touch...
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your name.."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleChange}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your email.."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleChange}
          />

          <motion.textarea
            name="message"
            placeholder="How can I help you.."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
