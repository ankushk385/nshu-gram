import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
            className="image-wrap"
            onClick={() => {
              setSelectedImage(doc.url);
            }}
          >
            <motion.img
              src={doc.url}
              alt="sup kanye"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}{" "}
    </div>
  );
};

export default ImageGrid;
