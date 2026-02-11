import React from 'react';
import siteConfig from '../data/siteConfig';

const Footer = () => {
    const { footer } = siteConfig;

    return (
        <footer className="bg-dark-bg py-8 px-6 border-t border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 font-mono text-xs">
            <div className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} {footer.copyright}. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
                <span>EST. {footer.established}</span>
                <span>{footer.location}</span>
            </div>
        </footer>
    );
};

export default Footer;
