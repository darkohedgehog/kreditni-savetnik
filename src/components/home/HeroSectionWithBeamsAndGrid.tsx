"use client";
import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export function HeroSectionWithBeamsAndGrid() {
 
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40"
    >
      <h2 className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl">
        <Balancer>
          Vaš partner u finansijskom,{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="text-black [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-white">
              <span className="">planiranju.</span>
            </div>
          </div>
        </Balancer>
      </h2>
      <p className="relative z-50 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200">
        Krediti na dlanu - Pristupačni krediti i stručni saveti. Vaš partner u finansijskom planiranju
      </p>
      <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20">
        <Link
          href="/kontakt"
          className="group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-black p-px px-4 py-2 text-center text-sm font-semibold leading-6 text-white no-underline transition duration-200 dark:bg-white dark:text-black sm:w-52"
        >
          Kontakt
        </Link>
        <Link
          href="/krediti"
          className="group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-white p-px px-4 py-2 text-sm font-semibold leading-6 text-black no-underline shadow-input transition duration-200 hover:-translate-y-0.5 dark:bg-neutral-800 dark:text-white sm:w-52"
        >
          Krediti
        </Link>
      </div>
      <div
        className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4"
      >
        <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
          <Image
            src="/savetnica-hero-banner.webp"
            alt="header"
            width={1920}
            height={1080}
            priority={false}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

