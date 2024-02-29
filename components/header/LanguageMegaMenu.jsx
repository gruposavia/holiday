"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const LanguageMegaMenu = ({ textClass, locale }) => {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = [
    { id: 1, language: " 🇺🇸 English", country: "United States", code: "en" },
    { id: 2, language: " 🇪🇸 Español", country: "Latinoamerica", code: "es" },
  ];
  const langIndex = languageContent.findIndex((e) => e.code === currentLocale);
  const validateLanguage = () => {
    if (langIndex > 0) return langIndex;
    else if (navigator.language.slice(0, 2) === "en") return 0;
    else if (navigator.language.slice(0, 2) === "es") return 1;
    return 1;
  };
  const [selectedCurrency, setSelectedCurrency] = useState(
    languageContent[validateLanguage()]
  );

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
    const newLocale = item.code;
    if (newLocale !== currentLocale) {
      if (currentPathname.includes(locale))
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      else router.push(currentPathname.replace("/", `/${newLocale}`));
    }
  };

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-language-mainTitle">
            {" "}
            {selectedCurrency.language}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">{t("common:select-lng")}</div>
            {/* End title */}
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency.country === item.country ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;
