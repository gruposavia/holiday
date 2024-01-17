import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Faq from "@/components/faq/Faq";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import HelpSearchBlock from "@/components/block/HelpSearchBlock";
import HelpBlock from "@/components/block/HelpBlock";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';


export const metadata = {
  title: "Help Center || HolidayAir",
  description: "HolidayAir",
};

const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center'
]
const HelpCenter = async({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t && resources && locale && <TranslationsProvider 
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header10 locale={locale}/>
      {/* End Header 1 */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Welcome to the Help Center
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
              {/* End .sectiontitle */}

              <HelpSearchBlock />
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-60 lg:pt-40">
            <HelpBlock />
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
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
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
                <Faq />
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

      <DefaultFooter t={t} />
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => {
  return Promise.resolve(HelpCenter);
}, { ssr: false });
