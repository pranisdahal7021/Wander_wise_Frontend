import React from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <section className="h-[680px] pt-50 items-center justify-center px-40 relative overflow-hidden">

        {/* content */}
        <div className="flex flex-col items-center gap-10 text-white">
      <h1 className="text-5xl font-bold">Plan your trip With wander wise</h1>
      <p>Welcome to WanderWise.Your travelling guide, where ever you go.</p>
      <CustomButton text="Get Started" />
      </div>

      {/* background image */}
      <div className="absolute -z-10 left-0 top-0 h-full w-full overflow-hidden">
        <img className="w-full h-full" src="https://wallpapercave.com/wp/wp5809562.jpg" alt="image" />
      </div>

      {/* black overlay */}
      <div className="absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-60 "></div>
    </section>
  );
};

export default Hero;
