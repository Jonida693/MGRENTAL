import React, { useState } from "react";
import { SiTiktok, SiWhatsapp, SiInstagram } from "react-icons/si";
import autoIcon from "../assets/auto-icon.jpeg";
import { GiGearStick } from "react-icons/gi";
import LazyImage from "./LazyImage";

export default function CarCard({ image, title, seats, transmission, fuel, bags, km, price, days }) {
  const [fullCasco, setFullCasco] = useState(false);
  const [autoImgError, setAutoImgError] = useState(false);
    const perDay = Number(price) + (fullCasco ? 10 : 0);
    const displayedPerDay = perDay;
    const displayedTotal = perDay * days;

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden
                      flex flex-col md:flex-row items-stretch">


        {/* Left image column */}
        <div className="w-full md:w-56 flex-shrink-0 h-56 md:h-auto overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <LazyImage
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
            rootMargin="300px"
          />
        </div>


        <div className="flex flex-col flex-1 p-4 gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
              <div className="text-sm text-gray-500">or similar compact</div>
            </div>
            <div className="shrink-0">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Free cancellation</span>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-lg">👤</span>
                <span>{seats} seats</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">🧳</span>
                <span>{bags}</span>
              </div>
              {/* km/day removed per request */}
            </div>

            <div className="space-y-2 text-right">
              <div className="flex items-center justify-end gap-3">
                {!autoImgError ? (
                  <img src={autoIcon} alt="transmission" className="h-5 w-5 object-contain" onError={() => setAutoImgError(true)} loading="lazy" decoding="async" />
                ) : (
                  <GiGearStick className="text-lg" />
                )}
                <span>{transmission}</span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-lg">⛽</span>
                <span>{fuel}</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Compact</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Airport pickup</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Mileage limit</span>
          </div>


          {/* Full casco moved to right column */}

        </div>

        {/* Right price column */}
        <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-gray-100 bg-white p-4 flex flex-col justify-between">
          <div className="text-right md:text-left">
            <div className="text-xs text-gray-500">Price per day</div>
            <div className="text-2xl font-extrabold text-gray-900">€{displayedPerDay}</div>
            {/* total removed per request */}
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-3 text-sm text-gray-700 mb-3">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded"
                checked={fullCasco}
                onChange={() => setFullCasco(!fullCasco)}
              />
                <span>Full casco +€10</span>
            </label>

            <a href="https://api.whatsapp.com/send/?phone=355692555505&text&type=phone_number&app_absent=0" aria-label="Contact via WhatsApp" className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-50 transition" style={{fontSize: '15px'}}>
              <SiWhatsapp className="h-5 w-5 text-green-600" />
              Contact via WhatsApp
            </a>
          </div>
        </div>

      </div>
    );
  }