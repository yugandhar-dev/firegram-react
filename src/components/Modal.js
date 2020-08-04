import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
          <motion.img src={selectedImg} alt="enlarged pic" />
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Modal;
