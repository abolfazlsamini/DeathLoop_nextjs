import Image from "next/image";

const Main_sec = () => {
  return (
    <section>
      <div className="relative min-h-120vh w-full">
        {/* <Image
          fill
          className="h-full -z-10 absolute fill-inherit object-cover"
          src={"/DEATHLOOP-main-mobile.jpg"}
        /> */}
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
              <button className=" bg-deathloop_orange transition ease-out delay-150 py-3 px-12 m-3 hover:bg-deathloop_orange_hover min-w-20 max-w-52">
                the button
              </button>
              <button className=" bg-deathloop_orange py-3 px-12 m-3 ease-out delay-150 hover:bg-deathloop_orange_hover min-w-20 max-w-52">
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
      <div>
        <div>
          <h2>
            Available Now on Xbox. Play it with Xbox Game Pass and PC Game Pass
          </h2>
          <p>
            Arkane's most highly-lauded game is now available on Xbox Series
            X|S! "DEATHLOOP" transports players to the lawless island of
            Blackreef in an eternal struggle between two extraordinary
            assassins.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="">
      <Main_sec />
    </main>
  );
}
