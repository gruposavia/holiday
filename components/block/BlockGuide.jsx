"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import "./styles.css";

const BlockGuide = ({ locale }) => {
  const { t } = useTranslation();
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/new/2.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "100",
      redirect: "contact/reservations",
    },
    {
      id: 2,
      icon: "/img/featureIcons/new/4.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
      redirect: "contact/luggage",
    },
    {
      id: 3,
      icon: "/img/featureIcons/new/6.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
      redirect: "contact/agency",
    },
    {
      id: 4,
      icon: "/img/featureIcons/new/8.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
      redirect: "contact/supplier",
    },
    {
      id: 5,
      icon: "/img/featureIcons/new/10.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
      redirect: "contact/memberships",
    },
    {
      id: 6,
      icon: "/img/featureIcons/new/13.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
      redirect: "contact/cargo",
    },
  ];

  return (
    <>
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle -md">
            <h2 className="sectionTitle__title">{t(`choose-us:title`)}</h2>
          </div>
        </div>
      </div>
      {blockContent.map((item) => (
        <div
          className={`col-lg-4 col-sm-6 `}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
          onMouseOver={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <Link href={item.redirect ? `/${locale}/${item.redirect}` : ""}>
            <div className={`featureIcon -type-1 block`} >
              <div className={`d-flex justify-center ${hoveredItemId === item.id ? "block:hover" : ""}`}>
                <img src={item.icon} alt="image" className="js-lazy" />
              </div>
              <div className="text-center mt-30 d-flex justify-center">
                <h4 className={`text-18 fw-500  ${hoveredItemId === item.id && 'text-green-2'}`}>
                  {t(`choose-us:img-${item.id}`)}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
