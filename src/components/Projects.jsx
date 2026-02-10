import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'On-Device CSV Cleaner (iOS)',
        stack: 'Swift, MLX, Core ML',
        summary:
            'Built an offline CSV cleaning tool using on-device AI for PII removal and privacy-compliant data prep.',
    },
    {
        title: 'Sanctum — Chrome Privacy Filter',
        stack: 'TypeScript, Manifest V3',
        summary:
            'Client-side Chrome extension that redacts PII before prompts are sent to ChatGPT, Claude, or Gemini.',
    },
    {
        title: 'Real-Time Market Data Analysis',
        stack: 'FastAPI, PostgreSQL, React',
        summary:
            'Built a real-time stock data pipeline with REST APIs and an analytics dashboard for streaming insights.',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 md:px-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-8xl font-bold mb-16"
                >
                    PROJECTS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-secondary/40 p-7 md:p-8 border border-gray-800 hover:border-fluo transition-colors duration-500 rounded-none"
                        >
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-fluo transition-colors">
                                    {project.title}
                                </h3>
                                <div className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                    {project.stack}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {project.summary}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
