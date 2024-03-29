"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../contsxt/search";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section
      className="h-screen section  xl:h-[90vh] bg-[#b2b7c2]/10"
      id="home"
    >
      <div className="container mx-auto h-full xl:pt-10 ">
        <div className="flex  flex-col xl:flex-row   justify-center items-center xl:justify-start h-full">
          <div className=" text-center   xl:max-w-xl xl:text-left mt-32 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the finest <span className="text-accent">Global</span>
              {""}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal for any adventure withe our divers rang of
              affordanle and dependadble car rentlas
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative h-[50vh] w-full xl:-top-[25%]  "
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt="g"
              priority
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>

        {searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className="fixed top-[80px] z-10 w-full max-w-[1920px]"
          >
            <Search />
          </motion.div>
        ) : (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
            >
              <Search />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
