
'use client'

import Link from "next/link";

import {
  homeItems,
} from "../../data/mainMenuData";

import {

  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useTranslation } from 'react-i18next';
import { usePathname } from "next/navigation";


const MainMenu = ({ style = "" , locale }) => {
  const pathname = usePathname();

  const { t } = useTranslation();



  return (
     <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href={`/${locale}/`}>{t('home')}</Link>

        </li>
        <li className={pathname === "/membership" ? "current" : ""}>
          <Link href={`/${locale}/membership`}>{t('membership')}</Link>
        </li>
        
        <li className={pathname === "/help-center" ? "current" : ""}>
           <Link href={`/${locale}/help-center`}>{t('help-center')}</Link>
        </li>

        <li className={pathname === "/contact" ? "current" : ""}>
        <Link href={`/${locale}/contact`}>{t('contact')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
