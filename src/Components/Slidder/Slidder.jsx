import React from "react";
import "./Slidder.scss"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import slide1 from "../../Assets/illustration/slide1.jpg";
import slide2 from "../../Assets/illustration/slide2.jpg";
import slide3 from "../../Assets/illustration/slide3.jpg";

export default function Slidder() {
  return (
    <div className="slidder">
      <Splide
        options={{
          type : 'loop',
          width:"1200px",
          gap: "20px",
          autoplay: true,
          interval: 4000,
        }}
      >
        <SplideSlide>
          <img src={slide1} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={slide2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={slide3} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}
