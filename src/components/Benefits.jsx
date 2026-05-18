import React from "react";
import "../App.css"
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";

const Benefits = () => {
  return (
    <section className="bg-white py-12 container">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-3">
        <Feature
          image={benefit1}
          title="24/7 roadside assistance"
          description="Help is always available when you need it"
        />
        <Feature
          image={benefit2}
          title="Unlimited mileage"
          description="Drive as far as you want, no limits"
        />
        <Feature
          image={benefit3}
          title="Airport pick-up & drop-off"
          description="Convenient locations at major airports"
        />
      </div>
    </section>
  );
};

const Feature = ({ image, title, description }) => {
  return (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;