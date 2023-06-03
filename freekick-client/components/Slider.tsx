import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ slides, paginate, slidesPerView }) => {
  SwiperCore.use([Pagination]);

  const params = {
    className: "mySwiper",
    slidesPerView: slidesPerView,
    speed: 900,
    grabCursor: false,
    cssMode: false,
    spaceBetween: 30,
    freeMode: true,
    pagination: paginate ? { clickable: true } : false,
    breakpoints: {
      0: {
        slidesPerView: slidesPerView,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: slidesPerView,
        spaceBetween: 30,
      },
    },
  };

  return Array.isArray(slides) && slides?.length > 0 ? (
    <Swiper {...params} className="h-auto">
      {slides?.map((item, i) => {
        return (
          item?.src && (
            <SwiperSlide
              key={`slide-${i}`}
              className="swiper-lazy overflow-hidden"
            >
              <Link href="/club">
                <Image
                  src={encodeURI(item?.src)}
                  alt="Slide"
                  quality={70}
                  className=""
                  height={400}
                  width={980}
                  sizes="100vw"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  ) : (
    <></>
  );
};

export default Slider;
