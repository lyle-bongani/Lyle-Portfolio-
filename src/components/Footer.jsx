import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 text-center text-neutral-400">
            <div className="flex items-center justify-center gap-4">
                <a
                    href="https://github.com/lyle-bongani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                >
                    <img src="/assets/logos/github.svg" className="w-6 h-6 invert" alt="GitHub" />
                </a>
                <p>© {currentYear} Lyle Chadya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 