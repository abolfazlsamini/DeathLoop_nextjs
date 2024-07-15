"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";
import pic_1 from "../../../public/xbox/pic_1.jpg";
import pic_2 from "../../../public/xbox/pic_2.jpg";
import pic_3 from "../../../public/xbox/pic_3.jpg";
import pic_4 from "../../../public/xbox/pic_4.jpg";

const Component = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <section>
      <section>
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 sm:h-3/4">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full px-4 ">
                    <div>
                      <Image width={1000} height={1000} src={pic_3} />
                    </div>
                    <div className="absolute bottom-1/2">
                      have an amazon fire tv
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>

          <div className="sm:w-1/2">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full px-4 sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2">
                      <Image width={1000} height={1000} src={pic_1} />
                    </div>
                    <div className="bg-xbox_green sm:w-1/2">
                      have an amazon fire tv
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="sm:w-1/2">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full px-4 sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2">
                      <Image width={1000} height={1000} src={pic_4} />
                    </div>
                    <div className="bg-xbox_green sm:w-1/2">
                      have an amazon fire tv
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="sm:w-1/2 sm:h-3/4">
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={inView ? "animated" : "opacity-5"}>
                  <div className="relative w-full px-4">
                    <div>
                      <Image width={1000} height={1000} src={pic_2} />
                    </div>
                    <div className="absolute bottom-1/2">
                      have an amazon fire tv
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </section>
  );
};

const Carousel_sec = () => {
  return (
    <Carousel
      animationHandler={(props, state) => {
        const transitionTime = props.transitionTime + "ms";
        const transitionTimingFunction = "ease-in-out";

        let slideStyle = {
          position: "absolute",
          display: "block",
          zIndex: -2,
          minHeight: "100%",
          opacity: 0,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          transitionTimingFunction: transitionTimingFunction,
          msTransitionTimingFunction: transitionTimingFunction,
          MozTransitionTimingFunction: transitionTimingFunction,
          WebkitTransitionTimingFunction: transitionTimingFunction,
          OTransitionTimingFunction: transitionTimingFunction,
        };

        if (!state.swiping) {
          slideStyle = {
            ...slideStyle,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime,
          };
        }

        return {
          slideStyle,
          selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
          prevStyle: { ...slideStyle },
        };
      }}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center  opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ChevronLeftIcon className="size-20 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ChevronRightIcon className="size-20 text-white" />
          </div>
        );
      }}
      emulateTouch
      preventMovementUntilSwipeScrollTolerance
      infiniteLoop
      renderThumbs={() => {
        return;
      }}
      statusFormatter={() => {
        return;
      }}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          backgroundColor: "black",
          borderRadius: "50%",
          cursor: "pointer",
          width: "16px",
          height: "16px",
          display: "inline-block",
          border: "1px solid white",
        };
        const style = isSelected
          ? { ...defStyle, backgroundColor: "white" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          ></span>
        );
      }}
    >
      <div>
        <img src="video.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5">SIGNATURE ARKANE GAMEPLAY</h2>
            <p className="leading-5 xl:leading-6">
              The award-winning team at Arkane Lyon brings you DEATHLOOP, an
              innovative take on first-person action that will allow players to
              choose their preferred playstyle, stealthily sneaking through
              levels or barreling into the fight, guns-blazing. Armed with a
              powerful roster of otherworldly powers, as well as an arsenal of
              savage weaponry, players will combine these deadly tools for
              takedowns that are as striking as they are devastating. By
              choosing their powers and weapons, players will fight to survive
              this deadly game of hunter vs hunted.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_1.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5">SIGNATURE ARKANE GAMEPLAY</h2>
            <p className="leading-5 xl:leading-6">
              The award-winning team at Arkane Lyon brings you DEATHLOOP, an
              innovative take on first-person action that will allow players to
              choose their preferred playstyle, stealthily sneaking through
              levels or barreling into the fight, guns-blazing. Armed with a
              powerful roster of otherworldly powers, as well as an arsenal of
              savage weaponry, players will combine these deadly tools for
              takedowns that are as striking as they are devastating. By
              choosing their powers and weapons, players will fight to survive
              this deadly game of hunter vs hunted.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_2.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5">SIGNATURE ARKANE GAMEPLAY</h2>
            <p className="leading-5 xl:leading-6">
              The award-winning team at Arkane Lyon brings you DEATHLOOP, an
              innovative take on first-person action that will allow players to
              choose their preferred playstyle, stealthily sneaking through
              levels or barreling into the fight, guns-blazing. Armed with a
              powerful roster of otherworldly powers, as well as an arsenal of
              savage weaponry, players will combine these deadly tools for
              takedowns that are as striking as they are devastating. By
              choosing their powers and weapons, players will fight to survive
              this deadly game of hunter vs hunted.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_3.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5">SIGNATURE ARKANE GAMEPLAY</h2>
            <p className="leading-5 xl:leading-6">
              The award-winning team at Arkane Lyon brings you DEATHLOOP, an
              innovative take on first-person action that will allow players to
              choose their preferred playstyle, stealthily sneaking through
              levels or barreling into the fight, guns-blazing. Armed with a
              powerful roster of otherworldly powers, as well as an arsenal of
              savage weaponry, players will combine these deadly tools for
              takedowns that are as striking as they are devastating. By
              choosing their powers and weapons, players will fight to survive
              this deadly game of hunter vs hunted.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_4.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5">SIGNATURE ARKANE GAMEPLAY</h2>
            <p className="leading-5 xl:leading-6">
              The award-winning team at Arkane Lyon brings you DEATHLOOP, an
              innovative take on first-person action that will allow players to
              choose their preferred playstyle, stealthily sneaking through
              levels or barreling into the fight, guns-blazing. Armed with a
              powerful roster of otherworldly powers, as well as an arsenal of
              savage weaponry, players will combine these deadly tools for
              takedowns that are as striking as they are devastating. By
              choosing their powers and weapons, players will fight to survive
              this deadly game of hunter vs hunted.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default function Xbox() {
  return (
    <main>
      {/* <Carousel_sec /> */}
      <div>
        <Component />
      </div>
    </main>
  );
}
