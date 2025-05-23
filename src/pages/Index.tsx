
// Built & updated by AI from Cognitiev.com
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs"; // Added AboutUs import
import BulkOrders from "@/components/BulkOrders"; // Added BulkOrders import
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
      <Header logo="/logo.png" />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <AboutUs /> {/* Added AboutUs component */}
        <BulkOrders /> {/* Added BulkOrders component */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
