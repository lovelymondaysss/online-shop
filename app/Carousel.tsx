import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto space-y-4 text-balance text-justify">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full h-[240px] lg:h-[360px] "
          >
            <Image
              src="/gucci-carousel-1.jpg"
              fill
              alt="..."
              className="object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full h-[240px] lg:h-[360px]"
          >
            <Image
              src="/gucci-carousel-1.jpg"
              fill
              alt="..."
              className="object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full h-[240px] lg:h-[360px]"
          >
            <Image
              src="/gucci-carousel-1.jpg"
              fill
              alt="..."
              className="object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full h-[240px] lg:h-[360px]"
          >
            <Image
              src="/gucci-carousel-1.jpg"
              fill
              alt="..."
              className="object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
