
'use client'

import { useState } from "react";
import { useTranslation } from 'react-i18next';

const InputBooking = ({
    title,
    placeholder, 
    search
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation()


  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
        //   data-bs-toggle="dropdown"
        //   data-bs-auto-close="true"
        //   data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">{title}</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder={placeholder && placeholder}
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBooking;
