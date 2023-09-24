import React from "react";

const FAQ = () => {
  return (
    <section className="flex flex-col gap-6 px-6 pb-32 pt-72">
      <button className="mx-auto block rounded-2xl bg-rose-600 px-3 py-2 text-slate-100 transition-all hover:scale-105 hover:bg-rose-700 hover:text-slate-200">
        Have Questions ?
      </button>

      <p className="py-6 text-center text-2xl lg:text-3xl">
        Frequently Ask Questions
      </p>

      <main className="hidden h-96 grid-cols-2 md:grid">
        <div className="flex flex-col gap-4 border-sky-400 px-4 py-6">
          <section className="mx-auto h-14 w-full rounded-lg bg-[#1B1A17] px-3 py-4 text-xs lg:text-base">
            <button className="flex w-full flex-row justify-between gap-2">
              <p>What services does Nakson offer?</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </section>

          <section className="relative mx-auto h-40 w-full rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:h-32">
            <button className="relative z-30 flex w-full flex-row justify-between gap-2 lg:text-base">
              <p>How can Nakson help me scale business?</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </button>

            <p className="py-2 pr-6 text-zinc-400 lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem eaque fugiat maiores, excepturi tempora . Lorem
              ipsum dolor sit amet.
            </p>

            <div className="absolute inset-0 bg-zinc-500 bg-opacity-10"></div>
          </section>
        </div>
        <div className="flex flex-col gap-4 border-rose-400 px-4 py-6">
          <section className="mx-auto h-14 w-full rounded-lg bg-[#1B1A17] px-3 py-4 text-xs">
            <button className="flex w-full flex-row justify-between gap-2 lg:text-base">
              <p>What services does Nakson offer?</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </section>

          <section className="relative mx-auto h-40 w-full rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:h-32">
            <button className="relative z-30 flex w-full flex-row justify-between gap-2 lg:text-base">
              <p>Ag lava majboori nu ?</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </span>
            </button>

            <p className="py-2 pr-6 text-zinc-400 lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem eaque fugiat maiores, excepturi tempora . Lorem
              ipsum dolor sit amet.
            </p>

            <div className="absolute inset-0 bg-zinc-500 bg-opacity-10"></div>
          </section>
        </div>
      </main>

      <section className="mx-auto h-14 rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:hidden">
        <button className="flex w-full flex-row justify-between gap-2">
          <p>What services does Nakson offer?</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </section>

      <section className="relative mx-auto h-40 rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:hidden md:h-28 md:w-96">
        <button className="relative z-30 flex w-full flex-row justify-between gap-2">
          <p>How can Nakson help me scale business?</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </button>

        <p className="py-2 pr-6 text-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem eaque fugiat maiores, excepturi tempora . Lorem ipsum
          dolor sit amet.
        </p>

        <div className="absolute inset-0 bg-zinc-500 bg-opacity-10"></div>
      </section>

      <section className="mx-auto h-14 rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:hidden">
        <button className="flex w-full flex-row justify-between gap-2">
          <p>What services does Nakson offer?</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </section>

      <section className="relative mx-auto h-40 rounded-lg bg-[#1B1A17] px-3 py-4 text-xs md:hidden md:h-28 md:w-96">
        <button className="relative z-30 flex w-full flex-row justify-between gap-2">
          <p>Ag lava majboori nu ?</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
        </button>

        <p className="py-2 pr-6 text-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem eaque fugiat maiores, excepturi tempora . Lorem ipsum
          dolor sit amet.
        </p>

        <div className="absolute inset-0 bg-zinc-500 bg-opacity-10"></div>
      </section>
    </section>
  );
};

export default FAQ;
