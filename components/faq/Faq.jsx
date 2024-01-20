import getFaqContent from '@/lib/getFaqcontent';
import ReactMarkdown from 'react-markdown';

const Faq = async ({t, locale}) => {

  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "faq:title-one",
      content: "section1",
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "faq:title-two",
      content: "section2",
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "faq:title-three",
      content: "section3",
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "faq:title-four",
      content: "section4",
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "faq:title-five",
      content:  "section5",
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: "faq:title-six",
      content:  "section6",
    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: "faq:title-seven",
      content:  "section7",
    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "faq:title-eight",
      content:  "section8",
    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "faq:title-nine",
      content:  "section9",
    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: "faq:title-ten",
      content:  "section10",
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: "faq:title-eleven",
      content:  "section11",
    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title: "faq:title-twelve",
      content:  "section12",
    },
    {
      id: 13,
      collapseTarget: "Thirteen",
      title: "faq:title-thirteen",
      content:  "section13",
    },
    {
      id: 14,
      collapseTarget: "Fourteen",
      title: "faq:title-fourteen",
      content: "section14"
    },
];
  

  return (
    <>
      {faqContent.map(async (item) => (
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
              <ReactMarkdown>{ await getFaqContent(item.content,locale)}</ReactMarkdown>
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
