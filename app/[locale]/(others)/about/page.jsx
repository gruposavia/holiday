import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";
import Image from "next/image";
import Counter from "@/components/counter/Counter";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';

export const metadata = {
  title: "About || HolidayAir",
  description: "HolidayAir",
};
const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center', 'about'
]
const About = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t && locale && <TranslationsProvider 
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
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 t={t}/>
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t('about:our-team-title')}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t('about:our-team-subtitle')}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className=" pt-40 js-section-slider">
            <div className="item_gap-x30">
              <Team1 />
            </div>
          </div>
          {/* End  js-section-slider */}
        </div>
        {/* End container */}
      </section>
      {/* End team section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter t={t}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
