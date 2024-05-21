"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks =[
{
  title: "About",
  path: "#about",
},
{
  title: "Projects",
  path: "#projects",
},
{
  title:"Contact",
  path: "#contact",
}
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap item-center justify-between mx-auto px-4 py-2">
            <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
                LOGO
            </Link>
            <div className="mobile-menu block md:hidden">
              {
                !navbarOpen ? (
                  <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border">
                    <Bars3Icon className="h-5 w-5"/>
                    </button>
                ) : (
                  <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border">
                    <XMarkIcon className="h-5 w-5"/>
                    </button>
                )
              }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-10">
              {navLinks.map((link, index) => (
                  <li key={index}>
                    <Navlink href={link.path} title={link.title} />
                  </li>
                ))}
            </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;