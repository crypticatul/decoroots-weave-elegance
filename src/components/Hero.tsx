
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      heroText.classList.add("appear");
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10">
        <img 
          src="/header.jpg" 
          alt="Hero Background" 
          className="h-full w-full object-fill"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 hero-text opacity-0">
            {/* Updated heading: font-serif, text-decoroots-charcoal, removed span */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Where <span className="text-primary">Craftsmanship</span> Meets Modern Style
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Handcrafted macrame bags that blend traditional artistry with contemporary design for the modern aesthetic.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary button - Assuming primary color is set elsewhere or keeping default */}
              <Button asChild size="lg" className="group bg-decoroots-brown hover:bg-decoroots-brown/90 text-white">
                <a href="#portfolio">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              {/* Outline button - Updated border and text color */}
              <Button asChild variant="outline" size="lg" className="border-decoroots-brown text-decoroots-brown hover:bg-decoroots-brown/10 hover:text-decoroots-brown">
                <a href="#story">Our Story</a>
              </Button>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 lg:h-[32rem] reveal-animation" data-animation="scale-in">
            <div className="absolute inset-0 bg-decoroots-cream dark:bg-decoroots-charcoal/20 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/cognitiev-uploads/A1.jpg" // Updated path
                alt="Featured Macrame Bag" 
                className="h-full w-full object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
