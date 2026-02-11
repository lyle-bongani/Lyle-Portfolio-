import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Navigation({ isMobile = false, onItemClick }) {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <ul className={`nav-ul ${isMobile ? "flex-col items-center justify-center space-y-10" : ""}`}>
      {menuItems.map((item, i) => (
        <motion.li
          key={item.href}
          className={isMobile ? "w-full text-center" : "nav-li"}
          custom={i}
          variants={isMobile ? itemVariants : {}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            className={`${isMobile ? "text-4xl font-bold" : "nav-link"} relative group text-neutral-400 hover:text-white transition-colors duration-300`}
            href={item.href}
            onClick={onItemClick}
          >
            {item.label}
            {!isMobile && (
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            )}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

Navigation.propTypes = {
  isMobile: PropTypes.bool,
  onItemClick: PropTypes.func,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`fixed inset-x-0 z-50 w-full transition-all duration-300 ${scrolled && !isOpen
          ? "bg-primary/80 backdrop-blur-lg shadow-lg shadow-indigo-500/10"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="/"
            className="text-2xl md:text-3xl font-bold transition-colors text-neutral-400 hover:text-white relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Lyle</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
          </motion.a>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none md:hidden relative z-[60] p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
          <nav className="hidden md:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 min-h-screen glass-morphism md:hidden z-50 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="w-full">
              <Navigation isMobile={true} onItemClick={handleItemClick} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
