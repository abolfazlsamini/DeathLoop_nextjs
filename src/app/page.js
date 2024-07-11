"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Main_sec = () => {
  return (
    <section>
      <div className="relative min-h-120vh w-full">
        <picture>
          <source
            srcSet="/DEATHLOOP-main-mobile.jpg"
            media="(max-width:959.95px)"
          ></source>
          <source
            srcSet="/DEATHLOOP-main-pc.webp"
            media="(min-width:960px)"
          ></source>
          <Image
            fill
            alt="main image"
            className="h-full -z-10 absolute fill-inherit object-cover"
            src={"/DEATHLOOP-main-mobile.jpg"}
          />
        </picture>

        <div className="flex items-center justify-center sm:justify-end sm:flex-row-reverse min-h-40vh w-full ">
          <div className="mt-64 sm:mt-20 sm:w-1/2 sm:pl-28">
            <div className="relative  w-full h-56">
              <Image alt="awards" fill src={"/Deathloop-left-main.png"} />
            </div>
            <div className="relative my-10 w-full h-10">
              <Image fill alt="logo" src={"/DEATHLOOP-logo-main.png"} />
            </div>
            <div className="flex items-center flex-col">
              <button className=" bg-deathloop_orange transition ease-out duration-300 py-3 px-12 m-3 hover:bg-deathloop_orange_hover min-w-20 max-w-52">
                the button
              </button>
              <button className=" bg-deathloop_orange py-3 px-12 m-3 ease-out duration-300 hover:bg-deathloop_orange_hover min-w-20 max-w-52">
                the very longer button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex justify-center my-5 space-x-5">
            <li>
              <a
                href="#"
                className="text-gray-500 ease-in-out delay-150 hover:text-deathloop_orange"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"
                    clirrule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 ease-in-out delay-150 hover:text-deathloop_orange"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 ease-in-out delay-150 hover:text-deathloop_orange"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 ease-in-out delay-150 hover:text-deathloop_orange"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Xbox_sec = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row-reverse xbox bg-deathloop_green">
        <div className="w-full sm:my-10 pt-52 sm:py-5 px-5">
          <h3 className="uppercase ">
            Available Now on Xbox. Play it with Xbox Game Pass and PC Game Pass
          </h3>
          <p>
            Arkane's most highly-lauded game is now available on Xbox Series
            X|S! "DEATHLOOP" transports players to the lawless island of
            Blackreef in an eternal struggle between two extraordinary
            assassins.
          </p>
          <button className="text-black bg-white transition ease-out duration-300 py-3 px-12 m-3 hover:bg-gray-400 min-w-20 max-w-52">
            the button
          </button>
        </div>
        <div className="flex justify-center align-middle sm:mx-5 w-full my-5 sm:my-10">
          <div className="relative hover:-translate-y-2 mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
            <div className="z-10 bg-gradient-to-b max-w-3xl rounded-md from-black to-transparent h-1/3 w-full  flex absolute top-0">
              <span className="flex absolute right-9 top-6 py-2 text-slate-50 bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                <svg
                  class=" flex align-middle size-7 ml-3 mt-2"
                  focusable="false"
                  fill="white"
                  viewBox="0 0 26 26"
                  aria-hidden="true"
                >
                  <rect class="frame" x="50" y="50" width="50" height="50" />
                  <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                </svg>
                {/* <span className="pr-2">VIDEO</span> */}
              </span>
            </div>
            <picture className="max-w-3xl">
              <Image
                width={1000}
                height={1000}
                src={"/deathloop-xbox.jpg "}
                className="w-full rounded-md"
              />
            </picture>
            <div className="text-gray-50  rounded-md max-w-3xl z-10 pl-10 font-bold bg-gradient-to-t from-black to-transparent h-1/3 w-full bottom-0 absolute">
              <span className="flex text-slate-50">
                <svg
                  class="mt-1 mr-2 size-4"
                  focusable="false"
                  fill="white"
                  viewBox="0 0 22 22"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                <span> VIDEO</span>
              </span>
              <div>OFFICIAL XBOX LAUNCHER TRAILER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Goldenloop_sec = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: "url('../../public/goldenloop-bg.jpg')",
        }}
      >
        goldloop
      </div>
    </section>
  );
};
const Carousel_sec = () => {
  return (
    <Carousel
      emulateTouch
      // dynamicHeight
      infiniteLoop
      renderThumbs={() => {
        return;
      }}
      onChange={() => {
        document.getElementsByClassName("slider-wrapper")[0].style.height =
          "10000px";
        // alert("aksjd");
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
          // padding: "3px",
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
      // showStatus
    >
      <div>
        <img src="video.png" />
        <div className="w-full h-70vh">
          <div className="drag absolute top-2/3">
            <h2>IF AT FIRST YOU DON'T SUCCEED…</h2>
            <p>
              DEATHLOOP transports you to the mysterious island of Blackreef,
              where an eternal struggle between two extraordinary assassins will
              determine the island's future. As Colt, you must find a way to put
              an end to the timeloop trapping the island in an endless cycle,
              all while being hunted by the island's inhabitants. Using your
              powerful weapons and abilities, you'll need to take out 8 key
              targets across the stunning, yet chaotic, island before the day
              resets in order break the loop once and for all. But lurking in
              the shadows is rival assassin Julianna whose sole mission is to
              take Colt out and keep the loop going. Learn from each cycle, try
              new paths and approaches, and break the loop.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_1.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="carousel_2.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="carousel_3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="carousel_4.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default function Home() {
  return (
    <main className="">
      <Main_sec />
      <Xbox_sec />
      <Goldenloop_sec />
      <Carousel_sec />
    </main>
  );
}
