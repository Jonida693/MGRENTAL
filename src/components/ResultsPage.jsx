import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CarCard from "./CarCardSearch";
import { MapPin } from "lucide-react";
import CARS from "../components/data/CarsData";

const formatDate = (v) => { if (!v) return ""; const [y, m, d] = v.split("-"); return `${m}/${d}/${y}`; };
const formatTime = (v) => { if (!v) return ""; let [h, min] = v.split(":"); h = parseInt(h); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return `${h}:${min} ${ap}`; };

export default function ResultsPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);
  const [pickupDate,  setPickupDate]  = useState(params.get("pickupDate")  || "2026-04-18");
  const [pickupTime,  setPickupTime]  = useState(params.get("pickupTime")  || "10:00");
  const [dropoffDate, setDropoffDate] = useState(params.get("dropoffDate") || "2026-04-21");
  const [dropoffTime, setDropoffTime] = useState(params.get("dropoffTime") || "10:00");

  const days = Math.max(1, Math.round(
    (new Date(dropoffDate) - new Date(pickupDate)) / 86400000
  ));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* ── DESKTOP: horizontal one-row search bar ── */}
        <div className="hidden md:flex border-2 border-black-400 rounded-xl bg-white mb-6 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 flex-[2] border-r border-black-200">
            <MapPin size={15} className="text-gray-400 shrink-0" />
            <div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400">Pick-up location</div>
              <div className="text-sm font-semibold text-gray-900">Rinas Aeroporti "Nënë Tereza"</div>
            </div>
          </div>

          <DesktopField
            label="Pick-up date"
            display={formatDate(pickupDate)}
            inputType="date"
            inputVal={pickupDate}
            onChange={setPickupDate}
            hasBorder
          />

          <DesktopField
            label="Time"
            display={formatTime(pickupTime)}
            inputType="time"
            inputVal={pickupTime}
            onChange={setPickupTime}
            hasBorder
          />

          <DesktopField
            label="Drop-off date"
            display={formatDate(dropoffDate)}
            inputType="date"
            inputVal={dropoffDate}
            onChange={setDropoffDate}
            hasBorder
          />

          <DesktopField
            label="Time"
            display={formatTime(dropoffTime)}
            inputType="time"
            inputVal={dropoffTime}
            onChange={setDropoffTime}
            hasBorder
          />

          <button className="bg-green-700 hover:bg-green-800 text-black font-bold px-8 transition-colors shrink-0">
            Search
          </button>
        </div>

        {/* ── MOBILE: collapsible search panel ── */}
        <div className="md:hidden bg-white border-2 border-black-400 rounded-xl mb-5 overflow-hidden">
          <div
            className="flex justify-between items-center px-4 py-3 font-bold text-gray-900 cursor-pointer hover:bg-gray-50"
            onClick={() => setEditOpen(!editOpen)}
          >
            <span>Edit search</span>
            <span className="text-gray-400 text-lg">{editOpen ? "✕" : "▾"}</span>
          </div>
          {editOpen && (
            <div className="px-3 pb-3 space-y-2">
              <div className="border-[1.5px] border-black-400 rounded-lg flex items-center gap-2 px-3 py-2.5">
                <MapPin size={15} className="text-gray-500 shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400">Pick-up location</div>
                  <div className="text-sm font-semibold">Rinas Aeroporti "Nënë Tereza"</div>
                </div>
              </div>
              <EditRow
                leftLabel="Pick-up date" leftVal={formatDate(pickupDate)}
                leftInputType="date" leftInputVal={pickupDate} onLeftChange={setPickupDate}
                rightLabel="Time" rightVal={formatTime(pickupTime)}
                rightInputType="time" rightInputVal={pickupTime} onRightChange={setPickupTime}
              />
              <EditRow
                leftLabel="Drop-off date" leftVal={formatDate(dropoffDate)}
                leftInputType="date" leftInputVal={dropoffDate} onLeftChange={setDropoffDate}
                rightLabel="Time" rightVal={formatTime(dropoffTime)}
                rightInputType="time" rightInputVal={dropoffTime} onRightChange={setDropoffTime}
              />
              <button className="w-full bg-green-700 hover:bg-green-800 text-black font-bold py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 hidden md:block">
            {CARS.length} cars available
          </h2>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white text-sm font-medium text-gray-700 cursor-pointer ml-auto">
            ↕ Price (lowest first) ▾
          </div>
        </div>

        <h2 className="md:hidden text-xl font-bold text-gray-900 mb-3">
          {CARS.length} cars available
        </h2>

          
        <div className="space-y-4">
          {CARS.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              title={car.title}
              location={car.location}
              seats={car.seats}
              transmission={car.transmission}
              fuel={car.fuel}
              bags={car.bags}
              km={car.km}
              price={car.price}
              days={days}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

/* ── Desktop inline field ── */
const DesktopField = ({ label, display, inputType, inputVal, onChange, hasBorder }) => {
  const ref = useRef();
  return (
    <div
      className={`relative flex items-center px-4 py-3 flex-1 cursor-pointer hover:bg-yellow-50 transition-colors ${hasBorder ? "border-r border-black-200" : ""}`}
      onClick={() => ref.current?.showPicker()}
    >
      <div>
        <div className="text-[9px] uppercase tracking-widest text-gray-400">{label}</div>
        <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">{display}</div>
      </div>
      <input
        ref={ref}
        type={inputType}
        value={inputVal}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
      />
    </div>
  );
};

/* ── Mobile 2-col edit row ── */
const EditRow = ({ leftLabel, leftVal, leftInputType, leftInputVal, onLeftChange, rightLabel, rightVal, rightInputType, rightInputVal, onRightChange }) => {
  const leftRef = useRef();
  const rightRef = useRef();
  return (
    <div className="border-[1.5px] border-black-400 rounded-lg flex overflow-hidden">
      <div className="relative flex-1 flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-yellow-50"
        onClick={() => leftRef.current?.showPicker()}>
        <div className="min-w-0">
          <div className="text-[9px] uppercase tracking-widest text-gray-400">{leftLabel}</div>
          <div className="text-sm font-semibold">{leftVal}</div>
        </div>
        <input ref={leftRef} type={leftInputType} value={leftInputVal}
          onChange={(e) => onLeftChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
      </div>
      <div className="relative flex-1 flex items-center gap-2 px-3 py-2.5 border-l-[1.5px] border-black-400 cursor-pointer hover:bg-yellow-50"
        onClick={() => rightRef.current?.showPicker()}>
        <div className="min-w-0">
          <div className="text-[9px] uppercase tracking-widest text-gray-400">{rightLabel}</div>
          <div className="text-sm font-semibold">{rightVal}</div>
        </div>
        <input ref={rightRef} type={rightInputType} value={rightInputVal}
          onChange={(e) => onRightChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
      </div>
    </div>
  );
};