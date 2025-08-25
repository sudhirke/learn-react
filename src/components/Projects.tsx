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
        My Projects
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
          <h3>Project 1</h3>
          <p>A brief description of Project One.</p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>SPFx</span>
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
          <h3>Project 2</h3>
          <p>A brief description of Project One.</p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>SPFx</span>
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
          <h3>Project 3</h3>
          <p>A brief description of Project One.</p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>SPFx</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
