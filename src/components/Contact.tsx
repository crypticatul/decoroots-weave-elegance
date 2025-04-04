
import { useEffect } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { setupRevealAnimations } from "@/lib/animation";
import { Button } from "@/components/ui/button";
// Removed useState and useToast as Netlify handles submission state

export const Contact = () => {
  // Removed state variables (name, email, message, isSubmitting)
  
  useEffect(() => {
    const observer = setupRevealAnimations();
    return () => observer.disconnect();
  }, []);
  
  // Removed handleSubmit function as Netlify handles submission
  
  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title reveal-animation" data-animation="weave-left">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-12 reveal-animation" data-animation="weave-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif">Get In Touch</h3>
              <p className="text-muted-foreground">
                Have questions about our products or interested in collaborating? Send us a message and we'll get back to you soon.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@decoroots.co.in" className="hover:text-primary transition-colors">
                    info@decoroots.co.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="http://www.decoroots.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    www.decoroots.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919821539836" className="hover:text-primary transition-colors">
                    +91-9821539836
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" data-animation="weave-right">
            {/* Added data-netlify, name, method attributes. Removed onSubmit */}
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              {/* Added hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name" // Added name attribute
                  type="text"
                  // Removed value and onChange for uncontrolled component with Netlify
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email" // Added name attribute
                  type="email"
                  // Removed value and onChange
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message" // Added name attribute
                  // Removed value and onChange
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              {/* Removed disabled state and dynamic text */}
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
