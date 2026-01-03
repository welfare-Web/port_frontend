import { useState } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

/* Header animation */
const headerVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Footer animation */
const footerVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5,  ease: [0.22, 1, 0.36, 1] },
  },
};

/* Page content animation */
const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.4 },
  },
};

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER (menu props preserved) */}
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </motion.div>

      {/* PAGE CONTENT */}
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        style={{ minHeight: "100vh", background: "#F5F5F5" }}
      >
        {children}
      </motion.main>

      {/* FOOTER */}
      <motion.div variants={footerVariants} initial="hidden" animate="visible">
        <Footer />
      </motion.div>

      <CustomCursor />
    </>
  );
}
