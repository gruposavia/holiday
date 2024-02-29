import Image from "next/image";

const HelpBlock = ({t}) => {
  const helpBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: 'help-block-1-title',
      text: 'help-block-1-description'
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: 'help-block-2-title',
      text: 'help-block-2-description'
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: 'help-block-3-title',
      text: 'help-block-3-description'
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: 'help-block-4-title',
      text: 'help-block-4-description'
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: 'help-block-5-title',
      text: 'help-block-5-description'
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: 'help-block-6-title',
      text: 'help-block-6-description'
    },
  ];
  return (
    <>
      {helpBlockContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="bg-blue-1-05 rounded-4 px-50 py-40">
            <div className="size-70 bg-white rounded-full flex-center">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-24">
              <div className="text-18 fw-500">{t(`help-center:${item.title}`)}</div>
              <p className="mt-5">{t(`help-center:${item.text}`)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HelpBlock;
