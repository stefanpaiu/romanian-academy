import styles from "@/app/ui/home.module.css";
import Head from "next/head";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        width={100}
        height={100}
        src="logo.svg"
        className="m-auto py-4"
        alt="Romanian Academy Logo"
      />
      <h1 className="text-l text-white md:text-2xl md:leading-normal font-medium text-center w-full">
        The Romanian Academy
      </h1>
      <h2 className="text-m md:text-xl py-4 text-red-600 font-semibold text-center w-full">
        UNDER CONSTRUCTION
      </h2>
      <div className="container columns-1 md:columns-2 px-8 md:py-8 text-white">
        <div className="px-2 py-4 h-full">
          <div className="mx-16 text-center">
            <h1 className="text-l font-semibold md:text-xl capitalize">
              The only place you need
            </h1>
            <h2 className="text-m md:text-l py-4 font-semibold capitalize">
              To learn Romanian
            </h2>
            <h2 className="text-m md:text-l  font-semibold capitalize">
              As a second language.
            </h2>
            <h4 className="text-sm md:text-sm py-4 uppercase line-through">
              Duolingo / RomanianPod101
            </h4>
          </div>
        </div>
        <div className="px-2 py-4 h-full">
          <div className="mx-16 h-max bg-black">
            1914 translation by H. Rackham But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness.
          </div>
        </div>
      </div>
    </main>
  );
}
