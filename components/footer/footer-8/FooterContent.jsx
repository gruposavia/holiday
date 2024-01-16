import Link from "next/link";
import footerDataContent from "../../../data/footerContent";

const FooterContent = ({t, locale}) => {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30 ">{t(`footer:${item.title}`)}</h5>
          <div className="d-flex text-14 y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={`/${locale}${menu.routerPath}`} key={i}>
                {t(`footer:${menu.name}`)}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
