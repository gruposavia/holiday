import React from 'react'
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import { useTranslation } from 'react-i18next';
import SearchButton from './SearchButton'

export default function FlyCompleteSearch() {
  const { t } = useTranslation()
  return (
    <div className="button-grid items-center">
    <FlyingFromLocation />
    {/* End Location Flying From */}

    <FlyingToLocation />
    {/* End Location Flying To */}

    <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{t('fly-complete-search:depart')}</h4>
        <DateSearch />
      </div>
    </div>
    {/* End Depart */}

    <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{t('fly-complete-search:return')}</h4>
        <DateSearch />
      </div>
    </div>
    {/* End Return */}

    <GuestSearch />
    {/* End guest */}

    <SearchButton onSearch={() =>  {}} />
    {/* End search button_item */}
  </div>
  )
}
