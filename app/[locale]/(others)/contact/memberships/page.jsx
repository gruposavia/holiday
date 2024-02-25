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

        <ContactScript/>
        {/* End Call To Actions Section */}

        <DefaultFooter t={t} locale={locale} />
        {/* End Call To Actions Section */}
      </TranslationsProvider>
    )
  );
};

export default dynamic(() => Promise.resolve(ContactMembership), { ssr: false });
