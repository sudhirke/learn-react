import { motion } from "framer-motion";
function Footer() {
  return (
    <>
      <motion.div
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        &copy; 2025 SPXPERT Solutions OPC Private Limited. All rights reserved
      </motion.div>
    </>
  );
}

export default Footer;
