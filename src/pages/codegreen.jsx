import React from "react";
import Layout from "../components/Layout"; // Adjust path as needed
import codegreenMockup from "../assets/codegreen-mockup.png";
import light1 from "../assets/codegreen1.png";
import light2 from "../assets/codegreen3.png";
import light3 from "../assets/codegreen5.png";
import light4 from "../assets/codegreen7.png";
import dark1 from "../assets/codegreen2.png";
import dark2 from "../assets/codegreen4.png";
import dark3 from "../assets/codegreen6.png";
import dark4 from "../assets/codegreen8.png";

const Codegreen = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-8 py-16 lg:px-20 font-sans">
        {/* Hero */}
        <div className="flex justify-center mb-12">
          <img
            src={codegreenMockup}
            alt="Codegreen Project Mockup"
            className="max-w-full w-[800px] rounded-xl shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
          <p>
  Codegreen is a UI design project for a Dubai-based company, focused on a software testing report tool. I designed a clean, developer-friendly interface with both light and dark modes, including dashboard elements, typography, and a consistent visual system tailored to their brand.
</p>

        </div>

        {/* Light Mode */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Light Mode UI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[light1, light2, light3, light4].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={img}
                  alt={`Light Mode Screenshot ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode */}
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-center mb-8">Dark Mode UI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[dark1, dark2, dark3, dark4].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={img}
                  alt={`Dark Mode Screenshot ${i + 1}`}
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

export default Codegreen;
