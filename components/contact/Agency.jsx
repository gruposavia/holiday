/* eslint-disable @next/next/no-img-element */
"use client";
import { useTranslation } from "react-i18next";

const Agency = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-xl-8  w-max-2-3">
        <p className="text-15 text-dark-1">
          {t("contactSupport:agency-p1")}
          <br />
          <br />
          {t("contactSupport:agency-p2")}
          <br />
          <br />
          {t("contactSupport:agency-p3")}
          <br />
          <br />
          {t("contactSupport:agency-p4")}
          <br />
          <br />
          {t("contactSupport:agency-p5")}
          <br />
        </p>
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <img
            src="/img/pages/destinations/map.png"
            alt="image"
            className="col-12 rounded-4"
          />
          {/* <div className="absolute d-flex justify-center items-end col-12 h-full z-1 px-35 py-20">
              <button className="button h-50 px-25 -blue-1 bg-white text-dark-1 text-14 fw-500 col-12">
                <i className="icon-eye text-18 mr-10" />
                See popular activities on the map
              </button>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Agency;
