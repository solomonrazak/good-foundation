import React from "react";

import bg from "../assets/images/foundation/bg.mp4";
import cover from "../assets/images/foundation/cover.JPG";

const Header = () => {
  return (
    <main className="w-full h-[38rem] container mx-auto">
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        poster={cover}
      />
      <div className="flex absolute w-full h-full top-5">
        <p className="text-[30px] text-center md:text-6xl p-5 md:text-start font-medium text-white pt-48">
          A dynamic day and boarding school for final years in a serene environment
          serving Nursery through to Junior High School{" "}
        </p>
      </div>
    </main>
  );
};

export default Header;
