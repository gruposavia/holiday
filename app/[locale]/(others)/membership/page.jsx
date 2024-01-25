import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import MembershipCards from "@/components/membership/MembershipCards";

import RentalProperties from "@/components/rental-list/rental-list-v2/RentalProperties";


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

      <Header10 locale={locale}/>
      {/* End Header 1 */}


      
      <div className="col-xl-12 ">

              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30 mx-4 w-full ">

                <MembershipCards/>
              </div>

            </div>

      {/* <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between pt-30">
            <WhyChoose />
          </div>

        </div>

      </section> */}
      {/* End Why Choose Us section */}

      <CallToActions/>
      {/* End Call To Actions Section */}

      <DefaultFooter t={t}/>
      {/* End Call To Actions Section */}
    </TranslationsProvider>
  );
};

export default dynamic(() => Promise.resolve(Membership), { ssr: false });
