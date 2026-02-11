import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from '../data/siteConfig';

const About = () => {
    const { about } = siteConfig;

    return (
        <section id="about" className="py-20 px-6 md:px-20 bg-dark-bg text-white relative overflow-hidden">
            {/* Decorative vertical line */}
            <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-gray-800"></div>

            <div className="max-w-4xl mx-auto relative z-10 pl-8 md:pl-0">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-[clamp(2.25rem,8vw,4rem)] md:text-7xl font-bold mb-10 md:mb-12"
                >
                    {about.headline.primary}<br />
                    <span className="text-fluo">{about.headline.accent}</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10 md:gap-12 font-sans">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                            {about.bio[0]}
                        </p>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            {about.bio[1]}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="font-display text-lg sm:text-xl mb-6 tracking-widest border-b border-gray-700 pb-2">CORE SKILLS</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {about.skills.map((skill) => (
                                <div key={skill} className="flex items-center group">
                                    <span className="w-2 h-2 bg-fluo mr-4 rounded-full group-hover:scale-150 transition-transform"></span>
                                    <span className="text-base sm:text-lg group-hover:text-fluo transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
