'use client'
import Button from "@/app/elements/Button/Button.jsx";
import { navbarLinks } from "../../constants/index.js";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import Logo from "@/app/elements/Logo/Logo.jsx";

const Navbar = () => {

  return (
    <>

<nav
        className="relative flex w-full flex-nowrap items-center justify-between
         bg-slate-400 py-2 text-neutral-500 shadow-lg
         hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600
           lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex flex-1 items-center justify-between ">
          <div className="ml-2">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>

    
            <ul
              className="list-style-none  hidden sm:flex justify-center align-middle "
              data-te-navbar-nav-ref
            >
              {navbarLinks.map((link) => (
                <Link key={link.label} href={link.route}>
                  <li>
                    <div className="text-red-950 mr-4  mt-1">
                      <div className="flex justify-start ">
                        {/* <Image
                          src={link.imgURL}
                          width={25}
                          height={25}
                          alt="photo"
                        /> */}
                        <div>{link.label}</div>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
        
            </ul>
          
        </div>

        {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 "
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}

            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>


      </nav>
    
    



    </>
  );
};

export default Navbar;
