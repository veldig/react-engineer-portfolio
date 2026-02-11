import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from '../data/siteConfig';

const Projects = () => {
    const { projects } = siteConfig;

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 md:px-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-[clamp(2.5rem,8vw,5rem)] md:text-8xl font-bold mb-12 md:mb-16"
                >
                    PROJECTS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-secondary/40 p-6 sm:p-7 md:p-8 border border-gray-800 hover:border-fluo transition-colors duration-500 rounded-none"
                        >
                            <div className="space-y-4">
                                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-fluo transition-colors">
                                    {project.title}
                                </h3>
                                <div className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                    {project.stack}
                                </div>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    {project.summary}
                                </p>
                                {(project.liveLink || project.githubLink) && (
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 min-h-[44px] w-full sm:w-auto border-2 border-fluo bg-fluo text-black font-mono text-xs uppercase tracking-widest hover:bg-transparent hover:text-fluo transition-colors duration-300"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 min-h-[44px] w-full sm:w-auto border border-gray-700 text-gray-300 font-mono text-xs uppercase tracking-widest hover:border-fluo hover:text-fluo transition-colors duration-300"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
