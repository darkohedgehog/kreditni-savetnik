import React from "react";
import { MeteorsBox } from "./MeteorsBox";

export function MeteorsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 mt-24 mx-auto container justify-center items-center">
      {/* Prikazujemo četiri instance MeteorsBox sa različitim podacima */}
      <MeteorsBox 
        title="Meteors because they&apos;re cool" 
        description="I don&apos;t know what to write so I&apos;ll just paste something cool here." 
        buttonText="Explore"
        buttonLink="/"
      />
      <MeteorsBox 
        title="Shooting Stars" 
        description="Shooting stars are a sight to behold on a clear night." 
        buttonText="Discover"
        buttonLink="/"
      />
      <MeteorsBox 
        title="Asteroids and Meteors" 
        description="Learn about the difference between asteroids and meteors." 
        buttonText="Learn More"
        buttonLink="/"
      />
      <MeteorsBox 
        title="Meteor Showers" 
        description="Meteor showers happen at regular intervals each year." 
        buttonText="View Dates"
        buttonLink="/"
      />
    </div>
  );
}
