import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const furura = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaBoldCondensed.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});
export const univers55 = localFont({
  src: [
    {
      path: "../../public/fonts/Univers55Roman.latin.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-univers55",
});
export const montera = localFont({
  src: [
    {
      path: "../../public/fonts/montserratsemibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montera",
});
export const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/montserratsemibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});
export const segoeuibold = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/segoeuibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoeuibold",
});
export const segoeui = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/segoeui.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoeui",
});
export const seoproblack = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/seoproblack.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-seoproblack",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeathLoop",
  description: "DeathLoop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${furura.variable} 
          ${univers55.variable} 
          ${montera.variable} 
          ${roboto.variable}
          ${segoeuibold.variable}
          ${segoeui.variable}
          ${seoproblack.variable}
          `}
      >
        {children}
      </body>
    </html>
  );
}
