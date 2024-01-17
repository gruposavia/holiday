'use client'
import { useTranslation } from 'react-i18next';
const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "faq:title-one",
      content: "faq:content-one",
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "faq:title-two",
      content: "faq:content-two",
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "faq:title-three",
      content: "faq:content-three",
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "faq:title-four",
      content: "faq:content-four",
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "faq:title-five",
      content: "faq:content-five",
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: "faq:title-six",
      content: "faq:content-six",
    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: "faq:title-seven",
      content: "faq:content-seven",
    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "faq:title-eight",
      content: "faq:content-eight",
    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "faq:title-nine",
      content: "faq:content-nine",
    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: "faq:title-ten",
      content: "faq:content-ten",
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: "faq:title-eleven",
      content: "faq:content-eleven",
    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title: "faq:title-twelve",
      content: "faq:content-twelve",
    },
    {
      id: 13,
      collapseTarget: "Thirteen",
      title: "faq:title-thirteen",
      content: "faq:content-thirteen",
    },
    {
      id: 14,
      collapseTarget: "Fourteen",
      title: "faq:title-fourteen",
      content: "faq:content-fourteen",
    },
];
  
  const { t } = useTranslation();
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{t(`${item.title}`)}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{t(`${item.content}`)}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
