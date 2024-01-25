
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import rentalsData from "../../data/rentals";
import isTextMatched from "../../utils/isTextMatched";

import { memberships } from "@/data/memberships";
console.log("🚀 ~ memberships:", memberships)

const MembershipCards = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {memberships.map((item) => (
        <div
          className="col-lg-20 col-sm-6 mb-50"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="rentalCard__image">
            <div className="cardImage inside-slider">
              <div>
                <h2 className="text-center">{item.id}</h2>
              </div>
              <div>
                <p className="text-center">{item.price} USD/year</p>
              </div>
              <div><button
              key={item.id}
              className={`px-10 d-flex w-full bg-yellow-1
               py-10  fw-600 text-dark-1`}
            >
              <i className={`text-20 mr-10`}></i>
              BUY
            </button></div>
              
            </div>
            
          </div>
          {/* End image card */}

          <div className="rentalCard__content justify-center mt-10">
            <ul className="y-gap-5 mt-20">
              {item.features.map((e, index) => (
                <li key={index} className="d-flex items-center">
                  <i className={`icon-${e.value !== undefined ? e.value === true ? 'check text-green-2' : 'close text-red-2' : 'like text-black'} text-12 mr-10`} />
                  <p className="text-15 text-dark-2">
                    {e.id}
                  </p>
                </li>
              ))}

              {/* <div className="d-flex items-center text-black-50">
                  <i className="icon-play text-12 mr-10" />
                  <div className="text-15">
                    Free cancellation before April 1, 2022
                  </div>
                </div> */}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MembershipCards;
