import { motion, TargetAndTransition } from "framer-motion";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { BoxProps } from "../types/Box";
import Box from "./Box";

type NavbarProps = {
  route: string;
};

const Navbar: FC<NavbarProps> = ({ route }) => {
  const router = useRouter();

  const animate = router.query.a !== undefined;

  console.log(animate);

  const boxes: BoxProps[] = [
    {
      title: "Home",
      color: "green",
      href: "/",
    },
    {
      title: "About",
      color: "blue",
      href: "/about",
    },
    {
      title: "Blog",
      color: "red",
      href: "/blog",
    },
  ];

  const variants = {
    full: {
      width: "100%",
      minHeight: "100vh",
    },
    box: {
      width: "10%",
      minHeight: "5vh",
      borderRadius: "16px",
      marginLeft: "2rem",
      marginTop: "1rem",
    },
  };

  const currentRoute = boxes.find((box) => box.href === route) as BoxProps;
  boxes.splice(boxes.indexOf(currentRoute), 1);

  return (
    <motion.nav className="hidden lg:flex">
      <motion.div
        className={`bg-${currentRoute.color} p-4 flex items-center justify-center z-10`}
        variants={variants}
        initial={animate ? "full" : "box"}
        animate={animate ? "box" : undefined}
        transition={{
          duration: 1,
        }}
      >
        <motion.p
          className="text-gray-900 select-none"
          style={{ fontSize: animate ? "60px" : "24px" }}
          animate={
            animate
              ? {
                  fontSize: "24px",
                }
              : undefined
          }
          transition={{ duration: 1 }}
        >
          {currentRoute.title}
        </motion.p>
      </motion.div>
      {boxes.map((boxProps, i) => (
        <motion.div
          className={`bg-white-900 hover:bg-${boxProps.color} p-4 flex absolute items-center justify-center mt-4 ml-8 rounded-2xl`}
          key={i}
          whileTap={{ scale: 0.9 }}
          onTap={() => router.push(boxProps.href + "?b", boxProps.href)}
          style={{
            marginLeft: `calc(2rem + 10% + 1% + ${i} * 11%)`,
            width: "10%",
            minHeight: "5vh",
          }}
        >
          <p
            style={{ fontSize: "24px", lineHeight: 1 }}
            className="select-none"
          >
            {boxProps.title}
          </p>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
