import React from "react";
import { MeteorsBox } from "./MeteorsBox";
import { GiCash } from "react-icons/gi";
import { TbTransactionEuro, TbHomeHeart } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";

export function MeteorsGrid() {
  return (
    <>
    <h1 className="flex items-center justify-center mt-16 text-3xl lg:text-4xl font-bold text-purple dark:text-darkblue">
      Uobičajene aplikacije za kredit
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 mt-20 mx-auto container justify-center items-center">
      {/* Prikazujemo četiri instance MeteorsBox sa različitim podacima */}
      <MeteorsBox 
        icon= {<GiCash />}
        title="Dinarski keš kredit" 
        buttonText="Istraži"
        buttonLink="/krediti"
      />
      <MeteorsBox 
        icon={<TbTransactionEuro />}
        title="Krediti za refinansiranje" 
        buttonText="Istraži"
        buttonLink="/krediti"
      />
      <MeteorsBox 
        icon={<TbHomeHeart />}
        title="Stambeni krediti" 
        buttonText="Istraži"
        buttonLink="/"
      />
      <MeteorsBox 
        icon={<IoCarSportOutline />}
        title="Auto kredit" 
        buttonText="Istraži"
        buttonLink="/"
      />
    </div>
    </>
  );
}
