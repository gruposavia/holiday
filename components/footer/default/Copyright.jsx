import Social from "../../common/social/Social";

const Copyright = ({t, locale}) => {
  
  return (
    t && <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto  md:w-full md:d-flex md:justify-center">
            <div className="d-flex items-center">
              © {new Date().getFullYear()}
              <a
                href="https://themeforest.net/user/ib-themes"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holiday Air -
              </a>
               {t('footer:rights')} 
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto md:w-full md:d-flex md:justify-center">
            <div className="d-flex x-gap-15">
              <a href={`/${locale}/terms`}>{t('footer:privacy')}</a>
              <a href={`/${locale}/terms`}>{t('footer:terms')}</a>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto md:w-full md:d-flex md:justify-center">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              <Social />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
