import React from "react";

const App = () => {
  return (
    <>
      <nav class="flex flex-row">
        <ul class="flex w-full flex-row">
          <img class="h-20" src="https://i.imgur.com/zq37jrv.png" alt="" />
          <li class="ml-auto flex w-fit cursor-pointer flex-col gap-3 px-12 py-6 pb-8 leading-3">
            <p class="border-b-[1px] w-10"></p>
            <p class="border-b-[1px] w-10"></p>
            <p class="border-b-[1px] w-10"></p>
          </li>
        </ul>
      </nav>
      <section class="h-fit border-2">
        <ul class="">
          <img class="" src="https://i.imgur.com/ZMQgJna.png" alt="" />

          <li class="px-12 uppercase text-3xl">
            your
            <span class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
            partner 
            </span>
             formarketing success
          </li>
          <li class="px-12 text-sm py-6 opacity-90 text-[#adb5bd]">
            We are you strategic partners and we provide tacit solutions to your
            problems. In the midst of ever rapidly-changing pace of technology
            we find an oasis in delivering, using up-to-date tools, the finest
            of product.
          </li>
          <li class="px-12"></li>
        </ul>
      </section>
    </>
  );
};

export default App;
