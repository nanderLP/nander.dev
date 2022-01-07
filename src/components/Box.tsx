import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BoxProps } from "../types/Box";
import styles from "../Box.module.css";

const Box: FC<BoxProps> = ({ children, ...props }) => {
  const boxControls = useAnimation();
  const textControls = useAnimation();
  const router = useRouter();

  const handleTap = async () => {
    Promise.all([
      textControls.start({ fontSize: "60px" }),
      ,
      boxControls.start(
        {
          left: 0,
          top: 0,
          borderRadius: "0px",
          minWidth: "100vw",
          minHeight: "100vh",
          zIndex: 100,
        },
        { type: "tween" }
      ),
    ]).then(async () => {
      console.log("push to", props.href);
      // making this function async somehow fixes the route push
      router.push(props.href+"?a", props.href);
    });
    //router.push(props.href);
  };

  /* whileHover={popped ? undefined : { borderRadius: "12px" }}*/

  return (
    <motion.div
      animate={boxControls}
      onTap={handleTap}
      whileTap={{ scale: 0.9 }}
      className={`bg-${props.color} absolute rounded-3xl p-4 cursor-pointer flex items-center justify-center`}
    >
      <a>
        <motion.h1
          animate={textControls}
          style={{ fontSize: "24px" }}
          className="text-gray-900"
        >
          {props.title}
        </motion.h1>
        {children}
      </a>
    </motion.div>
  );
};

export default Box;
