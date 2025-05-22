import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] cursor-grab rounded-lg shadow-lg"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      alt="Project preview"
    />
  ) : (
    <motion.div
      className="absolute px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg text-center rounded-xl ring ring-gray-700/50 font-medium bg-storm/90 backdrop-blur-sm w-[280px] sm:w-[320px] md:w-[360px] cursor-grab shadow-lg"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
