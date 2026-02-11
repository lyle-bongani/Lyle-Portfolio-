import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Alert from "./Alert";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  sourceCode,
  isPrivate,
  closeModal,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const originalBodyStyle = window.getComputedStyle(document.body).overflow;
    const originalHtmlStyle = window.getComputedStyle(document.documentElement).overflow;
    
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalBodyStyle;
      document.documentElement.style.overflow = originalHtmlStyle;
    };
  }, []);

  const handleSourceCodeClick = (e) => {
    if (isPrivate) {
      e.preventDefault();
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-4xl border shadow-2xl rounded-3xl bg-gradient-to-br from-midnight via-navy to-midnight border-white/10 flex flex-col overflow-hidden max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-20 p-2.5 rounded-full top-4 right-4 bg-midnight/60 hover:bg-midnight border border-white/10 backdrop-blur-md transition-all duration-300 group"
          aria-label="Close"
        >
          <img src="assets/close.svg" className="w-5 h-5 opacity-70 group-hover:opacity-100" alt="close" />
        </button>

        {/* Top: Visual Container */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden border-b border-white/5 bg-midnight/30 flex items-center justify-center shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Bottom: Info Container */}
        <div className="w-full p-8 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            <h5 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 sm:text-4xl leading-tight">
              {title}
            </h5>
            
            <div className="space-y-4">
              <p className="text-lg font-light text-neutral-300 leading-relaxed italic border-l-4 border-indigo-500/50 pl-5">
                {description}
              </p>
              
              <div className="grid gap-3 opacity-90">
                {subDescription.map((subDesc, index) => (
                  <p
                    key={index}
                    className="text-sm font-normal text-neutral-400 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0 mt-2" />
                    {subDesc}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-4">
                  {tags.map((tag) => (
                    <div key={tag.id} className="relative group">
                      <img
                        src={tag.path}
                        alt={tag.name}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/[0.03] border border-white/5 p-2 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.07]"
                      />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-midnight/90 text-white text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md scale-90 group-hover:scale-100">
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row md:self-end">
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] group"
                  >
                    Live Site
                    <img
                      src="/assets/arrow-right.svg"
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      alt="arrow"
                    />
                  </a>
                )}
                {sourceCode && (
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleSourceCodeClick}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white transition-all duration-300 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 group backdrop-blur-sm"
                  >
                    Repository
                    <img
                      src="/assets/logos/github.svg"
                      className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-all"
                      alt="github"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {showAlert && <Alert type="danger" text="Site on private" />}
    </div>
  );
};

export default ProjectDetails;
