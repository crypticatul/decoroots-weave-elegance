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
            {/* Updated logo text style */}
            <span className="text-xl md:text-2xl font-serif text-decoroots-charcoal">Decoroots</span>
          </a>

          {/* Navigation - Desktop */}
          {/* Replaced nav-link with Tailwind classes */}
          <nav className="hidden md:flex space-x-8 font-sans">
            <a href="#home" className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Home</a>
            <a href="#portfolio" className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Collection</a>
            <a href="#about-us" className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">About Us</a>
            <a href="#bulk-orders" className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Bulk Orders</a>
            <a href="#contact" className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Contact</a>
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
            {/* Updated mobile close button style */}
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(false)}
              className="text-decoroots-charcoal hover:bg-decoroots-light-grey/50"
            >
              <X size={24} />
            </Button>
          </div>

          {/* Added background, padding, and rounded corners to the nav element */}
          {/* Replaced nav-link with Tailwind classes */}
          <nav className="flex flex-col items-center space-y-6 text-lg bg-background/80 p-6 rounded-lg font-sans">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Home</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Collection</a>
            <a href="#about-us" onClick={() => setMobileMenuOpen(false)} className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">About Us</a>
            <a href="#bulk-orders" onClick={() => setMobileMenuOpen(false)} className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Bulk Orders</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-decoroots-charcoal hover:text-decoroots-brown transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
