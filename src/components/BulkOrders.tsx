import React from 'react';

const BulkOrders: React.FC = () => {
  return (
    <section id="bulk-orders" className="bg-accent section-container"> {/* Use semantic color */}
      <h2 className="section-title reveal-animation" data-animation="weave-left">Bulk Orders</h2> {/* Updated heading style */}
      <div className="max-w-5xl mx-auto text-left font-sans text-lg text-accent-foreground space-y-6 mt-8 flex flex-col md:flex-row items-start"> {/* Use semantic color & added margin top */}
        <img 
          src="/placeholder.svg" 
          alt="Artisan crafting macrame"
          className="w-1/3 h-auto mr-8 md:h-full"
        />
        <h3 className="text-2xl font-serif font-semibold text-accent-foreground mb-6">Yes! We Customize Bulk Orders</h3> {/* Use semantic color */}
        <p>
          Enjoy exclusive discounts on bulk purchases starting from a minimum order value of ₹10,000. Whether you're planning a special event, sourcing for a retail space, or curating corporate gifts, we've got you covered.
        </p>
        <h4 className="font-semibold text-accent-foreground mt-4">Here’s what you need to know:</h4> {/* Use semantic color */}
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-header">Bulk orders are welcome from customers across the globe — we ship worldwide.</button>
            <div className="accordion-content">
              <p>Details about shipping worldwide.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">Discounts are applied to the total invoice value (excluding shipping charges).</button>
            <div className="accordion-content">
              <p>Details about discounts.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">Our team is committed to timely delivery, ensuring your order meets all critical deadlines.</button>
            <div className="accordion-content">
              <p>Details about delivery commitments.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">Due to volume-based pricing, returns are not accepted on bulk orders.</button>
            <div className="accordion-content">
              <p>Details about return policy.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-header">Once we receive your inquiry, a team member will promptly reach out via email or phone with product pricing and estimated shipping timelines.</button>
            <div className="accordion-content">
              <p>Details about inquiry process.</p>
            </div>
          </div>
        </div>
        <p className="mt-4">
          Let Decoroots be your trusted partner for unique, handcrafted, and eco-friendly pieces — at scale.
        </p>
        <p className="mt-2 font-semibold text-center text-accent-foreground"> {/* Use semantic color and increased margin */}
          For Bulk orders or any Customisation please contact: <a href="tel:+919821539836" className="text-primary hover:underline">+91-9821539836</a> / <a href="tel:+919453283989" className="text-primary hover:underline">9453283989</a> {/* Use primary color for links */}
        </p>
      </div>
    </section>
  );
};

export default BulkOrders;
