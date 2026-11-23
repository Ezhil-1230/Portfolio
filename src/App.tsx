import React, { useState } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ConfigSocialsModal } from './components/ConfigSocialsModal';

export const App: React.FC = () => {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [configTarget, setConfigTarget] = useState<string>('');

  const handleOpenConfig = (itemTitle?: string) => {
    setConfigTarget(itemTitle || '');
    setIsConfigOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#080B14] text-white selection:bg-[#00F0FF]/25 selection:text-[#00F0FF] font-sans antialiased">
      
      {/* Background Interactive Particle Canvas */}
      <BackgroundParticles />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenConfig={() => handleOpenConfig('Social Links')} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenSocialConfig={() => handleOpenConfig('Social Profile')} />
        <About />
        <Skills />
        <Experience />
        <Projects onConfigureLink={(title) => handleOpenConfig(title)} />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Trigger */}
      <ScrollToTop />

      {/* Repository / Social Link Configuration Helper Modal */}
      <ConfigSocialsModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        targetItem={configTarget}
      />
    </div>
  );
};

export default App;
