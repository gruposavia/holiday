import dynamic from "next/dynamic";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import TermsConent from "@/components/common/TermsContent";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';

export const metadata = {
  title: "Terms & Conditions || HolidayAir",
  description: "HolidayAir",
};

const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center'
]
const Terms = async ({ params: { locale } }) => {
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

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent locale={locale}/>
          </div>
        </div>
      </section>
      {/* End terms section */}

      <DefaultFooter t={t}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
