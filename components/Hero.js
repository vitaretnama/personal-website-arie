import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = (
  {
    // listUser = [
    //   {
    //     name: "Users",
    //     number: "390",
    //     icon: "/assets/Icon/heroicons_sm-user.svg",
    //   },
    //   {
    //     name: "Locations",
    //     number: "20",
    //     icon: "/assets/Icon/gridicons_location.svg",
    //   },
    //   {
    //     name: "Server",
    //     number: "50",
    //     icon: "/assets/Icon/bx_bxs-server.svg",
    //   },
    // ],
  }
) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="w-full bg-fixed"
      style={{
        backgroundImage: "url('/assets/bgcoffe.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-4xl lg:text-7xl xl:text-6xl font-medium text-black-600 leading-normal">
                Arie Aripin
              </h1>
              <p className="text-black-500 mt-4 mb-6 text-2xl">
                Pemerhati Anak, Gen Z dan Sociopreneur
              </p>
              <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-brown-500 hover:shadow-orange-md transition-all outline-none">
                Video Profile
              </button>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src=""
                  quality={100}
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;