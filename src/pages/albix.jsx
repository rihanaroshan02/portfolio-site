import React from "react";
import Layout from "../components/Layout"; // Adjust path as needed
import albixMockup from "../assets/albix-mockup.png";
import albix1 from "../assets/albix1.png";
import albix2 from "../assets/albix2.png";
import albix3 from "../assets/albix3.png";
import albix4 from "../assets/albix4.png";

const Albix = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-8 py-16 lg:px-20 font-sans">
        {/* Hero */}
        <div className="flex justify-center mb-12">
          <img
            src={albixMockup}
            alt="Albix ERP Mockup"
            className="max-w-full w-[800px] rounded-xl shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
          <p>
            Albix is a powerful ERP software solution where I designed the entire visual design system including 
            dashboard layouts, components, widgets, and themes. The aim was to make enterprise tasks easier and 
            visually cohesive through a well-structured UI system.
          </p>
        </div>

        {/* UI Screens - Vertical Layout */}
        <div className="max-w-4xl mx-auto space-y-10">
          {[albix1, albix2, albix3, albix4].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Albix UI Screenshot ${i + 1}`}
                className="w-full max-h-[700px] object-contain hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Albix;
