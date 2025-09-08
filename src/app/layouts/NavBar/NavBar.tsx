"use client";
import MobileMenu from "@/app/layouts/NavBar/MobileMenu";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import MainMenu from "./MainMenu";
import Social from "./Social";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <section className="py-5 px-4 mx-auto max-sm:p-2 max-sm:mx-1 max-sm:max-h-[48px]">
        {/* Main Logo */}
        <div className="flex justify-between capitalize items-center md:gap-5 sm:gap-3 gap-1 flex-wrap">
          <div className="flex ">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl
              font-medium"
            >
              <div className="lg:text-2xl sm:text-xl text-sm">
                {"<Khoi Hoang/>"}
              </div>
            </Link>
          </div>

          {/* Main Menu */}
          <MainMenu />
          
          {/* Socials */}
          <Social />

          <MobileMenu />
        </div>
       
      </section>
    </>
  );
};
export default Navbar;
