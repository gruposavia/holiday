import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import LocationTopBar from "@/components/common/LocationTopBar";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';
export const metadata = {
  title: "Contact || HolidayAir",
  description: "HolidayAir",
};
const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center'
]
const Contact = async ({ params: { locale } }) => {

  const { t, resources, } = await initTranslations(locale, i18nNamespaces);

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

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.605112397237!2d-80.300472!3d25.783603699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9bf14b85ff1%3A0xcfbc4df8b4c67c4!2s6303%20Waterford%20District%20Dr%20%23400%2C%20Miami%2C%20FL%2033126%2C%20USA!5e0!3m2!1sen!2sar!4v1705059241111!5m2!1sen!2sar"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">{t('contact:form-title')}</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">{t('contact:contact-us-title')}</div>
            </div>



              <Address t={t}/>

          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          {/* <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div> */}
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-30">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <CallToActions/>
      {/* End Call To Actions Section */}

      <DefaultFooter t={t} locale={locale}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
