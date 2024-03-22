import React, { useState } from "react";
import InputBooking from "./InputBooking";
import { useTranslation } from "react-i18next";
import SearchButton from "./SearchButton";
import { useRouter } from "next/navigation";

export default function CheckInSearch({ locale }) {
  const { t } = useTranslation();
  const router = useRouter();

  const inputFields = {
    reference: {
      title: t("fly-complete-search:hero-reference"),
      placeholder: t("fly-complete-search:hero-reference-placeholder"),
    },
    surname: {
      title: t("fly-complete-search:hero-surname"),
      placeholder: t("fly-complete-search:hero-surname-placeholder"),
    },
  };

  const [inputs, setInputs] = useState({
    reference: "",
    surname: "",
  });

  const handleInputChange = (key, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_HITIT_URL}checkin/search?surname=${inputs.surname}&PNRNo=${inputs.surname}&lang=${locale}`
    );
  };

  return (
    <div className="button-grid items-center">
      {Object.keys(inputFields).map((key) => (
        <InputBooking
          key={key}
          title={inputFields[key].title}
          placeholder={inputFields[key].placeholder}
          value={inputs[key]}
          onChange={(e) => handleInputChange(key, e.target.value)}
        />
      ))}
      <SearchButton onSearch={handleSearch} standard={false} />
    </div>
  );
}
