"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardSection() {
  return (
    <>
    <h1 className="flex items-center justify-center text-3xl mb-16 font-bold lg:text-4xl">
      Zašto odabrati nas?
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-4">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Štedimo Vaše vreme
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Uštedite vreme i novac. Bez poseta banci, besplatno pronalazimo idealno rešenje prilagođeno Vašim potrebama.
          </p>
        </div>
        <Image
          src="/savetnica.webp"
          width={350}
          height={300}
          alt="linear demo image"
          priority={false}
          className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Najbolja ponuda
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Proučavamo ponude svih banaka u Republici Srbiji i u najkraćem roku nalazimo optimalno rešenje za Vas.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sigurnost i privatnost
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Vaša sigurnost i privatnost imaju prioritet. Brinemo o Vama i za Vas nalazimo idealno rešenje u najkraćem roku.
          </p>
        </div>
        <Image
          src="/kreditnisavetnik.webp"
          width={350}
          height={300}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[7%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  );
}
