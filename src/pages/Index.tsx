
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { setupRevealAnimations } from "@/lib/animation";

const Index = () => {
  useEffect(() => {
    // Setup intersection observer for animations
    const observer = setupRevealAnimations();
    
    // Register the service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.error('Service worker registration failed:', err);
        });
      });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header logo="/lovable-uploads/c04c2297-b92e-46b9-bbd0-8056a8104ef9.png" />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
