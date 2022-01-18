import { AnimatePresence, motion, TargetAndTransition } from "framer-motion";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { BoxProps } from "../types/Box";
import Box from "./Box";

type NavbarProps = {
  route: string;
};

const Navbar: FC<NavbarProps> = ({ route }) => {
  const router = useRouter();
  const [showFullscreen, setShowFullscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowFullscreen(false));
  });

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
    <motion.nav className="hidden lg:flex" layout="size">
      {showFullscreen ? (
        <motion.div
          className={`w-full flex items-center justify-center min-h-screen bg-${currentRoute.color} z-10`}
          style={{ fontSize: "60px" }}
          layoutId="current"
        >
          <motion.p layout layoutId="currentText">
            {currentRoute.title}
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className={`bg-${currentRoute.color} p-4 flex items-center justify-center mt-4 ml-8 rounded-2xl`}
          whileTap={{ scale: 0.9 }}
          layoutId="current"
        >
          <motion.p
            layout
            layoutId="currentText"
            style={{ fontSize: "24px" }}
            className="select-none"
          >
            {currentRoute.title}
          </motion.p>
        </motion.div>
      )}
      {boxes.map((boxProps, i) => (
        <motion.div
          className={`bg-white-900 hover:bg-${boxProps.color} p-4 flex items-center justify-center mt-4 rounded-2xl`}
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1}}
          whileTap={{ scale: 0.9 }}
          onTap={() => router.push(boxProps.href + "?b", boxProps.href)}
        >
          <motion.p layout style={{ fontSize: "24px" }} className="select-none">
            {boxProps.title}
          </motion.p>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
