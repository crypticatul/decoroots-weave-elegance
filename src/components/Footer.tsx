
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">Decoroots</h3>
            <p className="text-sm text-muted-foreground">
              Where timeless craftsmanship meets modern style in the form of stunning macrame bags.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#story" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: <a href="mailto:info@decoroots.co.in" className="hover:text-primary transition-colors">
                  info@decoroots.co.in
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Website: <a href="http://www.decoroots.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.decoroots.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: <a href="tel:+919821539836" className="hover:text-primary transition-colors">
                  +91-9821539836
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Decoroots. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 sm:mt-0">
            Crafted with <Heart className="h-3 w-3 text-decoroots-terracotta mx-1" /> for artisanal luxury
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
