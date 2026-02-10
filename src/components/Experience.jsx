import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Co-Founder & Backend Systems Engineer',
        org: 'Carrot',
        orgLink: 'https://www.studentaitoolkit.online',
        dates: 'Nov 2025 - Present',
        bullets: [
            'Architected a production-grade multi-LLM routing system (FastAPI, Supabase, pgvector) with dynamic model selection and provider fallback.',
            'Built a cost-aware orchestration layer with token optimization for efficient inference.',
            'Implemented authentication, usage metering, and quota enforcement across providers.',
            'Deployed production infrastructure on Render and Vercel with CI/CD and environment isolation.',
        ],
    },
    {
        title: 'Technical Lead & Systems Engineer',
        org: 'CAPTE Standards Mapping Platform',
        dates: 'Aug 2025 - Present',
        bullets: [
            'Leading a 5-person engineering team delivering an enterprise accreditation platform for a live university client.',
            'Architected a Firebase + Python backend ingesting 100+ course artifacts and structured syllabus data.',
            'Designed an LLM-powered accreditation mapping pipeline (Gemini) that generates evidence-backed rationales.',
            'Standardized structured PDF outputs for accreditation reviewers.',
            'Reduced accreditation prep time from hours per course to automated report generation.',
        ],
    },
    {
        title: 'Team Data Analyst',
        org: 'Xtern Challenge (TechPoint)',
        dates: 'Sept 2025 - Oct 2025',
        bullets: [
            'Placed 3rd in a MISO-sponsored analytics challenge on early detection of U.S. energy policy strategy shifts.',
            'Analyzed public data and social signals using Python (Pandas, scikit-learn) to identify policy inflection points.',
            'Built a JavaScript dashboard visualizing data center demand, transmission expansion, and interconnection backlog pressures.',
            'Presented findings in person to 30+ MISO executives and professionals.',
        ],
    },
    {
        title: 'Software Engineer Intern',
        org: 'Hoosier Racing Tire Corp.',
        dates: 'Summer 2025',
        bullets: [
            'Built a cross-platform inventory app (Flutter/Dart + SQL) for web, iOS, and Android.',
            'Enabled real-time tracking across 5+ warehouses, cutting manual reconciliation time by 40%.',
            'Developed an AI-powered internal sales agent to handle client inquiries, improving response time and consistency.',
        ],
    },
    {
        title: 'Undergraduate Researcher',
        org: 'University of Indianapolis',
        dates: 'Aug 2024 - Present',
        bullets: [
            'Engineered a 3-DOF SCARA arm (MATLAB/Simulink + PixyCam) for vision-guided pick-and-place.',
            'Implemented inverse kinematics and motion control, improving accuracy by 30% over 100+ tests.',
            'Selected for the NSF I-Corps Jumpstart Program and awarded a $1,000 stipend to explore commercialization.',
            'Awarded a $1,500 Undergraduate Summer Research Institute grant.',
        ],
    },
    {
        title: 'AI Research Intern',
        org: 'SmartCorp',
        dates: 'Summer 2024',
        bullets: [
            'Implemented collaborative filtering (CF) and matrix factorization (MF) recommenders on 10K+ user-item records.',
            'Benchmarked SVD performance across offline evaluations.',
            'Applied VAEs to improve personalization accuracy by 12% (precision@10).',
        ],
    },
];

const Experience = () => {
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
                    {experiences.map((exp, index) => {
                        const CardTag = exp.orgLink ? 'a' : 'div';
                        const hoverTextClass = exp.orgLink ? 'group-hover:text-black transition-colors' : '';

                        return (
                            <motion.div
                                key={exp.title}
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
