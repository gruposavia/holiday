'use client'
import React from 'react'
import CallToActions from "@/components/common/CallToActions";
import Header10 from "@/components/header/header-10";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/notFound/NotFound";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const NotFoundScreen = ()  => {

  // const router = useRouter();

  // Accede al locale actual desde el objeto router
  // const { locale  } = router;
  // console.log("🚀 ~ NotFoundScreen ~ locale:", locale)

  
  //const { t } = useTranslation();
  return (
    <>
    <div className="header-margin"></div>
    {/* header top margin */}

    {/* <Header10 locale={'en'} /> */}
    {/* End Header 1 */}

    {/* <NotFound t={t} locale={locale}/> */}
    {/* End 404 section */}

    <CallToActions />
    {/* End Call To Actions Section */}

    {/* <DefaultFooter t={t}/> */}
    </>
  )
}
export default NotFoundScreen