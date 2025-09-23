import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const [preview, setPreview] = useState(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 640) { // Only show preview on desktop
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects
        .filter((project) => project.title !== "Tech Connect")
        .map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && window.innerWidth >= 640 && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-48 w-64 sm:h-56 sm:w-80 rounded-lg shadow-lg pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="Project preview"
        />
      )}
    </section>
  );
};

export default Projects;
