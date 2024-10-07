import React, { ReactElement } from "react";
import { Meteors } from "../ui/meteors";
import Link from "next/link";


// Definišemo tipove za props
interface MeteorsBoxProps {
  title: string;
  icon: ReactElement;
  buttonText: string;
  buttonLink: string;
}

export function MeteorsBox({ title, icon, buttonText, buttonLink }: MeteorsBoxProps) {
  return (
    <div className="w-full relative max-w-xs mx-auto">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-lg blur-3xl" />
      <div className="relative shadow-xl bg-card-bg-light dark:bg-card-bg-dark border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center gap-8">

        <div className="flex items-center justify-center text-5xl text-blue-800">
          {icon}
        </div>

        <h1 className="font-bold text-xl text-accentblue dark:text-darkblue mb-4 relative z-50">
          {title}
        </h1>
        <Link
        href={buttonLink}>
        <button className="border px-4 py-1 rounded-lg border-gray-500 text-purple dark:text-accentwhite">
          {buttonText}
        </button>
        </Link>

        {/* Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
