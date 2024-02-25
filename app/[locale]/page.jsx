import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_10/page";
import initTranslations from '../i18n';
import TranslationsProvider from '../../components/TranslationProvider';

export const metadata = {
  title: "Home || HolidayAir",
  description: "Explore the best holiday destinations with HolidayAir. Find exclusive travel deals, book flights, and create unforgettable memories.",
};

const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer', 'contact', 'faq', 'help-center'
]

export default async function Home({ params: { locale } }) {


  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    t && resources && locale && <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
        <Wrapper>
          <MainHome t={t} locale={locale} />
        </Wrapper>
      </TranslationsProvider>
    </>
  );
}
