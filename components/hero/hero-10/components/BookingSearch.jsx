import React from 'react';
import InputBooking from "./InputBooking";
import { useTranslation } from 'react-i18next';
import SearchButton from './SearchButton'


export default function BookingSearch() {
  const { t } = useTranslation();

  const renderInputs = () => {
    const inputFields = [
      { id: 1, title: t('fly-complete-search:hero-reference'), placeholder: t('fly-complete-search:hero-reference-placeholder') },
      { id: 2, title: t('fly-complete-search:hero-surname'), placeholder: t('fly-complete-search:hero-surname-placeholder') },
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
      <SearchButton onSearch={handleSearch} />
    </div>
  );
}
