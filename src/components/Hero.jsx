import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../assets/headshot-placeholder.svg';
import siteConfig from '../data/siteConfig';

const Hero = () => {
    const { branding, hero } = siteConfig;

    return (
        <section id="hero" className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fluo rounded-full blur-[150px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-16">
                <div className="text-center lg:text-left">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-fluo tracking-[0.3em] text-[0.7rem] sm:text-sm md:text-base mb-4"
                >
                    {branding.roleLabel}
                </motion.p>

                <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-display text-[clamp(2.75rem,10vw,5.5rem)] sm:text-[clamp(3.5rem,9vw,6.5rem)] lg:text-9xl font-bold leading-[0.95] tracking-tighter"
                    >
                    {branding.firstName}<br />
                    <span className="text-outline text-transparent stroke-white stroke-2">{branding.lastName}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-4 text-gray-300 font-sans text-sm sm:text-base tracking-wide"
                >
                    {hero.subtitle}
                </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 flex flex-col items-center lg:items-start"
                    >
                        <div className="w-[1px] h-24 bg-gradient-to-b from-fluo to-transparent"></div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mx-auto lg:mx-0 order-2 lg:order-none"
                >
                    <div className="w-[200px] sm:w-[240px] md:w-[300px] lg:w-[360px] aspect-[3/4] overflow-hidden rounded-[10px] bg-dark-secondary/40 ring-2 ring-fluo/20 shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
                        <img
                            src={headshot}
                            alt={`${branding.name} headshot placeholder`}
                            width="360"
                            height="450"
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover object-[70%_32%] scale-[1.08] brightness-[0.95] contrast-[1.06] saturate-[0.92]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Aesthetic decorative text */}
            <div className="absolute bottom-10 left-10 font-mono text-xs text-gray-500 hidden md:block">
                EST. {branding.established}<br />
                LOC: {branding.location}
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-xs text-gray-500 hidden md:block text-right">
                {hero.backgroundLabelRight.split('\n').map((line) => (
                    <span key={line}>
                        {line}
                        <br />
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
