import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteConfig from './data/siteConfig';

function App() {
  useEffect(() => {
    const { seo } = siteConfig;
    document.title = seo.title;
    const ensureMeta = (selector, attrs) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) => meta.setAttribute(key, value));
        document.head.appendChild(meta);
      } else {
        Object.entries(attrs).forEach(([key, value]) => meta.setAttribute(key, value));
      }
    };

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: seo.ogImage,
    });
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: seo.url,
    });
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
  }, []);

  return (
    <main className="bg-dark-bg min-h-screen text-white selection:bg-fluo selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
