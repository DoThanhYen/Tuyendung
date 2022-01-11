import React from "react";
import { Banner } from "../components/banner";
import { Footer } from "../components/footer";
import { Howitwork } from "../components/Howitwork";
import { Job } from "../components/job";
import { Navbar } from "../components/navbar";

export const Home = () => {
  return (
    <div>
      <Banner />
      {/* //<Navbar /> */}
      <Job />
      <Howitwork />
      <Footer />
    </div>
  );
};
