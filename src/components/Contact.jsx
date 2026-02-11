import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const { contact, hireMe } = siteConfig;
    const email = contact.email;
    const hireMeLink = hireMe.mailto || `mailto:${email}`;

    const copyEmail = async () => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(email);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-dark-bg text-white min-h-[60vh] flex items-center relative">
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-fluo/5 to-transparent pointer-events-none"></div>

            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-[clamp(2.5rem,9vw,5rem)] md:text-8xl font-bold leading-tight mb-8">
                            {contact.headline.split('\n').map((line) => (
                                <span key={line}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-gray-300">
                            {contact.subhead}
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="space-y-4">
                                <a
                                    href={hireMeLink}
                                    className="flex items-center group text-base sm:text-lg font-display text-gray-300 hover:text-fluo transition-colors"
                                >
                                    <Mail className="mr-3 text-gray-500 group-hover:text-fluo" />
                                    {contact.emailDisplay}
                                </a>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={copyEmail}
                                        className="inline-flex items-center justify-center px-5 py-2 min-h-[44px] border border-gray-700 text-gray-300 font-mono text-xs uppercase tracking-widest hover:border-fluo hover:text-fluo transition-colors duration-300 w-full sm:w-auto"
                                    >
                                        Copy Email
                                    </button>
                                    <span className={`text-xs font-mono tracking-widest ${copied ? 'text-fluo' : 'text-transparent'}`}>
                                        Copied
                                    </span>
                                </div>
                                <a
                                    href={contact.linkedin.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group text-base sm:text-lg font-display text-gray-300 hover:text-fluo transition-colors"
                                >
                                    <Linkedin className="mr-3 text-gray-500 group-hover:text-fluo" />
                                    {contact.linkedin.label}
                                </a>
                                <div className="flex items-center group text-base sm:text-lg font-display text-gray-400">
                                    <Phone className="mr-3 text-gray-500" />
                                    {contact.phone}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
