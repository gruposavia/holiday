import dynamic from "next/dynamic";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import Entertainment from "@/components/common/Entertainment";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';
import Image from "next/image";
import {
  i18nNamespaces,
} from "@/utils/translationsContansts";

export const metadata = {
  title: "Luggage || HolidayAir",
  description: "HolidayAir",
};


const Luggage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t && resources && locale && <TranslationsProvider 
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header10 locale={locale} />
      {/* End Header 1 */}
      <section className="section-bg layout-pb-md">
        <div className=" col-12">
          <Image
            width={1920}
            height={600}
            src={`/img/entertainment/${locale}.jpg`}
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

      </section>
      <section className="layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <Entertainment locale={locale}/>
          </div>
        </div>
      </section>
      {/* End terms section */}

      <DefaultFooter t={t}  locale={locale}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(Luggage), { ssr: false });
