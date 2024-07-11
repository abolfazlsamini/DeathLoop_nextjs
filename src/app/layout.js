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
      path: "../../public/fonts/FuturaBoldCondensed.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-univers55",
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
        className={`${inter.variable} ${furura.variable} ${univers55.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
