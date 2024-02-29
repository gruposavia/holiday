import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/notFound/NotFound";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../../components/TranslationProvider";
import { i18nNamespaces } from "@/utils/translationsContansts";
export const metadata = {
  title: "404 || HolidayAir",
  description: "HolidayAir",
};

const index = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t &&
    locale && (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        {/* End Page Title */}

        <div className="header-margin"></div>
        {/* header top margin */}

        <Header10 locale={locale} />
        {/* End Header 1 */}

        <NotFound t={t} locale={locale} />
        {/* End 404 section */}

        <CallToActions />
        {/* End Call To Actions Section */}

        <DefaultFooter t={t} />
        {/* End Call To Actions Section */}
      </TranslationsProvider>
    )
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
