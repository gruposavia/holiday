import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_10/page";
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/TranslationProvider";
import { i18nNamespaces } from "@/utils/translationsContansts";
import { NotificationProvider } from "@/context/NotificationContext";

export const metadata = {
  title: "Home || HolidayAir",
  description:
    "Discover exclusive travel deals with HolidayAir. Book flights, plan your stay, and create unforgettable memories in the best holiday destinations. Your dream getaway starts here!",
};

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t &&
    resources &&
    locale && (
      <>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <NotificationProvider locale={locale}>
            <Wrapper>
              <MainHome t={t} locale={locale} />
            </Wrapper>
          </NotificationProvider>
        </TranslationsProvider>
      </>
    )
  );
}
