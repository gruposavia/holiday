// pages/[locale]/contact/membership/index.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import ContactScript from '@/components/common/contact/ContactMembership';
import Header10 from '@/components/header/header-10';
import DefaultFooter from '@/components/footer/default';
import initTranslations from '../../../../i18n';
import TranslationsProvider from '../../../../../components/TranslationProvider';
import {
  i18nNamespaces,
} from "@/utils/translationsContansts";
import Faq from "@/components/contact/FAQ";
import Membership from '@/components/contact/Membership';


export const metadata = {
  title: "Contact Membership || HolidayAir",
  description: "HolidayAir Contact Membership",
};


const ContactMembership = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    t && resources && locale && (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        {/* Lógica específica para la página contact/membership */}

        {/* Puedes reutilizar componentes existentes o agregar nuevos componentes aquí */}

        <div className="header-margin"></div>
      {/* header top margin */}

      <Header10 locale={locale}/>
      <section className="layout-pb-md">
          <div className="container">
            <div className="row y-gap-20 pt-40">
              <div className="col-auto">
                <h2>{t("contactSupport:membership-title")}</h2>
              </div>
              {/* End .col-auto */}
              <Membership />
            </div>
          </div>
        </section>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-30 fw-500">
                  {t("contactSupport:faq-title")}
                </h2>
              </div>
              {/* End .col */}

              <div className="col-lg-8">
                <div className="accordion -simple row y-gap-20 js-accordion">
                  <Faq
                    faqContent={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    translationKey={"contactSupport:membership-faq"}
                    showIcon={false}
                  />
                </div>
              </div>
              {/* End .col-lg-8 */}
            </div>
            {/* End .row */}
            <div className="col-xl-8">
              <p className="text-15 text-dark-1">
                <br />
                {t("contactSupport:membership-end")}
                <br />
              </p>
            </div>
          </div>
          </section>
        <ContactScript/>
        {/* End Call To Actions Section */}

        <DefaultFooter t={t} locale={locale} />
        {/* End Call To Actions Section */}
      </TranslationsProvider>
    )
  );
};

export default dynamic(() => Promise.resolve(ContactMembership), { ssr: false });
