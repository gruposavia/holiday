"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

const PopularRoutes = () => {
  const rentalRoutes = [
    {
      id: 1,
      tag: "",
      img: "/img/rentals/Miami.jpg",
      destination: "Miami",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "250",
      delayAnimation: "100",
      href: `https://wa.me/5492995172856?text=I'm%20interested%20in%20flights%20to%20Miami`,
    },
    {
      id: 2,
      tag: "",
      img: "/img/rentals/Orlando.jpg",
      destination: "Orlando",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "250",
      delayAnimation: "200",
      href: `https://wa.me/5492995172856?text=I'm%20interested%20in%20flights%20to%20Orlando`,
    },
    {
      id: 3,
      tag: "",
      img: "/img/rentals/BsAs.jpg",
      destination: "Buenos Aires",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "250",
      delayAnimation: "300",
      href: `https://wa.me/5492995172856?text=I'm%20interested%20in%20flights%20to%20Argentina`,
    },
    {
      id: 4,
      tag: "",
      img: "/img/rentals/PuntaCana.jpg",
      destination: "Punta Cana",
      tripType: "Round-trip",
      data: "Wed, Jun 1 - Sun, Jun 5",
      price: "250",
      delayAnimation: "400",
      href: `https://wa.me/5492995172856?text=I'm%20interested%20in%20flights%20to%20Punta%20cana`,
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".js-routes-routes_next",
          prevEl: ".js-routes-routes_prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {rentalRoutes.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              href={""}
              target="_blank"
              className="rentalCard -type-2"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
              style={{ cursor: "default" }}
            >
              <div className="rentalCard__image ">
                <div className="cardImage ratio ratio-6:5">
                  <div className="cardImage__content">
                    <Image
                      width={300}
                      height={250}
                      className="rounded-4 col-12"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="rentalCard__content mt-10">
                <h4 className="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item.destination}</span>
                </h4>

                {/* <div className="text-light-1  mt-5">
                  From{" "}
                  <span className="fw-500 text-dark-1"> US${item.price} </span>+
                  tax
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* start navigation pagination */}

      <button className="section-slider-nav -prev flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-routes-routes_prev">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-routes-routes_next">
        <i className="icon icon-chevron-right text-12" />
      </button>

      {/* end navigation pagination */}
    </>
  );
};

export default PopularRoutes;
