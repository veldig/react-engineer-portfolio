import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from '../data/siteConfig';

const Experience = () => {
    const { experience } = siteConfig;

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 md:px-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-[clamp(2.5rem,8vw,5rem)] md:text-8xl font-bold mb-12 md:mb-16"
                >
                    EXPERIENCE
                </motion.h2>

                <div className="space-y-8">
                    {experience.map((exp, index) => {
                        const CardTag = exp.orgLink ? 'a' : 'div';
                        const hoverTextClass = exp.orgLink ? 'group-hover:text-black transition-colors' : '';

                        return (
                            <motion.div
                                key={`${exp.title}-${exp.org}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <CardTag
                                    href={exp.orgLink}
                                    target={exp.orgLink ? '_blank' : undefined}
                                    rel={exp.orgLink ? 'noreferrer' : undefined}
                                    className={`group relative block border border-gray-800 bg-dark-secondary p-6 sm:p-7 md:p-10 overflow-hidden transition-colors duration-300 ${
                                        exp.orgLink
                                            ? 'hover:border-fluo hover:bg-fluo hover:text-black cursor-pointer'
                                            : ''
                                    }`}
                                >
                                    <div className="absolute inset-x-0 top-0 h-1 bg-fluo opacity-20" />
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-5 md:mb-6">
                                        <div>
                                            <h3 className={`font-display text-xl sm:text-2xl md:text-3xl font-bold ${hoverTextClass}`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`text-light-text mt-1 text-sm sm:text-base ${hoverTextClass}`}>
                                                {exp.org}
                                            </p>
                                        </div>
                                        <div className={`font-mono text-[0.65rem] sm:text-xs tracking-widest text-gray-400 uppercase ${hoverTextClass}`}>
                                            {exp.dates}
                                        </div>
                                    </div>
                                    <ul className={`list-disc pl-5 space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed ${hoverTextClass}`}>
                                        {exp.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </CardTag>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
