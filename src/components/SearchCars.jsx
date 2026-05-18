import React, { useState, useRef } from "react";
import "../App.css";
import backgroundImage from "../assets/bac.avif";
import { useNavigate } from "react-router-dom";


const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3"/>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const formatDate = (val) => {
  if (!val) return "";
  const [y, m, d] = val.split("-");
  return `${m}/${d}/${y}`;
};
const formatTime = (val) => {
  if (!val) return "";
  let [h, min] = val.split(":");
  h = parseInt(h);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${min} ${ampm}`;
};

// Clickable field — hidden input covers the whole div, display text shown on top
const DateField = ({ label, value, onChange, border = true }) => {
  const ref = useRef();
  return (
    <div
      onClick={() => ref.current?.showPicker()}
      className={`relative flex items-center gap-2.5 px-4 py-3 flex-1 cursor-pointer hover:bg-black-50 transition-colors
        ${border ? "border-r-2 border-black-400" : ""}`}
    >
      <CalendarIcon />
      <div className="flex flex-col min-w-0">
        <span className="text-[9.5px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{formatDate(value)}</span>
      </div>
      <input
        ref={ref}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

const TimeField = ({ label, value, onChange, border = true }) => {
  const ref = useRef();
  return (
    <div
      onClick={() => ref.current?.showPicker()}
      className={`relative flex items-center gap-2.5 px-4 py-3 cursor-pointer hover:bg-yellow-50 transition-colors
        ${border ? "border-r-2 border-black-400" : ""}`}
      style={{ flex: "0.9" }}
    >
      <ClockIcon />
      <div className="flex flex-col min-w-0">
        <span className="text-[9.5px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{formatTime(value)}</span>
      </div>
      <input
        ref={ref}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};


const SearchCars = () => {
  const navigate = useNavigate();
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);

  const formatDateValue = (date) => date.toISOString().split("T")[0]; // "YYYY-MM-DD"
  const formatTimeValue = () => {
    const h = String(today.getHours()).padStart(2, "0");
    const m = String(today.getMinutes()).padStart(2, "0");
    return `${h}:${m}`;
  };
  const [pickupDate,  setPickupDate]  = useState(formatDateValue(today));
  const [pickupTime,  setPickupTime]  = useState(formatTimeValue());
  const [dropoffDate, setDropoffDate] = useState(formatDateValue(threeDaysLater));
  const [dropoffTime, setDropoffTime] = useState(formatTimeValue());

  const handleSearch = () => {
    // keep the path at `/` so reload won't 404 on static hosting
    navigate(`/?pickupDate=${pickupDate}&pickupTime=${pickupTime}&dropoffDate=${dropoffDate}&dropoffTime=${dropoffTime}`);
  };
  

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="z-10 max-w-5xl w-full px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 font1">
        Reliable Car Rentals Across Albania
        </h1>
        <div className="flex flex-wrap gap-4 text-green-400 text-sm mb-5">
          <span>✓ Compact, SUV & luxury models</span>
          <span>✓ Affordable daily rates</span>
          <span>✓ Fast booking in minutes</span>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex border-[2.5px] border-black-400 rounded-lg bg-white/97 overflow-hidden">

          {/* Location — static */}
          <div className="flex items-center gap-2.5 px-4 py-3 border-r-2 border-black-400 min-w-0"
            style={{ flex: "1.8" }}>
            <LocationIcon />
            <div className="flex flex-col min-w-0">
              <span className="text-[9.5px] uppercase tracking-widest text-gray-400 mb-0.5">Pick-up location</span>
              <span className="text-sm font-semibold text-gray-900 truncate">Rinas Aeroporti "Nënë Tereza"</span>
            </div>
          </div>

          <DateField label="Pick-up date"  value={pickupDate}  onChange={setPickupDate} />
          <TimeField label="Time"          value={pickupTime}  onChange={setPickupTime} />
          <DateField label="Drop-off date" value={dropoffDate} onChange={setDropoffDate} />
          <TimeField label="Time"          value={dropoffTime} onChange={setDropoffTime} />

          <button onClick={handleSearch}  className="shrink-0 bg-green-700 hover:bg-green-800  font-bold px-7 text-sm tracking-wide transition-colors rounded-r-[5px] text-black">
            Search
          </button>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden border-[2.5px] border-black-400 rounded-lg bg-white/97 overflow-hidden">

          {/* Location */}
          <div className="flex items-center gap-2.5 px-4 py-3 border-b-2 border-black-400">
            <LocationIcon />
            <div>
              <div className="text-[9.5px] uppercase tracking-widest text-gray-400 mb-0.5">Pick-up location</div>
              <div className="text-sm font-semibold text-gray-900">Rinas Aeroporti "Nënë Tereza"</div>
            </div>
          </div>

          {/* Pick-up row */}
          <div className="flex border-b-2 border-black-400 ">
            <DateField label="Pick-up date"  value={pickupDate}  onChange={setPickupDate} />
            <TimeField label="Time"          value={pickupTime}  onChange={setPickupTime} border={false} />
          </div>

          {/* Drop-off row */}
          <div className="flex border-b-2 border-black-400">
            <DateField label="Drop-off date" value={dropoffDate} onChange={setDropoffDate} />
            <TimeField label="Time"          value={dropoffTime} onChange={setDropoffTime} border={false} />
          </div>

          <button  onClick={handleSearch} className="w-full bg-green-700 hover:bg-green-800  text-black font-bold py-4 text-base tracking-wide transition-colors ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchCars;