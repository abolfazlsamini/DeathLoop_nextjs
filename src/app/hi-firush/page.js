"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel from "../carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";

import mainpic from "../../../public/hifi/mainpic.png";
import mainpic_logo from "../../../public/hifi/mainpic_logo.png";
// import mainpic_logo from "../../../public/hifi/mainpic_logo.png";

const Main_sec = () => {
  return (
    <section>
      <div className="main_bg">
        <div className="sm:w-3/4 max-w-[80rem] flex mx-auto items-center">
          <div>
            <div className="relative">
              <picture>
                <source
                  srcSet="./hifi/mainpic_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="./hifi/mainpic.png"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  className="w-full"
                  width={1000}
                  height={1000}
                  src={mainpic}
                />
              </picture>
              <div className="absolute pt-96 bottom-0 bg-hifi_blue_gradient w-full">
                <div className="absolute w-1/2 bottom-10 sm:w-1/3 left-1/2 -translate-x-1/2">
                  <Image alt="" width={1000} height={1000} src={mainpic_logo} />
                </div>
                <div className="relative border h-20 w-max">
                  <svg viewBox="0 0 496 100" className="w-full h-full">
                    <path
                      fill="#ff0000"
                      stroke="#000"
                      strokeWidth="5"
                      d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                    />
                  </svg>
                  <div className="absolute top-0 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                    WATCH VIDEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default function HifiRush() {
  return (
    <main className="bg-white">
      <title>HI-FI Rush</title>
      <Main_sec />
    </main>
  );
}
