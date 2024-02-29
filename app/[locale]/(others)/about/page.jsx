import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";
import Image from "next/image";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';
import {
  i18nNamespaces,
} from "@/utils/translationsContansts";
export const metadata = {
  title: "About || HolidayAir",
  description: "HolidayAir",
};

const About = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t && locale && resources && <TranslationsProvider 
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header10 locale={locale}/>
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/pages/about/1.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                {t('about:section-title')}
              </h1>
              <div className="text-white mt-15">
              {t('about:section-subtitle')}
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose locale={locale}/>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <section className="layout-pt-md mb-90">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 t={t}/>
          </div>
        </div>
      </section>
      {/* End about block section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter t={t} locale={locale}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
