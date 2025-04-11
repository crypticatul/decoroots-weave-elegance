
import { useState, useEffect } from "react";
import { setupRevealAnimations } from "@/lib/animation";
import { products, Product } from "@/data/products";

export const Portfolio = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const observer = setupRevealAnimations();
    return () => observer.disconnect();
  }, []);
  
  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };
  
  const closeProduct = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };
  
  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };
  
  return (
    <section id="portfolio" className="bg-decoroots-light-grey section-container"> {/* Changed background and padding & added section-container */}
      <h2 className="section-title reveal-animation" data-animation="weave-left">Our Collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"> {/* Kept mt-12 for spacing */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className="macrame-card reveal-animation cursor-pointer"
            data-animation={index % 2 === 0 ? "weave-left" : "weave-right"}
            data-delay={`${index * 100}`}
            onClick={() => openProduct(product)}
          >
            <div className="relative aspect-square bg-decoroots-cream dark:bg-decoroots-charcoal/40 overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 bg-white dark:bg-decoroots-charcoal/50"> {/* Added background to card text area */}
              <h3 className="text-xl font-serif text-decoroots-charcoal">{product.name}</h3> {/* Updated card title style */}
              <p className="text-sm font-sans text-decoroots-charcoal/80 mt-1">{product.description}</p> {/* Updated card description style */}
            </div>
          </div>
        ))}
      </div>
      
      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeProduct}>
          <div 
            className="bg-background max-w-3xl w-full max-h-[90vh] overflow-auto rounded-lg p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-serif text-decoroots-charcoal">{selectedProduct.name}</h3> {/* Updated modal title style */}
              <button 
                onClick={closeProduct}
                className="p-1 rounded-full text-decoroots-charcoal hover:bg-decoroots-light-grey/50 transition-colors" /* Updated close button style */
              >
                ✕
              </button>
            </div>
            
            <div 
              className="relative aspect-square bg-decoroots-cream dark:bg-decoroots-charcoal/40 flex items-center justify-center rounded-md mb-4 cursor-pointer overflow-hidden"
              onClick={nextImage}
            >
              <img 
                src={selectedProduct.images[currentImageIndex]} 
                alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 right-2 bg-background/70 px-2 py-1 rounded text-xs">
                Click to view next image
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4"> {/* Added alignment and margin */}
              <div>
                <p className="font-sans text-decoroots-charcoal/80">{selectedProduct.description}</p> {/* Updated modal description style */}
              </div>
              <div className="flex space-x-2">
                {selectedProduct.images.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentImageIndex ? "bg-decoroots-brown" : "bg-decoroots-light-grey" /* Updated indicator colors */
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
