"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";
import pic_1 from "../../../public/xbox/pic_1.jpg";
import pic_1_mobile from "../../../public/xbox/pic_1_mobile.jpg";
import pic_2 from "../../../public/xbox/pic_2.jpg";
import pic_3 from "../../../public/xbox/pic_3.jpg";
import pic_4 from "../../../public/xbox/pic_4.jpg";
import pic_5 from "../../../public/xbox/pic_5.jpg";
import pic_6 from "../../../public/xbox/pic_6.jpg";
import pic_7 from "../../../public/xbox/pic_7.jpg";
import pic_8 from "../../../public/xbox/pic_8.jpg";
import pic_9 from "../../../public/xbox/pic_9.jpg";
import pic_10 from "../../../public/xbox/pic_10.jpg";
import pic_11 from "../../../public/xbox/pic_11.jpg";
import pic_12 from "../../../public/xbox/pic_12.jpg";
import pic_13 from "../../../public/xbox/pic_13.jpg";
import pic_14 from "../../../public/xbox/pic_14.jpg";

const Component = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <section className="font-segoeuibold">
      <section>
        <div className="flex flex-wrap">
          <div className="flex flex-wrap sm:w-1/2">
            <div className="px-1 sm:pr-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full ">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_3_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_3.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_3}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[3.2rem] xl:text-5xl sm:text-[36px] ">
                          Have an Amazon Fire TV stick? You can play Xbox. No
                          console required.
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play hundreds of games with Game Pass Ultimate.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            explore more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>

            <div className="px-1 sm:pr-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full sm:flex sm:flex-row ">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_4_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_4.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_4}
                          />
                        </picture>
                      </div>
                      <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Discover your next favorite game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play new games on day one. Enjoy hundreds of
                          high-quality games on console, PC, and cloud. Play
                          together with friends.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2">
            <div className="px-2 sm:pl-0">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full  sm:flex sm:flex-row-reverse">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_1_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_1.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_1}
                          />
                        </picture>
                      </div>
                      <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                          JOIN NOW FOR $1
                        </div>
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Discover your next favorite game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play new games on day one. Enjoy hundreds of
                          high-quality games on console, PC, and cloud. Play
                          together with friends.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
            <div className="sm:h-3/4 px-2 sm:pl-0 py-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full overflow-hidden">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_2_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_2.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_2}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[3.2rem] xl:text-5xl sm:text-[36px] ">
                          Elevate your game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Stay on target and play on console, PC, and mobile
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            learn more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sm:flex">
          <div className="px-2 sm:pl-0">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_5_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_5.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_5}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Discover your next favorite game
                      </div>
                      <div className="text-xs mb-5 xl:text-xl font-segoeui">
                        Play new games on day one. Enjoy hundreds of
                        high-quality games on console, PC, and cloud. Play
                        together with friends.
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="px-2 sm:pl-0">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_6_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_6.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_6}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Discover your next favorite game
                      </div>
                      <div className="text-xs mb-5 xl:text-xl font-segoeui">
                        Play new games on day one. Enjoy hundreds of
                        high-quality games on console, PC, and cloud. Play
                        together with friends.
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </section>
      <section>
        <div className="px-1 sm:pr-1">
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                <div className="relative">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        srcSet="./xbox/pic_7_mobile.jpg"
                        media="(max-width:639.95px)"
                      ></source>
                      <source
                        srcSet="./xbox/pic_7.jpg"
                        media="(min-width:640px)"
                      ></source>
                      <Image
                        className="hover:scale-110 sm:hover:scale-100 transition-all w-full"
                        width={1000}
                        height={1000}
                        src={pic_7}
                      />
                    </picture>
                  </div>
                  <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:bg-transparent right-0 bg-[#333] sm:w-2/5 p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                    <div className="text-2xl mb-5 font-bold leading-[3.2rem] xl:text-5xl sm:text-[36px] ">
                      Have an Amazon Fire TV stick? You can play Xbox. No
                      console required.
                    </div>
                    <div className="text-xs mb-5 xl:text-xl font-segoeui">
                      Play hundreds of games with Game Pass Ultimate.
                    </div>
                    <a
                      className="flex btn_parent mb-5 text-lg uppercase cursor-pointer bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6 py-2"
                      href="#"
                    >
                      <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                        learn more
                      </div>
                      <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>
      <section>
        <div className="sm:flex">
          <div className="px-2 sm:pl-0">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_8_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_8.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_8}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Discover your next favorite game
                      </div>
                      <div className="text-xs mb-5 xl:text-xl font-segoeui">
                        Play new games on day one. Enjoy hundreds of
                        high-quality games on console, PC, and cloud. Play
                        together with friends.
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="px-2 sm:pl-0">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_9_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_9.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_9}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Discover your next favorite game
                      </div>
                      <div className="text-xs mb-5 xl:text-xl font-segoeui">
                        Play new games on day one. Enjoy hundreds of
                        high-quality games on console, PC, and cloud. Play
                        together with friends.
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap sm:flex-row-reverse">
          <div className="flex flex-wrap sm:w-1/2">
            <div className="px-1 sm:pr-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full ">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_11_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_11.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_11}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[3.2rem] xl:text-5xl sm:text-[36px] ">
                          Have an Amazon Fire TV stick? You can play Xbox. No
                          console required.
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play hundreds of games with Game Pass Ultimate.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            explore more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>

            <div className="px-1 sm:pr-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full sm:flex sm:flex-row-reverse ">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_13_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_13.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_13}
                          />
                        </picture>
                      </div>
                      <div className="bg-transparent text-black sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Discover your next favorite game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play new games on day one. Enjoy hundreds of
                          high-quality games on console, PC, and cloud. Play
                          together with friends.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2">
            <div className="px-2 sm:pl-0">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full  sm:flex sm:flex-row">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_10_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_10.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_10}
                          />
                        </picture>
                      </div>
                      <div className="bg-transparent text-black sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                          JOIN NOW FOR $1
                        </div>
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Discover your next favorite game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Play new games on day one. Enjoy hundreds of
                          high-quality games on console, PC, and cloud. Play
                          together with friends.
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
            <div className="sm:h-3/4 px-2 sm:pl-0 py-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                    <div className="relative w-full overflow-hidden">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_12_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_12.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_12}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[3.2rem] xl:text-5xl sm:text-[36px] ">
                          Elevate your game
                        </div>
                        <div className="text-xs mb-5 xl:text-xl font-segoeui">
                          Stay on target and play on console, PC, and mobile
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                            learn more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default function Xbox() {
  return (
    <main className="bg-white">
      {/* <Carousel_sec /> */}
      <div>
        <Component />
      </div>
    </main>
  );
}
