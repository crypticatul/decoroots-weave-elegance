import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="bg-secondary section-container"> {/* Use semantic color */}
      <h2 className="section-title reveal-animation" data-animation="weave-left">About Us</h2> {/* Updated heading style */}
      <div className="max-w-5xl mx-auto text-left font-sans text-lg text-secondary-foreground space-y-6 mt-8 flex flex-col md:flex-row items-start"> {/* Use semantic color & added margin top */}
        <img 
          src="/about.jpg" 
          alt="About Us" 
          className="w-1/3 h-auto mr-8"
        />
        <p>
          Welcome to Decoroots, a handcrafted brand where you’ll discover an exquisite range of home décor, dining essentials, and accessories. As a new and vibrant startup, we're passionate about creating eco-friendly, artisanal products that add a unique touch to your lifestyle. At DecoRoots, we believe in the power of creativity and sustainability. Our collection celebrates natural textures, vibrant colors, and versatile designs—ensuring that every item reflects individuality and timeless style. Whether you're drawn to boho chic or modern elegance, let our products be part of your story—where design meets craftsmanship, and style meets sustainability. We’re excited to continue our journey with a beautiful, unique, and ever-growing range of home décor, dining essentials, and gift articles perfect for every occasion and every space.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
