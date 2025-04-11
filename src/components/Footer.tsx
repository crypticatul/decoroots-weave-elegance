
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-decoroots-yellow"> {/* Changed background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-decoroots-charcoal"> {/* Updated font and text color */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-decoroots-charcoal">Decoroots</h3> {/* Updated heading style */}
            <p className="text-sm text-decoroots-charcoal/80"> {/* Updated paragraph style */}
              Where timeless craftsmanship meets modern style in the form of stunning macrame bags.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4 text-decoroots-charcoal">Quick Links</h3> {/* Updated heading style */}
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  Collection {/* Changed text to match header */}
                </a>
              </li>
              <li>
                <a href="#story" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  Our Story
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Added About Us link */}
                  About Us
                </a>
              </li>
              <li>
                <a href="#bulk-orders" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Added Bulk Orders link */}
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-decoroots-charcoal/80 hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4 text-decoroots-charcoal">Contact Us</h3> {/* Updated heading style */}
            <ul className="space-y-2">
              <li className="text-sm text-decoroots-charcoal/80"> {/* Updated text style */}
                Email: <a href="mailto:info@decoroots.co.in" className="hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  info@decoroots.co.in
                </a>
              </li>
              <li className="text-sm text-decoroots-charcoal/80"> {/* Updated text style */}
                Website: <a href="http://www.decoroots.com" target="_blank" rel="noopener noreferrer" className="hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  www.decoroots.com
                </a>
              </li>
              <li className="text-sm text-decoroots-charcoal/80"> {/* Updated text style */}
                Phone: <a href="tel:+919821539836" className="hover:text-decoroots-brown transition-colors"> {/* Updated link style */}
                  +91-9821539836
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-decoroots-brown/30 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"> {/* Updated border color */}
          <p className="text-sm text-decoroots-charcoal/80"> {/* Updated text style */}
            © {currentYear} Decoroots. All rights reserved.
          </p>
          <p className="text-sm text-decoroots-charcoal/80 flex items-center mt-4 sm:mt-0"> {/* Updated text style */}
            Crafted with <Heart className="h-3 w-3 text-decoroots-terracotta mx-1" /> by  <a href="https://cognitiev.com" target="_blank" rel="noopener noreferrer" className="hover:text-decoroots-brown transition-colors underline underline-offset-2"> 🧠Cognitiev.com</a> {/* Updated link style */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
