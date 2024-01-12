import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";
import Subscribe from "./Subscribe";

const index = ({t}) => {
  return (
    <footer className="footer -type-2 bg-dark-1 text-white">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img src="/img/general/whiteLogo.png" alt="image" />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo t={t}/>
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-15 pt-60 md:d-flex md:justify-center">
                <div className="col-12">
                  <h5 className="text-16 fw-500 md:text-center">{t('footer:app-title')}</h5>
                </div>
                {/* End .col */}

                <AppButton />
              </div>
              {/* End .row */}

              <div className="mt-60">
                <h5 className="text-16 fw-500 mb-10">
                 {t('footer:follow-us')}
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="row y-gap-30">
                <div className="col-12">
                  <h5 className="text-16 fw-500 mb-15">
                  {t('footer:updates')}
                  </h5>
                  <Subscribe />
                </div>
                {/* End .col */}

                <FooterContent />
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15">
          <Copyright t={t}/>
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
