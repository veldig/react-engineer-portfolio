import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../data/siteConfig';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { navigation, branding, resume, hireMe, contact } = siteConfig;

    const toggleMenu = () => setIsOpen(!isOpen);
    const hireMeLink = hireMe.mailto || `mailto:${contact.email}`;

    const handleHireMeClick = (event) => {
        event.preventDefault();
        window.location.href = hireMeLink;
        window.setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    useEffect(() => {
        document.body.classList.toggle('menu-open', isOpen);
        return () => document.body.classList.remove('menu-open');
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-[70] px-6 py-6 flex justify-between items-center text-white bg-black/70 backdrop-blur-md shadow-lg md:bg-transparent md:backdrop-blur-0 md:shadow-none md:mix-blend-difference">
            <div className="text-2xl font-bold font-display tracking-tighter">
                {branding.initials}<span className="text-fluo">.</span>
            </div>

            <div className="hidden md:flex gap-8 font-display text-sm tracking-widest">
                {navigation.map((item) => (
                    <a key={item.title} href={item.href} className="hover:text-fluo transition-colors duration-300">
                        {item.title}
                    </a>
                ))}
                <a
                    href={resume.url}
                    download
                    className="hover:text-fluo transition-colors duration-300"
                >
                    {resume.label}
                </a>
                <a
                    href={hireMeLink}
                    onClick={handleHireMeClick}
                    className="bg-fluo text-black px-6 py-2 min-h-[44px] font-bold hover:bg-white transition-colors duration-300 transform skew-x-[-10deg]"
                >
                    <span className="block transform skew-x-[10deg]">{hireMe.label}</span>
                </a>
            </div>

            <button onClick={toggleMenu} className="md:hidden z-[80] relative">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/70 md:hidden pointer-events-none"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed inset-0 z-[60] md:hidden flex items-start justify-center px-6 pt-24 pb-6"
                        >
                            <div className="relative w-full max-w-sm mx-auto max-h-[calc(100dvh-8rem)] overflow-y-auto">
                                <div className="absolute inset-0 rounded-3xl bg-black/85 backdrop-blur-xl supports-[backdrop-filter]:bg-black/70" />
                                <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-8 mix-blend-normal">
                                    {navigation.map((item, index) => (
                                        <motion.a
                                            key={item.title}
                                            href={item.href}
                                            onClick={toggleMenu}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 * index }}
                                            className="text-white text-3xl sm:text-4xl font-display font-bold tracking-normal text-center leading-relaxed"
                                        >
                                            {item.title}
                                        </motion.a>
                                    ))}
                                    <div className="mt-2 flex flex-col gap-3 w-full max-w-xs">
                                        <a
                                            href={resume.url}
                                            download
                                            className="bg-white/10 border border-white/20 text-white text-center py-3 rounded-xl font-display font-bold"
                                        >
                                            {resume.label}
                                        </a>
                                        <a
                                            href={hireMeLink}
                                            onClick={(event) => {
                                                toggleMenu();
                                                handleHireMeClick(event);
                                            }}
                                            className="bg-fluo text-black text-center py-3 rounded-xl font-display font-bold"
                                        >
                                            {hireMe.label}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
