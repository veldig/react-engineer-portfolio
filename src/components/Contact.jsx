import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = 'vizcainom@uindy.edu';

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
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-8">
                            LET'S<br />
                            <span className="text-fluo">TALK</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <p className="text-xl text-gray-300">
                            Open to software engineering opportunities and focused collaborations.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="space-y-4">
                                <a
                                    href="mailto:vizcainom@uindy.edu?subject=Software%20Engineering%20Opportunity&body=Hi%20Martin,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0ABest,%0A%5BName%5D"
                                    className="flex items-center group text-lg font-display text-gray-300 hover:text-fluo transition-colors"
                                >
                                    <Mail className="mr-3 text-gray-500 group-hover:text-fluo" />
                                    {email}
                                </a>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={copyEmail}
                                        className="inline-flex items-center justify-center px-5 py-2 border border-gray-700 text-gray-300 font-mono text-xs uppercase tracking-widest hover:border-fluo hover:text-fluo transition-colors duration-300"
                                    >
                                        Copy Email
                                    </button>
                                    <span className={`text-xs font-mono tracking-widest ${copied ? 'text-fluo' : 'text-transparent'}`}>
                                        Copied
                                    </span>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/martinvizcaino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group text-lg font-display text-gray-300 hover:text-fluo transition-colors"
                                >
                                    <Linkedin className="mr-3 text-gray-500 group-hover:text-fluo" />
                                    /in/martinvizcaino
                                </a>
                                <div className="flex items-center group text-lg font-display text-gray-400">
                                    <Phone className="mr-3 text-gray-500" />
                                    (872) 319-3251
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
