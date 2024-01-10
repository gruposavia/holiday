'use client'
import { useTranslation } from 'react-i18next';

const BlockGuide = async () => {
  const { t } = useTranslation()
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle -md">
            <h2 className="sectionTitle__title">{t(`choose-us:title`)}</h2>
            <p className=" sectionTitle__text mt-5 sm:mt-0">
              {t(`choose-us:subtitle`)}
            </p>
          </div>
        </div>
      </div>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{t(`choose-us:img-${item.id}`)}</h4>
              {/* //<p className="text-15 mt-10">{item.text}</p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
