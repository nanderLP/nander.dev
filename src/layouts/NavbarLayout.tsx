import Head from "next/head";
import { FC } from "react";
import Navbar from "../components/Navbar";

type NavbarLayoutProps = {
  route: string;
};

const NavbarLayout: FC<NavbarLayoutProps> = ({ children, route }) => {
  return (
    <div>
      <Head>
        <title>Nander | {route}</title>
      </Head>
      <Navbar route={route} />
      {children}
    </div>
  );
};

export default NavbarLayout;
