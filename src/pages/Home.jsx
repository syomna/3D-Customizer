import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useSnapshot } from "valtio";
import CustomButton from "../components/CustomButton";
import {
  slideAnimation,
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
} from "../config/motion";
import state from "../store/index";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
          </motion.header>
          <motion.div
            className="flex-1 xl:justify-center justify-start flex flex-col gap-10"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] font-black text-black">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              // className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                title="Customize it"
                filled
                customStyles="w-fit px-4 py-2.5 font-bold text-sm mt-4"
                handleOnClick={() => (state.intro = false)}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
