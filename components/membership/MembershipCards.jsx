"use client";

import { useTranslation } from "react-i18next";
import { memberships } from "@/data/memberships";
import "./styles.css";
import { useState } from "react";

const MembershipCards = ({ locale }) => {
  const { t } = useTranslation();

  const [onMouseOver, setOnMouseOver] = useState(false);

  return (
    <>
      {memberships.slice(1, 4).map((item) => (
        <div
          className={`relative col-xl-3 col-lg-9 membership shadow-md  ${
            onMouseOver ? "membership:hover" : ""
          }`}
          key={item.id}
          style={{
            borderRadius: item.recommend ? "16px 0px 16px 0px" : "16px",
          }}
          onMouseOver={() => setOnMouseOver(true)}
          onMouseLeave={() => setOnMouseOver(false)}
        >
          {item.recommend && (
            <div className="badge bg-green-2 items-center d-flex justify-center text-15">
              {t(`membership:price-recommend`)}
            </div>
          )}
          <div className="rentalCard__image divider">
            <div className="cardImage inside-slider">
              <div>
                <h1
                  style={{ whiteSpace: "nowrap" }}
                  className="text-center  text-30"
                >
                  {t(`membership:title-${item.id}`)}
                </h1>
              </div>
              <div className=" items-center justify-center d-flex text-16 text-green-1 fw-500">
                USD
                <span className="fw-700 text-40">{item.price}</span>
                <span className="">{t(`membership:price-${item.id}`)}</span>
              </div>
              <div>
                <button
                  key={item.id}
                  style={{ width: "100%" }}
                  className={`px-10 d-flex justify-center rounded-2 fw-600 mb-30  text-dark-1 bg-green-5`}
                >
                  <span className="text-22 my-0">
                    {t(`membership:button-buy`)}
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* End header card */}

          <div className="rentalCard__content justify-center px-10 mt-10 ">
            <ul className="y-gap-5 mt-20">
              {item.features.map((e, index) => (
                <li key={index} className="d-flex items-center">
                  <i
                    style={{ fontWeight: "1000" }}
                    className={`icon-${
                      e.value === true
                        ? "check text-green-2"
                        : "close text-red-2"
                    } text-13 fw-600 mr-10`}
                  />
                  <p
                    className={` text-15 fw-500  ${
                      e.value === true ? "text-dark-2" : "text-black-50"
                    } `}
                  >
                    {t(`membership:${e.id}-${item.id}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* End features card */}
        </div>
      ))}
      {memberships.slice(4, 5).map((item) => (
        <div className={` diamond shadow-md mb-60`} key={item.id}>
          <div className="image">
            <div className="">
              <img
                width={"100%"}
                height={"100%"}
                className="rounded-4 col-12 js-lazy"
                src={`/img/membership/diamond-${locale}.jpg`}
                alt="image"
              />
            </div>
          </div>
          {/* End header card */}

          <div className="diamondFeature">
            <ul className="y-gap-5">
              {item.features.slice(0, 9).map((e, index) => (
                <li key={index} className="d-flex items-center">
                  <i
                    style={{ fontWeight: "1000" }}
                    className={`icon-${
                      e.value === true
                        ? "check text-green-2"
                        : "close text-red-2"
                    } text-13 fw-600 mr-10`}
                  />
                  <p
                    className={` text-15 fw-500  ${
                      e.value === true ? "text-dark-2" : "text-black-50"
                    } `}
                  >
                    {t(`membership:${e.id}-${item.id}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="diamondFeature">
            <ul className="y-gap-5">
              {item.features.slice(9, 16).map((e, index) => (
                <li key={index} className="d-flex items-center">
                  <i
                    style={{ fontWeight: "1000" }}
                    className={`icon-${
                      e.value === true
                        ? "check text-green-2"
                        : "close text-red-2"
                    } text-13 fw-600 mr-10`}
                  />
                  <p
                    className={` text-15 fw-500  ${
                      e.value === true ? "text-dark-2" : "text-black-50"
                    } `}
                  >
                    {t(`membership:${e.id}-${item.id}`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* End features card */}
        </div>
      ))}
    </>
  );
};

export default MembershipCards;
