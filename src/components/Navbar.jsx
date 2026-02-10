import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const hireMeLink =
        'mailto:vizcainom@uindy.edu?subject=Software%20Engineering%20Opportunity&body=Hi%20Martin,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0ABest,%0A%5BName%5D';

    const handleHireMeClick = (event) => {
        event.preventDefault();
        window.location.href = hireMeLink;
        window.setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const menuItems = [
        { title: 'HOME', href: '#hero' },
        { title: 'ABOUT', href: '#about' },
        { title: 'EXPERIENCE', href: '#experience' },
        { title: 'PROJECTS', href: '#projects' },
        { title: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-2xl font-bold font-display tracking-tighter">
                MV<span className="text-fluo">.</span>
            </div>

            <div className="hidden md:flex gap-8 font-display text-sm tracking-widest">
                {menuItems.map((item) => (
                    <a key={item.title} href={item.href} className="hover:text-fluo transition-colors duration-300">
                        {item.title}
                    </a>
                ))}
                <a
                    href="/Martin_Vizcaino_Resume_2026.pdf"
                    download
                    className="hover:text-fluo transition-colors duration-300"
                >
                    RESUME
                </a>
                <a
                    href={hireMeLink}
                    onClick={handleHireMeClick}
                    className="bg-fluo text-black px-6 py-2 font-bold hover:bg-white transition-colors duration-300 transform skew-x-[-10deg]"
                >
                    <span className="block transform skew-x-[10deg]">HIRE ME</span>
                </a>
            </div>

            <button onClick={toggleMenu} className="md:hidden z-50 relative">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                onClick={toggleMenu}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="text-5xl font-display font-bold hover:text-fluo transition-colors"
                            >
                                {item.title}
                            </motion.a>
                        ))}
                        <a
                            href="/Martin_Vizcaino_Resume_2026.pdf"
                            download
                            className="text-5xl font-display font-bold hover:text-fluo transition-colors"
                        >
                            RESUME
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
