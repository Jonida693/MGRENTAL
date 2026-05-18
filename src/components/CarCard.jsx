
import React, { useState } from "react";
import { Heart, Share2, Users, Fuel } from "lucide-react";
import autoIcon from "../assets/auto-icon.jpeg";
import { GiGearStick } from "react-icons/gi";
import { SiWhatsapp } from "react-icons/si";
import LazyImage from "./LazyImage";


export default function CarCard({
  image,
  title,
  location,
  seats,
  transmission,
  fuel,
  price,
}) {
  const [fullCasco, setFullCasco] = useState(false);
  const [autoImgError, setAutoImgError] = useState(false);
  const displayedPrice = Number(price) + (fullCasco ? 10 : 0);
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full">
      {/* Image Section */}
      <div className="relative">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover"
          rootMargin="300px"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        {/* Location removed per request */}

        {/* Specs */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-2 rounded-full">
            <Users size={16} />
            {seats} seats
          </div>

          <div className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-2 rounded-full">
              {!autoImgError ? (
              <img src={autoIcon} alt="auto" className="h-4 w-4 object-contain" onError={(e) => { setAutoImgError(true); }} loading="lazy" decoding="async" />
            ) : (
              <GiGearStick size={16} />
            )}
            {transmission}
          </div>

          <div className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-2 rounded-full">
            <Fuel size={16} />
            {fuel}
          </div>
        </div>

        {/* Availability + Price */}
        <div className="flex justify-between items-center mb-6">
          <span className=" text-green-700 text-sm px-4 py-2 rounded-full font-medium">
            
          </span>

          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              €{displayedPrice}
            </p>
              <span className="text-sm text-gray-500">/ day</span>
              {/* Removed explicit +€10 note per design; checkbox controls price */}
              <div className="text-sm text-gray-500 mt-1">{fullCasco ? "Full casco included" : ""}</div>
          </div>
        </div>

        {/* Full casco toggle */}
        <label className="flex items-center gap-3 text-sm text-gray-700 mb-3">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded"
            checked={fullCasco}
            onChange={() => setFullCasco(!fullCasco)}
          />
          <span>Full casco +€10</span>
        </label>

        {/* Contact via WhatsApp (booking button removed) */}
        <a href="https://api.whatsapp.com/send/?phone=355692555505&text&type=phone_number&app_absent=0" aria-label="Contact via WhatsApp" className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
          <SiWhatsapp className="h-5 w-5 text-green-600" />
          Contact via WhatsApp
        </a>
      </div>
    </div>
  );
}