import dynamic from "next/dynamic";
import Header10 from "@/components/header/header-10";
import Hero10 from "@/components/hero/hero-10";
import Link from "next/link";
import Footer8 from "@/components/footer/footer-8";
import Blog from "@/components/blog/Blog3";
import BlockGuide from "@/components/block/BlockGuide";
import FlightsSection from "@/components/flight/FlightsSection";
import AppBanner from "@/components/home/home-10/AppBanner";
import TopDestinations from "@/components/home/home-10/TopDestinations";
import TestimonialRating from "@/components/home/home-10/TestimonialRating";
import Testimonial from "@/components/home/home-10/Testimonial";
import PopularRoutes from "@/components/home/home-10/PopularRoutes";
import getFaqContent from '@/lib/getFaqcontent';



export const metadata = {
  title: "Home-10 || HolidayAir",
  description: "HolidayAir",
};

const Home10 = async ({t, locale}) => {
  
  
  return (
    t && locale && <>
      {/* End Page Title */}

      <Header10 locale={locale}/>
      {/* End Header 5 */}

      <Hero10 />
      {/* End Hero 5 */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>


      <section className="layout-pt-md layout-pb-md">
      <FlightsSection/>

      </section>
      {/* Popular Routes Sections */}
      <section className="layout-pt-lg layout-pb-lg bg-dark-2">
        <div className="container">
          <div className="row y-gap-40 justify-between text-white">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t('popular-routes:title')}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t('popular-routes:description')}
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                {t('common:more')} <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="relative mt-40 sm:mt-20">
            <PopularRoutes />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>
      {/* End popular routes Section */}

      <AppBanner t={t}/>
      {/* App Banner Section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                {t('services:title')} 
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t('services:description')} 
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog t={t}/>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <Footer8 t={t} locale={locale}/>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home10), { ssr: false });
