import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import MembershipCards from "@/components/membership/MembershipCards";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../../components/TranslationProvider";
import Image from "next/image";
import { i18nNamespaces } from "@/utils/translationsContansts";
import { NotificationProvider } from "@/context/NotificationContext";

export const metadata = {
  title: "Membership || HolidayAir",
  description: "HolidayAir",
};

const Membership = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    t &&
    resources &&
    locale && (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <NotificationProvider locale={locale}>
          {/* End Page Title */}

          <div className="header-margin"></div>
          {/* header top margin */}

          <Header10 locale={locale} />
          {/* End Header 1 */}
          <section className="section-bg layout-pb-md">
            <div className=" col-12">
              <Image
                width={1920}
                height={600}
                src={`/img/membership/membresia-${locale}.jpg`}
                alt="image"
                priority
              />
            </div>
            {/* End section-bg__item */}
          </section>
          {/* End About Banner Section */}
          <div className="col-xl-12 pl-10 pt-50 pr-4 justify-center">
            {/* End mt--30 */}
            <div className="row y-gap-30 mx-4 w-full x-gap-30 justify-center px-lg-6">
              <MembershipCards locale={locale} />
            </div>
            <div className="w-full d-flex flex-column mb-60">
              <p className="text-12 text-center ">
                {t("membership:disclaimer-1")}
              </p>
              <p className="text-12 text-center">
                {t("membership:disclaimer-2")}
              </p>
            </div>
          </div>
          {/* End Why Choose Us section */}

          <CallToActions />
          {/* End Call To Actions Section */}

          <DefaultFooter t={t} locale={locale} />
          {/* End Call To Actions Section */}
        </NotificationProvider>
      </TranslationsProvider>
    )
  );
};

export default dynamic(() => Promise.resolve(Membership), { ssr: false });
