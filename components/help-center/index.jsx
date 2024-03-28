"use client";
import React, { useState } from "react";
import CallToActions from "@/components/common/CallToActions";
import Faq from "@/components/faq/Faq";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import HelpSearchBlock from "@/components/block/HelpSearchBlock";
import HelpBlock from "@/components/block/HelpBlock";
import { useTranslation } from 'react-i18next';

export default function HelpCenterIndex({ locale }) {
    const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  return (
    
    <div className="header-margin">
      {/* header top margin */}

      <Header10 locale={locale} />
      {/* End Header 1 */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  {t("help-center:title")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t("help-center:subtitle")}
                </p>
              </div>
              {/* End .sectiontitle */}

              
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-60 lg:pt-40">
            <HelpBlock t={t} searchText={searchText} locale={locale} />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End search and search block section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  {t("help-center:faq-title")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t("help-center:faq-subtitle")}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <HelpSearchBlock t={t} onSearchTextChange={setSearchText} />
                <Faq t={t} locale={locale} searchText={searchText} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter t={t} locale={locale} />
      {/* End Call To Actions Section */}
    </div>
  );
}
