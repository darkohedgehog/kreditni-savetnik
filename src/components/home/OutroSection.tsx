import React from 'react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa6";

const OutroSection = () => {
  return (
    <div className="flex flex-col items-center py-16">
        <h1 className="text-center lg:max-w-[45vw] text-4xl font-bold text-purple dark:text-darkblue">
        Spremni ste podići <span className="dark:text-accentblue text-darkblue text-4xl">Vašu</span> finansijsku sigurnost na viši nivo?
        </h1>
        <p className="md:mt-10 my-5 text-center text-2xl text-light font-bold text-purple dark:text-accentblue">
        Kontaktirajte nas danas i razgovarajmo o tome kako Vam možemo pomoći u postizanju Vaših ciljeva.
        </p>
        <Link href={'/kontakt'}>
        <button className="relative inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accentwhite dark:text-accentblue backdrop-blur-3xl gap-3">
    Kontakt
    <FaLocationArrow />
    </span>
    </button>
        </Link>
      </div>
  )
}

export default OutroSection;