import { motion } from "framer-motion";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>🙏🏽 Namaste, I am</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Sudhir Kesharwani
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="hero-subtitle">
            Office 365 Solution Architect | SharePoint | SPFx | Full Stack{" "}
          </motion.h2>
          <motion.p variants={fadeInUp} className="hero-description">
            Crafting seamless digital experiences with code and creativity with
            my knowledge and experience of working with enterprise customers.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/sudhirke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </motion.a>
            <motion.a
              href="https://github.com/sudhirke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://github.com/sudhirke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="code-display">
            <SyntaxHighligher
              style={vscDarkPlus}
              language="typescript"
              customStyle={{
                margin: 0,
                borderRadius: "20px",
                height: "100%",
                padding: "2rem",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBotton: "20px",
              }}
            >
              {`const aboutMe:DeveoperProfile = {
                name: "Sudhir Kesharwani",
                codename: "sudhirke-spxpert",
                role: "Office 365 Solution Architect / Power Platform Wizard",
                skills: ["SharePoint", "Power Platform", "SPFx", "React", "Node.js", "Office 365"],
                experience: "22+ years",
                mission: "Empowering businesses with innovative digital solutions.",  
                projects: ["Power Apps Solutions"."SharePoint Portals", "Custom SPFx Web Parts", "Workflows"],
                contact: {
                  email: "info@spxpert.com",
                  linkedin: "linkedin.com/in/sudhirke",
                  github: "github.com/sudhirke"
                }
              };`}
            </SyntaxHighligher>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="card-content">
              <span className="card-icon">👨🏻‍💻</span>
              <span className="card-text">
                Helping my customers bring efficiency to their businesses
                through digital transformation.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
