import CarCard from "./CarCard";
import whitegolf from "../assets/whitegolf.jpeg";

export default function Teaser() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
        
        <CarCard
          image={whitegolf} 
          title="Golf 5 2015"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={200}
        />

        <CarCard
          image="/tiguan.jpg"
          title="Volkswagen Tiguan 2015"
          location="Tirana International Airport (TIA/Rinas)"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={55}
        />

        <CarCard
          image="/tucson.jpg"
          title="Hyundai Tucson 2016"
          location="Tirana International Airport (TIA/Rinas)"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={55}
        />

      </div>
    </div>
  );
}