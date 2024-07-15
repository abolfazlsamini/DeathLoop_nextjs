"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import pic_1 from "../../public/xbox/carousel_1_pc.jpg";
import pic_2 from "../../public/xbox/carousel_2_pc.jpg";
import pic_3 from "../../public/xbox/carousel_3_pc.jpg";

export default function Carousel() {
  const [active_img, setActive_img] = useState(1);
  const list = {
    0: [
      "/xbox/pic_3_mobile.jpg",
      "Rocket Motorbiker",
      "Its show time in rocker",
      "#",
    ],
    1: [
      "/xbox/pic_3_mobile.jpg",
      "Vortex",
      "Kill your enemy and get the prize",
      "#",
    ],
    2: [
      "/xbox/pic_3_mobile.jpg",
      "Helenic conquest",
      "Build your castle, defend it, attack, and upgrade",
      "#",
    ],
    3: [
      "/xbox/pic_3_mobile.jpg",
      "Tropical Havoc",
      "Welcome to our fantastic island, where nothing makes sense",
      "#",
    ],
  };

  function next() {
    if (active_img < 3) setActive_img(active_img + 1);
    else setActive_img(1);
  }
  function back() {
    if (active_img > 0) setActive_img(active_img);
    else setActive_img(3);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 3000);

    return () => clearInterval(interval);
  }, [active_img]);

  return (
    <section>
      <div>
        <div className="relative">
          <div onClick={next} className="absolute left-0 top-1/2">
            next
          </div>
          <div>
            <picture>
              <source
                srcSet={`./xbox/carousel_${active_img}_mobile.jpg`}
                media="(max-width:639.95px)"
              ></source>
              <source
                srcSet="./xbox/carousel_1_pc.jpg"
                media="(min-width:640px)"
              ></source>

              <Image src={pic_1} width={1000} height={1000} alt="" />
            </picture>
          </div>
          <div className="absolute bottom-0">
            <div>nba</div>
          </div>
        </div>
      </div>
    </section>
  );
}
