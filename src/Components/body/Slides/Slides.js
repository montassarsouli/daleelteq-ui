import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CallToAction from "./CallToAction";
import Stats from "./Stats";
import Tayseer from "./Tayseer";

const Slides = () => {
  return (
    <Slide>
      <div className="each-slide-effect">
        <div className="flex items-center justify-center bg-cover h-auto py-0">
          <span>
            <CallToAction />
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="flex items-center justify-center bg-cover h-auto py-0">
          <span>
            <Stats />
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center bg-cover h-auto py-0">
          <span>
            <Tayseer />
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default Slides;
