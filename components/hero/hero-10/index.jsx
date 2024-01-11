'use client'

import FilterSelect from "./components/FilterSelect";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useTranslation } from 'react-i18next';
const Index =  () => {
  const { t } = useTranslation()
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content">
              <h1
                className="text-60 lg:text-40 sm:text-30"
                data-aos="fade-up"
                data-aos-delay="100"
              >
               {t('hero:title')}
              </h1>
              <p className="mt-5" data-aos="fade-up" data-aos-delay="200">
              {t('hero:subtitle')}
              </p>
              <div data-aos="fade-up" data-aos-delay="300">
                
                {/* End .row */}
                <MainFilterSearchBox />
                {/* End filter content */}
              </div>
            </div>
            {/* End .masthead__content */}
          </div>
          {/* End .col-lg-auto */}
        </div>
        {/* End .row */}

        <div
          className="masthead__image"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="row y-gap-30 flex-nowrap">
            <div className="col-auto">
              <img
                src="/img/masthead/10/1.jpg"
                alt="image"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <img
                src="/img/masthead/10/2.png"
                alt="image"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;
