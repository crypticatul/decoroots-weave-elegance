
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  logo?: string;
}

export const Header = ({ logo }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="h-12 w-12 overflow-hidden rounded-full border border-decoroots-brown">
              <img src={logo} alt="Decoroots Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-xl md:text-2xl font-serif">Decoroots</span>
          </a>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#portfolio" className="nav-link">Collection</a>
            <a href="#story" className="nav-link">Our Story</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          
          <nav className="flex flex-col items-center space-y-6 text-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="nav-link">Collection</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="nav-link">Our Story</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
