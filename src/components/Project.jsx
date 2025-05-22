import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  sourceCode,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-start justify-between py-6 space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:py-10"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="w-full sm:w-auto">
          <p className="text-xl sm:text-2xl">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm sm:text-base">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg cursor-pointer hover:bg-neutral-800 sm:text-base"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" alt="arrow" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          sourceCode={sourceCode}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
