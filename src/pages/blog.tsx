import { AnimationControls, motion, TargetAndTransition } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import NavbarLayout from "../layouts/NavbarLayout";

const Blog: NextPage = () => {
  return <NavbarLayout route="/blog"></NavbarLayout>;
};

export default Blog;
