"use client";

import type { NextPage } from "next";
import { Map } from "~~/components/sections/Map";
import { Menu } from "~~/components/sections/Menu";
import { UserShowcase } from "~~/components/sections/UserShowcase";

const Home: NextPage = () => {
  return (
    <>
      <UserShowcase />
      <Menu />
      <Map />
    </>
  );
};

export default Home;
