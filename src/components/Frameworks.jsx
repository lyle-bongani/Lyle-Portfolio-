import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    {
      name: "HTML5",
      icon: "/assets/logos/html5.svg"
    },
    {
      name: "CSS3",
      icon: "/assets/logos/css3.svg"
    },
    {
      name: "JavaScript",
      icon: "/assets/logos/javascript.svg"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "React",
      icon: "/assets/logos/react.svg"
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/logos/tailwindcss.svg"
    },
    {
      name: "Styled Components",
      icon: "https://styled-components.com/logo.png"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
      name: "Material UI",
      icon: "https://mui.com/static/logo.png"
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    },
    {
      name: "Git",
      icon: "/assets/logos/git.svg"
    }
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={35} radius={140} className="sm:scale-100 scale-50">
        {skills.map((skill, index) => (
          <Icon key={index} src={skill.icon} alt={skill.name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={80} reverse speed={1.2} className="sm:scale-100 scale-50">
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={skill.icon} alt={skill.name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="duration-200 rounded-sm hover:scale-110 w-5 h-5 sm:w-7 sm:h-7 object-contain"
  />
);
