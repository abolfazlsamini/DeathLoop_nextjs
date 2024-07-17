"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel from "../carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";

import mainpic from "../../../public/hifi/mainpic.png";

const Main_sec = () => {
  return (
    <section>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default function HifiRush() {
  return <main className="bg-white"></main>;
}
