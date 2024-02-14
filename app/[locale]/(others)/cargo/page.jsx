import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block from "@/components/cargo/Block";
import Image from "next/image";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';

export const metadata = {
  title: "About || HolidayAir",
  description: "HolidayAir",
};
const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center', 'about', 'cargo'
]
const Cargo = async ({ params: { locale } }) => {
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



      <section className="layout-pt-md mb-90">
        <div className="container">
          <div className="row y-gap-30 justify-center items-center">
            <Block t={t} locale={locale}/>
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

export default dynamic(() => Promise.resolve(Cargo), { ssr: false });
