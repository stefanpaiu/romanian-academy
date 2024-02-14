import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

import Image from "next/image";
import Footer from "./components/Footer";

export const metadata = {
  title: "The Romanian Academy",
  description: "The Romanian Academy makes learning Romanian more accessible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <Image
          fill
          src="landing-background.svg"
          className="background"
          alt="Screenshot of the dashboard project showing mobile version"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
