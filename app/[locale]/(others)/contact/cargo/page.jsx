// pages/[locale]/contact/membership/index.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import ContactScript from '@/components/common/contact/ContactCargo';
import Header10 from '@/components/header/header-10';
import DefaultFooter from '@/components/footer/default';
import initTranslations from '../../../../i18n';
import TranslationsProvider from '../../../../../components/TranslationProvider';

export const metadata = {
  title: "Contact Cargo || HolidayAir",
  description: "HolidayAir Contact Cargo",
};

const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services', 'block', 'footer', 'contact', 'faq', 'help-center'
];

const ContactCargo = async ({ params: { locale } }) => {
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

        <ContactScript />
        {/* End Call To Actions Section */}

        <DefaultFooter t={t} locale={locale} />
        {/* End Call To Actions Section */}
      </TranslationsProvider>
    )
  );
};

export default dynamic(() => Promise.resolve(ContactCargo), { ssr: false });
