import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import MembershipCards from "@/components/membership/MembershipCards";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';


export const metadata = {
  title: "Membership || HolidayAir",
  description: "HolidayAir",
};
const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services', 'block', 'footer', 'contact', 'faq', 'help-center', 'membership'
]
const Membership = async ({ params: { locale } }) => {

  const { t, resources, } = await initTranslations(locale, i18nNamespaces);

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

      <div className="col-xl-12 pl-10 pt-50 pr-4 justify-center">
        <div className=""></div>
        {/* End mt--30 */}
        <div className="row y-gap-30 mx-4 w-full x-gap-30 justify-center px-lg-5 mb-50 mt-30">
          <MembershipCards locale={locale}/>
        </div>

      </div>
      {/* End Why Choose Us section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter t={t} />
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(Membership), { ssr: false });
