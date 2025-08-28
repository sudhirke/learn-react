import { motion } from "framer-motion";

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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Work
      </motion.h2>
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project1.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Security Incident Log</h3>
          <p>
            Centralize system to report security incident and notify team for
            action.
          </p>
          <div className="project-tech">
            <span>Power App</span>
            <span>Power Automate</span>
            <span>SharePoint</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project3.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Project Management</h3>
          <p>
            A project management solution to record and track Projects, Change
            Orders and Issues. Helping my client effectively managing multiple
            electrical contracts.
          </p>
          <div className="project-tech">
            <span>Power Apps</span>
            <span>Power Automate</span>
            <span>SharePoint</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project2.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Vendor Onboarding</h3>
          <p>
            Soltuion to onboard new vendors for business with robust approval
            workflow in the backend. Helping my clients to collaborate with
            vendors effectively.
          </p>
          <div className="project-tech">
            <span>Power App</span>
            <span>Power Automate</span>
            <span>SharePoint</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
