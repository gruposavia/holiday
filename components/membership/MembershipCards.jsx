
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import rentalsData from "../../data/rentals";
import isTextMatched from "../../utils/isTextMatched";
import { useTranslation } from 'react-i18next';
import { memberships } from "@/data/memberships";
import './styles.css'

const MembershipCards = () => {


  const { t } = useTranslation()

  
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  // function Arrow(props) {
  //   let className =
  //     props.type === "next"
  //       ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
  //       : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
  //   className += " arrow";
  //   const char =
  //     props.type === "next" ? (
  //       <>
  //         <i className="icon icon-chevron-right text-12"></i>
  //       </>
  //     ) : (
  //       <>
  //         <span className="icon icon-chevron-left text-12"></span>
  //       </>
  //     );
  //   return (
  //     <button className={className} onClick={props.onClick}>
  //       {char}
  //     </button>
  //   );
  // }

  return (
    <>
      {memberships.slice(1,5).map((item) => (
        <div
        
          className="col-xl-3 col-md-6 col-lg-6 membership"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="rentalCard__image">
            <div className="cardImage inside-slider">
              <div>
                <h1 
                style={{whiteSpace: 'nowrap'}}
                className="text-center  text-20">{t(`membership:title-${item.id}`)}</h1>
              </div>
              <div className="py-3">
                <h3 className="text-center text-30 text-green-1 fw-500">{t(`membership:price-${item.id}`)}</h3>
              </div>
              <div>
                <button
                  key={item.id}
                  style={{width: '100%'}}
                  className={`px-10 d-flex justify-center bg-yellow-1 py-10  fw-600 text-dark-1 rounded-2`}

                >
                  <i className={`text-20 mr-10`}></i>
                  {t(`membership:button-${item.id !== 'diamond'? 'buy': 'diamond'}`)}
                </button>
              </div>

            </div>

          </div>
          {/* End image card */}

          <div className="rentalCard__content justify-center px-10 mt-10">
            <ul className="y-gap-5 mt-20">
              {item.features.map((e, index) => (
                <li key={index} className="d-flex items-center">
                  <i style={{fontWeight: '1000'}}
                  className={`icon-${e.value === true ? 'check text-green-2' : 'close text-red-2'} text-13 fw-600 mr-10`} />
                  <p className={` text-15 fw-400  ${e.value === true ? 'text-dark-2' : 'text-black-50'} `} >
                    {t(`membership:${e.id}-${item.id}`)}
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
