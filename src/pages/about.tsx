import { NextPage } from "next";
import NavbarLayout from "../layouts/NavbarLayout";

const About: NextPage = () => {
  return (
    <NavbarLayout route="/about">
      <main></main>
    </NavbarLayout>
  );
};

export default About;
