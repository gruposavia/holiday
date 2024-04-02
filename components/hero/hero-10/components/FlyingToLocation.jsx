"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const FlyingToLocation = ({ setFlyingTo }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const locationSearchContent = [
    {
      id: 1,
      name: "Miami",
      code: "MIA",
    },
    {
      id: 2,
      name: "Orlando",
      code: "MCO",
    },
    {
      id: 3,
      name: "Buenos Aires",
      code: "EZE",
    },
    {
      id: 4,
      name: "Punta Cana",
      code: "PUJ",
    },
  ];

  const filteredOptions = locationSearchContent.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setFlyingTo(item.code);
  };

  return (
    <>
      <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">
            {t("fly-complete-search:flying-to")}
          </h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder={t("fly-complete-search:going-to")}
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {filteredOptions.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {t(`fly-complete-search:address-${item.code}`)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyingToLocation;
