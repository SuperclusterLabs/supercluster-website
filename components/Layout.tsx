import React from "react";

// Internal Imports
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IPage } from "../pages/_app";

const Layout = ({ pages, children }: { pages: IPage[], children: React.ReactNode }) => {
  return (
    <>
      <Navbar pages={pages} />
      <div className='main-container'>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
