
import { useEffect } from "react";
import { setupRevealAnimations } from "@/lib/animation";

export const Story = () => {
  useEffect(() => {
    const observer = setupRevealAnimations();
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="story" className="section-container bg-secondary/50 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title reveal-animation" data-animation="weave-left">Our Story</h2>
        
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <div className="md:col-span-2">
            <div className="h-full w-full rounded-2xl overflow-hidden shadow-md reveal-animation" data-animation="weave-left">
              <div className="h-full w-full aspect-[3/4] bg-decoroots-cream dark:bg-decoroots-charcoal/40 flex items-center justify-center">
                <p className="text-muted-foreground p-4 text-center">
                  Artisan Image Placeholder
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <p className="reveal-animation" data-animation="weave-right" data-delay="100">
              Welcome to Decoroots. Where timeless craftsmanship meets modern style in the form of our stunning macrame 
              bags. As a new and vibrant startup, we are passionate about creating eco-friendly, artisanal accessories that add a 
              unique touch to your wardrobe. Macrame has become a popular design trend, blending traditional knotting 
              techniques with modern aesthetics to create unique Hand bag pieces.
            </p>
            
            <p className="reveal-animation" data-animation="weave-right" data-delay="200">
              Our macrame bags are handcrafted with care by skilled artisans using the finest sustainable materials. Each piece 
              is a work of art, meticulously woven to perfection, offering both beauty and durability. From casual beach days to 
              evening outings, our bags are designed to complement every occasion, blending functionality with effortless 
              elegance.
            </p>
            
            <p className="reveal-animation" data-animation="weave-right" data-delay="300">
              At Decoroots we believe in the power of creativity and sustainability. Our collection is all about embracing natural 
              textures, vibrant colors, and versatile designs, ensuring that each bag reflects a sense of individuality and style. 
              Whether you're drawn to boho chic or contemporary trends, our macrame bags will elevate your accessory game 
              and serve as a statement piece wherever you go.
            </p>
            
            <p className="reveal-animation" data-animation="weave-right" data-delay="400">
              Join us as we celebrate the art of macrame and create accessories that tell a story, support artisans, and make a 
              positive impact on the planet. Let our bags be a part of your journey—where fashion meets craftsmanship, and 
              style meets sustainability.
            </p>
            
            <p className="reveal-animation" data-animation="weave-right" data-delay="500">
              We have decided to move further with beautiful, catchy and unique décor and gift articles for all occasions and 
              suit the requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
