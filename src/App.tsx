import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import WhatYouGet from './components/WhatYouGet';
import SuccessStories from './components/SuccessStories';
import GlobalReach from './components/GlobalReach';
import About from './components/About';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onContactClick={scrollToContact} />
      <main>
        <Hero onGetStarted={scrollToContact} />
        <TrustedBrands />
        <Services />
        <WhatYouGet />
        <SuccessStories />
        <About />
        <GlobalReach />
        <LeadForm id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;