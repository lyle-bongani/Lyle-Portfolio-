import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  sourceCode,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black/80 backdrop-blur-sm">
      <motion.div
        className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] max-w-4xl mx-auto my-8 border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-4 right-4 bg-midnight/80 hover:bg-gray-500/80 transition-colors"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="Close" />
        </button>

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
            {title}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-4 sm:mb-6">
            {description}
          </p>

          {subDescription && (
            <p className="text-sm sm:text-base text-neutral-400 mb-4 sm:mb-6">
              {subDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-storm/50 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm sm:text-base text-center text-white transition-colors rounded-lg bg-royal hover:bg-lavender"
            >
              Live Demo
            </a>
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm sm:text-base text-center text-white transition-colors border rounded-lg border-white/20 hover:bg-white/10"
            >
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
