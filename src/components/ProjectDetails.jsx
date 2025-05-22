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
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-2 right-2 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-4 h-4 sm:w-6 sm:h-6" alt="close" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-4 sm:p-5">
          <h5 className="mb-2 text-xl font-bold text-white sm:text-2xl">{title}</h5>
          <p className="mb-3 text-sm font-normal text-neutral-400 sm:text-base">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-sm font-normal text-neutral-400 sm:text-base">{subDesc}</p>
          ))}
          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg hover-animation"
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {sourceCode && (
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer hover:bg-neutral-800 sm:text-base"
                >
                  View Source Code{" "}
                  <img src="/assets/logos/github.svg" className="w-4 h-4 sm:w-5 sm:h-5 invert" alt="github" />
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer hover:bg-neutral-800 sm:text-base"
                >
                  View Project{" "}
                  <img src="/assets/arrow-right.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="arrow" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
