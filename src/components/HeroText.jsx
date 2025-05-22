import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 mt-20 text-center md:mt-40 md:text-left">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        Hi I'm Lyle
      </motion.h1>
      <div className="flex flex-col items-center md:items-start">
        <motion.p
          className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A Developer <br className="hidden sm:block" /> Dedicated to Crafting
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
          className="mt-2 sm:mt-4"
        >
          <FlipWords
            words={words}
            className="font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          />
        </motion.div>
        <motion.p
          className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Solutions
        </motion.p>
        <motion.a
          href="/assets/LYLE CV.pdf"
          download
          className="mt-6 sm:mt-8 text-base sm:text-lg text-neutral-300 hover:text-white transition-colors duration-300 border-b border-neutral-300 hover:border-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;
