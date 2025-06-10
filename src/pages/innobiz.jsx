// src/pages/Innobiz.jsx
import React from "react";
import Layout from "../components/Layout"; // Adjust path if needed

// Hero Mockup
import innobizMockup from "../assets/innobiz-mockup.png";

// Card Components
import img1 from "../assets/innobiz1.png";
import img2 from "../assets/innobiz2.png";
import img3 from "../assets/innobiz3.png";
import img4 from "../assets/innobiz4.png";
import img5 from "../assets/innobiz5.png";
import img6 from "../assets/innobiz6.png";
import img7 from "../assets/innobiz7.png";

// Landing Page Images
import landing1 from "../assets/innobiz-landing1.png";
import landing2 from "../assets/innobiz-landing2.png";
import landing3 from "../assets/innobiz-landing3.png";
import landing4 from "../assets/innobiz-landing4.png";
import landing5 from "../assets/innobiz-landing5.png";
import landing6 from "../assets/innobiz-landing6.png";

const Innobiz = () => {
  const cardImages = [img1, img2, img3, img4, img5, img6, img7];
  const landingImages = [landing1, landing2, landing3, landing4, landing5, landing6];

  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-8 py-16 lg:px-20 font-sans">
        {/* Hero */}
        <div className="flex justify-center mb-12">
          <img
            src={innobizMockup}
            alt="Innobiz Project Mockup"
            className="max-w-full w-[800px] rounded-xl shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
          <p>
            This UI/UX project for Innobiz included the full website landing page design as well as several custom-designed card components for the projects section. The goal was a clean, modern layout with strong visual hierarchy and consistent branding.
          </p>
        </div>

        {/* Landing Page UI Designs */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Landing Page UI Designs</h2>
          <p className="text-center text-gray-600 mb-6">
            These screens show the high-fidelity UI for the Innobiz landing experience, crafted to align with brand identity and usability best practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {landingImages.map((img, i) => (
              <div
                key={`landing-${i}`}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Landing Page ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Card Components */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center mb-8">Card Components</h2>
          <p className="text-center text-gray-600 mb-6">
            These are custom-designed card components tailored for showcasing individual projects on the Innobiz site.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardImages.map((img, i) => (
              <div
                key={`card-${i}`}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Innobiz Card ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Innobiz;
