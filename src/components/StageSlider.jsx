import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stageSliderData from "./data/stageSliderData";
import CarCard from "./CarCard";
import whitegolf from "../assets/whitegolf.jpeg"
import renault from "../assets/renault.jpeg";
import jetta from "../assets/jetta.jpeg";
import golf6rgri from "../assets/golf6rgri.jpeg";
import passat from "../assets/passat.jpeg";
import gtd from "../assets/gtd.jpeg";
import tiguan from "../assets/tiguan.jpeg";
import golfblu from "../assets/golfblu.jpeg";
import gri from "../assets/gri.jpg";


import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";



const getInitialSlidesToShow = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const StageSlider = () => {
  const sliderRef = useRef(null);
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    lazyLoad: true,
    arrows: true,
    // autoplaySpeed: 4000,
    // autoplay: true,
    pauseOnHover: false,
    slidesToShow: getInitialSlidesToShow(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
  
      {
        breakpoint: 1024, // iPad landscape and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // iPad portrait and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          arrows: false, // optional (cleaner on mobile)
        },
      },
            {
        breakpoint: 412, // mobile
        settings: {
          slidesToShow: 1,
          arrows: false, // optional (cleaner on mobile)
        },
      },
    ],
    beforeChange: (prev, next) => {
      const prevSlideElement = sliderRef.current.innerSlider.list.querySelector(
        `[data-index ="${prev}"]`
      );
      const nextSlideElement = sliderRef.current.innerSlider.list.querySelector(
        `[data-index ="${next}"]`
      );
      if (prevSlideElement && nextSlideElement) {
        prevSlideElement.classList.add("slick-active");
      }
    },

  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">

      <Slider className="services-slider" {...settings} ref={sliderRef}>
      <CarCard
          image={renault} 
          title="Renault Megane "
          location="Tirana, Albania"
          seats={5}
          transmission="Manual"
          fuel="Diesel"
          price={25}
        />
        
        <CarCard
          image={whitegolf}
          title="Golf 6 R-LINE"
          location="Tirana International Airport (TIA/Rinas)"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />

        <CarCard
          image={jetta} 
          title="Jetta"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
              <CarCard
          image={golf6rgri} 
          title="Golf 6 R-LINE "
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
              <CarCard
          image={passat} 
          title="Passat"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
              <CarCard
          image={gtd} 
          title="Golf 6 GTD"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
            <CarCard
          image={tiguan} 
          title="Tiguan"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={40}
        />
         <CarCard
          image={golfblu} 
          title="Golf 6"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
         <CarCard
          image={gri} 
          title="Golf 6"
          location="Tirana, Albania"
          seats={5}
          transmission="Automatic"
          fuel="Diesel"
          price={30}
        />
      </Slider>
    </div>
  );
};
export default StageSlider;