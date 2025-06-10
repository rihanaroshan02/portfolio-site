// src/pages/Innobiz.jsx
import React from "react";
import Layout from "../components/Layout"; // Adjust path as needed
import innobizMockup from "../assets/innobiz-mockup.png";
import img1 from "../assets/innobiz1.png";
import img2 from "../assets/innobiz2.png";
import img3 from "../assets/innobiz3.png";
import img4 from "../assets/innobiz4.png";
import img5 from "../assets/innobiz5.png";
import img6 from "../assets/innobiz6.png";
import img7 from "../assets/innobiz7.png";

const Innobiz = () => {
  const cardImages = [img1, img2, img3, img4, img5, img6, img7];

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
            This UI project was for Innobiz, where I designed 7 unique card components for their website’s projects section. The layout focuses on clean spacing, visual hierarchy, and consistent styling that aligns with their corporate brand.
          </p>
        </div>

        {/* Card Components */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center mb-8">Card Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardImages.map((img, i) => (
              <div
                key={i}
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
