import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ isMobile = false, onItemClick }) {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <ul className={`nav-ul ${isMobile ? "flex-col space-y-8" : ""}`}>
      {menuItems.map((item, i) => (
        <motion.li
          key={item.href}
          className="nav-li"
          custom={i}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            className="nav-link relative group text-neutral-400 hover:text-white transition-colors duration-300"
            href={item.href}
            onClick={onItemClick}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`fixed inset-x-0 z-50 w-full transition-all duration-300 ${scrolled
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
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Lyle</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
          </motion.a>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 relative"
            >
              <span className="absolute w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 top-0 rounded-full" />
              <span className="absolute w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 top-3 rounded-full" />
              <span className="absolute w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 top-6 rounded-full" />
            </motion.div>
          </motion.button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-x-0 top-full bg-primary/95 backdrop-blur-lg sm:hidden border-t border-indigo-500/20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="py-8">
              <Navigation isMobile={true} onItemClick={handleItemClick} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
