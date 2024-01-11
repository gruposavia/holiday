import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_10/page";
import initTranslations from '../i18n';
import TranslationsProvider from '../../components/TranslationProvider';
//import i18nNamespaces from '../../utils/translationsContansts'
export const metadata = {
  title: "Home || HolidayAir",
  description: "HolidayAir",
};

const i18nNamespaces = [
  'main-menu', 'hero', 'main-filter-search', 'fly-complete-search', 'choose-us', 'flights',
  'testimonials', 'common', 'popular-routes', 'services','block', 'footer'
]

export default async function Home({ params: { locale } }) {


  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
        <Wrapper>
          <MainHome t={t} />
        </Wrapper>
      </TranslationsProvider>
    </>
  );
}
