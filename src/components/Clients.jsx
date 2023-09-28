import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./clients.css";

// import required modules
import { Pagination } from "swiper/modules";

const Clients = () => {
  return (
    <section className="px-4 py-6  border-rose-500">
      <p className="mx-auto w-2/3 pb-12 text-xl uppercase leading-8 tracking-tighter">
        Here's what our clients has shared with us
      </p>

      <div
        className=" border-sky-400 mx-auto flex w-96 flex-col gap-5 px-2 py-4 md:grid md:w-full md:grid-cols-2 lg:grid-col
       h-96 w-[30rem] border-2 sm:border-2"
      >
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  w-full  lg:w-[75rem] h-full"
        >
          <SwiperSlide class="">
            <article className="w-60 flex h-full flex-col gap-5 rounded-3xl border-sky-400 bg-[#1E1E1E] px-8 py-4">
              <img
                className="h-14 w-14"
                src="https://img.icons8.com/3d-fluency/94/quote-left.png"
                alt="quote-left"
              />

              <p className="text-xs leading-6 text-zinc-500">
                I couldn't be more happier with the results that were provided
                to me. It was everything that I anticipated from this platform!
              </p>

              <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-sm opacity-75">
                <li className="col-span-1 row-span-2">
                  <img
                    className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                    src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                    alt=""
                  />
                </li>
                <li className=" lg:-translate-y-6">Marty McFly</li>
                <li className=" -mt-2 text-zinc-400 lg:-translate-y-6">
                  Data Scientist
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide id="" className="">
            <article className="w-60 flex h-full flex-col gap-5 rounded-3xl border-sky-400 bg-[#1B1C25] px-8 py-4">
              <img
                className="h-14 w-14"
                src="https://img.icons8.com/3d-fluency/94/quote-left.png"
                alt="quote-left"
              />

              <p className="text-xs leading-6 text-zinc-500">
                I couldn't be more happier with the results that were provided
                to me. It was everything that I anticipated from this platform!
              </p>

              <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-sm opacity-75">
                <li className="col-span-1 row-span-2">
                  <img
                    className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                    src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                    alt=""
                  />
                </li>
                <li className=" lg:-translate-y-6">Marty McFly</li>
                <li className=" -mt-2 text-zinc-400 lg:-translate-y-6">
                  Data Scientist
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="w-60 flex h-full flex-col gap-5 rounded-3xl border-sky-400 bg-[#1E1E1E] px-8 py-4">
              <img
                className="h-14 w-14"
                src="https://img.icons8.com/3d-fluency/94/quote-left.png"
                alt="quote-left"
              />

              <p className="text-xs leading-6 text-zinc-500">
                I couldn't be more happier with the results that were provided
                to me. It was everything that I anticipated from this platform!
              </p>

              <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-sm opacity-75">
                <li className="col-span-1 row-span-2">
                  <img
                    className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                    src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                    alt=""
                  />
                </li>
                <li className=" lg:-translate-y-6">Marty McFly</li>
                <li className=" -mt-2 text-zinc-400 lg:-translate-y-6">
                  Data Scientist
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="w-60 flex h-full flex-col gap-5 rounded-3xl border-sky-400 bg-[#1B1C25] px-8 py-4">
              <img
                className="h-14 w-14"
                src="https://img.icons8.com/3d-fluency/94/quote-left.png"
                alt="quote-left"
              />

              <p className="text-xs leading-6 text-zinc-500">
                I couldn't be more happier with the results that were provided
                to me. It was everything that I anticipated from this platform!
              </p>

              <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-sm opacity-75">
                <li className="col-span-1 row-span-2">
                  <img
                    className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                    src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                    alt=""
                  />
                </li>
                <li className=" lg:-translate-y-6">Marty McFly</li>
                <li className=" -mt-2 text-zinc-400 lg:-translate-y-6">
                  Data Scientist
                </li>
              </ul>
            </article>
          </SwiperSlide>
          <SwiperSlide>
          <article className="w-60 flex h-full flex-col gap-5 rounded-3xl border-sky-400 bg-[#1E1E1E] px-8 py-4">
              <img
                className="h-14 w-14"
                src="https://img.icons8.com/3d-fluency/94/quote-left.png"
                alt="quote-left"
              />

              <p className="text-xs leading-6 text-zinc-500">
                I couldn't be more happier with the results that were provided
                to me. It was everything that I anticipated from this platform!
              </p>

              <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-sm opacity-75">
                <li className="col-span-1 row-span-2">
                  <img
                    className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                    src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                    alt=""
                  />
                </li>
                <li className=" lg:-translate-y-6">Marty McFly</li>
                <li className=" -mt-2 text-zinc-400 lg:-translate-y-6">
                  Data Scientist
                </li>
              </ul>
            </article>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
        {/* <article className="flex h-96 flex-col gap-5 rounded-3xl border-sky-400 bg-[#1E1E1E] px-8 py-4 lg:h-64">
          <img
            className="h-14 w-14"
            src="https://img.icons8.com/3d-fluency/94/quote-left.png"
            alt="quote-left"
          />

          <p className="text-sm leading-6 text-zinc-400">
            I couldn't be more happier with the results that were provided to
            me. It was everything that I anticipated from this platform!
          </p>

          <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-xs">
            <li className="col-span-1 row-span-2">
              <img
                className="h-12 w-12 rounded-full 
            lg:-translate-y-7"
                src="https://images.generated.photos/-xGFYXL6ts6pLJa6UKFheSLpVvkmH6sSbmHL7WfYMos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDA2MDc1LmpwZw.jpg"
                alt=""
              />
            </li>
            <li className="text-sm lg:-translate-y-6">Marty McFly</li>
            <li className="-mt-2 text-zinc-400 lg:-translate-y-4">
              Data Scientist
            </li>
          </ul>
        </article>

        <article className="flex h-96 flex-col gap-5 rounded-3xl border-sky-400 bg-[#1B1C25] px-8 py-4 lg:h-64">
          <img
            className="h-14 w-14"
            src="https://img.icons8.com/3d-fluency/94/quote-left.png"
            alt="quote-left"
          />

          <p className="text-sm leading-6 text-zinc-400">
            I couldn't be more happier with the results that were provided to
            me. It was everything that I anticipated from this platform!
          </p>

          <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-xs">
            <li className="col-span-1 row-span-2">
              <img
                className="h-12 w-12 rounded-full lg:-translate-y-7"
                src="https://images.generated.photos/ajBCQWS5wQiW_IWjBjm-D2-0yhxfhOk4VqRXKuaxUI8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTIzMDY5LmpwZw.jpg"
                alt=""
              />
            </li>
            <li className="text-sm lg:-translate-y-6">Jeff Hardy</li>
            <li className="-mt-2 text-zinc-400 -translate-y-4">
              Keyboard warrior
            </li>
          </ul>
        </article>

        <article className="mx-auto flex h-96 flex-col gap-5 rounded-3xl border-sky-400 bg-[#1B1C25] px-8 py-4 md:col-span-2 md:w-2/4 lg:h-64">
          <img
            className="h-14 w-14"
            src="https://img.icons8.com/3d-fluency/94/quote-left.png"
            alt="quote-left"
          />

          <p className="text-sm leading-6 text-zinc-400">
            I couldn't be more happier with the results that were provided to
            me. It was everything that I anticipated from this platform!
          </p>

          <ul className="mt-8 grid h-20 grid-cols-2 grid-rows-2 -space-x-7 text-xs">
            <li className="col-span-1 row-span-2">
              <img
                className="h-12 w-12 rounded-full lg:-translate-y-7"
                src="https://images.generated.photos/gHpTR7pAqAp_vGXQxu8dsr6sAo5TJWx3gIsIimgHVB0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU1MDc5LmpwZw.jpg"
                alt=""
              />
            </li>
            <li className="text-sm lg:-translate-y-6">Amy Dunne</li>
            <li className="-mt-2 text-zinc-400 -translate-y-4">
              Emoji specialist
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Clients;
