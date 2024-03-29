import Image from "next/image";
import Link from "next/link";

const HelpBlock = ({ t, locale }) => {
  const helpBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "help-block-1-title",
      text: "help-block-1-description",
      path: `/${locale}/contact/reservations`,
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "help-block-2-title",
      text: "help-block-2-description",
      path: `/${locale}/contact/reservations`,
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "help-block-3-title",
      text: "help-block-3-description",
      path: `/${locale}/contact/reservations`,
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "help-block-4-title",
      text: "help-block-4-description",
      path: `/${locale}/contact/reservations`,
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "help-block-5-title",
      text: "help-block-5-description",
      path: `/${locale}/contact/memberships`,
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: "help-block-6-title",
      text: "help-block-6-description",
      path: `/${locale}/help-center`,
    },
  ];
  return (
    <>
      {helpBlockContent.map((item) => (
        <Link key={item.id} href={item.path} className="col-lg-4 col-md-6">
          <div className="bg-blue-1-05 rounded-4 px-50 py-40">
            <div className="size-70 bg-white rounded-full flex-center">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-24">
              <div className="text-18 fw-500">
                {t(`help-center:${item.title}`)}
              </div>
              <p className="mt-5">{t(`help-center:${item.text}`)}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default HelpBlock;
