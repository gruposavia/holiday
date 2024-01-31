import dynamic from "next/dynamic";
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../../components/TranslationProvider';

import HelpCenterIndex from "@/components/help-center/index";
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

     < HelpCenterIndex  locale={locale} />
    </TranslationsProvider>
  );
};

export default dynamic(() => {
  return Promise.resolve(HelpCenter);
}, { ssr: false });
