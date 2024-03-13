import styles from "@/app/ui/home.module.css";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

import Head from "next/head";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <Image
        width={75}
        height={75}
        src="logo.svg"
        className="m-auto py-6"
        alt="Romanian Academy Logo"
      />
      <h1 className="text-2xl md:text-3xl leading-normal font-medium text-white text-center">
        The Romanian Academy
      </h1>
      <h2 className="text-lg md:text-xl py-4 text-ro-orange text-center">
        We’re cooking something nice for you ...
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row pl-0 md:pl-16 px-8 md:py-8 text-white">
        <div className="flex-1 px-2 py-4">
          <div className="mx-16">
            <h1 className="text-xl md:text-2xl font-semibold capitalize text-ro-blue">
              The only place you need
            </h1>
            <h2 className="text-lg md:text-xl sm: pt-4 capitalize">
              To learn Romanian
            </h2>
            <h2 className="text-lg md:text-xl sm: pt-4 capitalize">
              As a second language.
            </h2>
            <h3 className="text-sm md:text-md sm:md text-ro-blue pt-4">
              [No Green Owls. No A.I. Generated Podcasts]
            </h3>
            <ul className="pl-12 pt-4">
              <li className="flex text-md md:text-l font-semibold uppercase">
                <span className="my-2">
                  <ShieldCheckIcon className="h-6 w-6 text-ro-blue"></ShieldCheckIcon>
                </span>
                <p className="ml-2 leading-10">on demand courses</p>
              </li>
              <li className="flex text-md md:text-l font-semibold uppercase">
                <span className="my-2">
                  <ShieldCheckIcon className="h-6 w-6 text-ro-blue"></ShieldCheckIcon>
                </span>
                <p className="ml-2 leading-10">cultural blog</p>
              </li>
              <li className="flex text-md md:text-l font-semibold uppercase">
                <span className="my-2">
                  <ShieldCheckIcon className="h-6 w-6 text-ro-blue"></ShieldCheckIcon>
                </span>
                <p className="ml-2 leading-10">learning materials </p>
              </li>
              <span className="text-md md:text-l uppercase leading-10">
                ... and more
              </span>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-2 py-4">
          <div className="mr-0 md:mr-16 p-8 bg-dark-grey rounded-md h-full">
            <div className="container pb-6">
              <p className="leading-2">
                While we are working hard on building courses,
              </p>
              <p className="leading-2 font-bold">Add your email here</p>
              <p className="leading-2">
                To be among the first to find out about our launch:
              </p>
              <div class="flex items-centered sm:col-span-4">
                <div class="mt-2 flex-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button
                  type="submit"
                  className="flex-1/4 ml-2 mt-2 px-4 py-2 text-sm font-medium text-white bg-ro-blue rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{ flexBasis: "25%" }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div>
              <p className="text-white">Or, check us out on:</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
