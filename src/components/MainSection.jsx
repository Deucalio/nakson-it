import React from "react";

const MainSection = () => {
  return (
    <main className="h-fit">
      <ul className="md:grid md:grid-cols-2">
        <li className="md:hidden">
          <img className="sm:h-96 sm:mx-auto" src="https://i.imgur.com/ZMQgJna.png" alt="" />
        </li>

        <li className="px-4 sm:pl-36 sm:pr-16 text-3xl uppercase md:py-10 lg:py-16 lg:text-5xl lg:leading-snug xl:py-32">
          your&nbsp;
          <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text font-bold tracking-wider text-transparent">
            partner&nbsp;
          </span>
          for marketing success
          <p className="py-6 text-xs normal-case text-[#adb5bd] opacity-90 lg:text-sm">
            We are you strategic partners and we provide tacit solutions to your
            problems. In the midst of ever rapidly-changing pace of technology
            we find an oasis in delivering, using up-to-date tools, the finest
            of product.
          </p>
          <div className="hidden flex-row items-center gap-4 md:flex">
            <img
              className="h-7 opacity-75 contrast-0 lg:h-8"
              src="https://deepsealifesciences.com/cdn/shop/files/logo.png?v=1673523538&width=500"
              alt=""
            />
            <img
              className="mr-6 h-14 opacity-75 contrast-0 lg:h-14"
              src="https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500"
              alt=""
            />
          </div>
        </li>

        <li className="hidden md:block">
          <img className="" src="https://i.imgur.com/ZMQgJna.png" alt="" />
        </li>

        <li className="grid grid-cols-1 place-items-center gap-y-12 px-16 sm:grid-cols-2 md:hidden md:grid-cols-2">
          <img
            className="h-10 opacity-75 contrast-0"
            src="https://deepsealifesciences.com/cdn/shop/files/logo.png?v=1673523538&width=500"
            alt=""
          />
          <img
            className="mr-6 h-20 opacity-75 contrast-0"
            src="https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500"
            alt=""
          />
        </li>
      </ul>
    </main>
  );
};

export default MainSection;
