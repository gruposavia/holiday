import Image from "next/image";

const Block1 = ({t}) => {
  return (
    <>
      <div className="col-lg-5 px-30" style={{
        textAlign: 'justify',
        textJustify: 'inter-word',
      }}>
        <h2 className="text-30 fw-600"> {t('about:about-us-title')}</h2>
        <p className="mt-5">{t('about:about-us-subtitle')}</p>
        <div className="mt-60 lg:mt-40 md:mt-20">
        <p className="text-dark-1">
        {t('about:about-us-description-1')}
        </p>
        <br/>
        <p className="text-dark-1" >
        {t('about:about-us-description-2')}
        </p>
        <br/>
        <p className="text-dark-1">
        {t('about:about-us-description-3')}
        </p>
        <br/>
        <p className="text-dark-1">
        {t('about:about-us-description-4')}
        </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
