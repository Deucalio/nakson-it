import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Nav = () => {
  // animate the nav bar on scroll
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (nav) {
      navRef.current.classList.remove("opacity-0");
      navRef.current.classList.add("max-h-[300rem]");

      setTimeout(() => {
        navRef.current.classList.remove("max-h-0");
      }, 200);
    } else {
      navRef.current.classList.add("opacity-0");
      navRef.current.classList.remove("max-h-[300rem]");

      setTimeout(() => {
        navRef.current.classList.add("max-h-0");
      }, 200);
    }

    return () => {};
  }, [nav]);

  return (
    <nav className="flex flex-row">
      <ul className="flex w-full flex-row justify-between">
        <img
          className="h-20 w-20 cursor-pointer"
          src="https://i.imgur.com/HkYc6sn.png"
          alt=""
        />
        <li
          onClick={() => setNav(!nav)}
          className=" relative left-[1.4rem] ml-auto flex w-fit cursor-pointer 
          flex-col gap-3 px-12 py-6 pb-8 leading-3 md:hidden"
        >
          {/* min-height: 18rem;
    width: 8rem;
    left: -3rem; */}
          <p className="w-8 border-b-[1px] border-white"></p>
          <p className="w-8 border-b-[1px] border-white"></p>
          <p className="w-8 border-b-[1px] border-white"></p>
          <div
            ref={navRef}
            className="opacity-0 max-h-0
            transition-all ease-in duration-300 absolute top-2/3 flex -left-[0.6rem]
             w-24 flex-col gap-4 rounded-md bg-[#0F0E0E] ring-1 ring-slate-500 
             px-3 py-2 text-xs"
          >
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Services</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Our Team</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Our Proejcts</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">FAQ</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>

            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>
            <p onClick={() => console.log("")} className="transition-all hover:text-sm">Links</p>


            {/* <p className="transition-all hover:text-sm">Links</p>
            <p className="transition-all hover:text-sm">Links</p>
            <p className="transition-all hover:text-sm">Links</p> */}
          </div>
        </li>

        <li className="mx-auto my-auto hidden w-2/3 flex-row items-center justify-center gap-9 py-3 md:flex lg:gap-16 lg:pl-16">
          <p className="cursor-pointer text-sm transition-all duration-200 ease-out hover:scale-110">
            Services
          </p>
          <p className="cursor-pointer text-sm transition-all duration-200 ease-out hover:scale-110">
            Clients' feedbacks
          </p>
          <p className="cursor-pointer text-sm transition-all duration-200 ease-out hover:scale-110">
            FAQ
          </p>
          <p className="cursor-pointer text-sm transition-all duration-200 ease-out hover:scale-110">
            Links
          </p>
        </li>

        <li className="mx-auto my-auto hidden md:block">
          <button className="flex w-40 flex-row items-center gap-1 rounded-xl bg-gradient-to-l from-indigo-400 to-purple-800 px-3 py-2 transition-all hover:scale-105">
            &nbsp; &nbsp; Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
