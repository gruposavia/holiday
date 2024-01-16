import React from 'react'
import InputBooking from "./InputBooking";
import { useTranslation } from 'react-i18next';
import SearchButton from './SearchButton';
import DateSearch from "./DateSearch";

export default function FlyStatusSearch() {
  const { t } = useTranslation();

  const renderInputs = () => {
    const inputFields = [
      { id: 1, title: t('fly-complete-search:hero-flight'), placeholder: t('fly-complete-search:hero-reference-placeholder') },
    ];

    return inputFields.map((input) => (
      <InputBooking key={input.id} title={input.title} placeholder={input.placeholder}/>
    ));
  };

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    Router.push("");
  };

  return (
    <div className="button-grid items-center">
      {renderInputs()}
      <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{t('fly-complete-search:hero-date')}</h4>
        <DateSearch />
      </div>
    </div>
      <SearchButton onSearch={handleSearch}/>
    </div>
  );
}
