
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
    <section id="contact" className="bg-decoroots-light-grey section-container"> {/* Changed background and padding & added section-container */}
      <div className="max-w-5xl mx-auto"> {/* Keep max-w for content width control */}
      <h2 className="section-title reveal-animation" data-animation="weave-left">Contact Us</h2> {/* Updated title style */}
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-12 reveal-animation" data-animation="weave-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-decoroots-charcoal">Get In Touch</h3> {/* Updated subheading style */}
              <p className="font-sans text-lg text-decoroots-charcoal/80"> {/* Updated paragraph style */}
                Have questions about our products or interested in collaborating? Send us a message and we'll get back to you soon.
              </p>
            </div>
            
            <div className="space-y-6 font-sans text-decoroots-charcoal"> {/* Updated font and text color for contact info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-decoroots-yellow/50 flex items-center justify-center"> {/* Updated icon background */}
                  <Mail className="h-5 w-5 text-decoroots-brown" /> {/* Updated icon color */}
                </div>
                <div>
                  <p className="text-sm text-decoroots-charcoal/80">Email</p> {/* Updated label color */}
                  <a href="mailto:info@decoroots.co.in" className="hover:text-decoroots-brown transition-colors"> {/* Updated link color */}
                    info@decoroots.co.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-decoroots-yellow/50 flex items-center justify-center"> {/* Updated icon background */}
                  <Globe className="h-5 w-5 text-decoroots-brown" /> {/* Updated icon color */}
                </div>
                <div>
                  <p className="text-sm text-decoroots-charcoal/80">Website</p> {/* Updated label color */}
                  <a href="http://www.decoroots.com" target="_blank" rel="noopener noreferrer" className="hover:text-decoroots-brown transition-colors"> {/* Updated link color */}
                    www.decoroots.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-decoroots-yellow/50 flex items-center justify-center"> {/* Updated icon background */}
                  <Phone className="h-5 w-5 text-decoroots-brown" /> {/* Updated icon color */}
                </div>
                <div>
                  <p className="text-sm text-decoroots-charcoal/80">Phone</p> {/* Updated label color */}
                  <a href="tel:+919821539836" className="hover:text-decoroots-brown transition-colors"> {/* Updated link color */}
                    +91-9821539836
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" data-animation="weave-right">
            {/* Added data-netlify, name, method attributes. Removed onSubmit */}
            <form name="contact" method="POST" data-netlify="true" className="space-y-6 font-sans"> {/* Added font-sans */}
              {/* Added hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-decoroots-charcoal">Name</label> {/* Updated label color */}
                <input
                  id="name"
                  name="name" // Added name attribute
                  type="text"
                  // Removed value and onChange for uncontrolled component with Netlify
                  required
                  className="w-full px-4 py-2 rounded-md border border-decoroots-brown/50 bg-white focus:outline-none focus:ring-2 focus:ring-decoroots-brown focus:border-transparent transition-all text-decoroots-charcoal placeholder:text-decoroots-charcoal/50" /* Updated input styles */
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-decoroots-charcoal">Email</label> {/* Updated label color */}
                <input
                  id="email"
                  name="email" // Added name attribute
                  type="email"
                  // Removed value and onChange
                  required
                  className="w-full px-4 py-2 rounded-md border border-decoroots-brown/50 bg-white focus:outline-none focus:ring-2 focus:ring-decoroots-brown focus:border-transparent transition-all text-decoroots-charcoal placeholder:text-decoroots-charcoal/50" /* Updated input styles */
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-decoroots-charcoal">Message</label> {/* Updated label color */}
                <textarea
                  id="message"
                  name="message" // Added name attribute
                  // Removed value and onChange
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-decoroots-brown/50 bg-white focus:outline-none focus:ring-2 focus:ring-decoroots-brown focus:border-transparent transition-all resize-none text-decoroots-charcoal placeholder:text-decoroots-charcoal/50" /* Updated textarea styles */
                  placeholder="Your message..."
                />
              </div>
              
              {/* Removed disabled state and dynamic text */}
              <Button type="submit" className="w-full bg-decoroots-brown hover:bg-decoroots-brown/90 text-white"> {/* Updated button style */}
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
