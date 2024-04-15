import React, { useState } from "react";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import { useTranslation } from "react-i18next";
import SearchButton from "./SearchButton";
import { DateObject } from "react-multi-date-picker";
import { useRouter } from "next/navigation";
const buildDate = (date) => `${date.day}.${date.month}.${date.year}`;

export default function FlyCompleteSearch() {
  const { t } = useTranslation();
  const router = useRouter();
  const today = new DateObject();
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departDate, setDepartDate] = useState(today);
  const [returnDate, setReturnDate] = useState(new DateObject().set(today).add(7, 'days'));

  const [guestCounts, setGuestCounts] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const routeSearch = `${
    process.env.NEXT_PUBLIC_HITIT_URL
  }availability?tripType=ROUND_TRIP&depPort=${flyingFrom}&arrPort=${flyingTo}&departureDate=${buildDate(
    departDate
  )}&returnDate=${buildDate(returnDate)}&adult=${guestCounts.adult}&child=${
    guestCounts.child
  }&infant=${guestCounts.infant}&cabinClas=ECONOMY&currency=USD&language=EN`;

  const handleSearch = () => {
    router.push(routeSearch);
  };
  return (
    <div className="button-grid items-center">
      <FlyingFromLocation
        flyingFrom={flyingFrom}
        setFlyingFrom={setFlyingFrom}
      />
      {/* End Location Flying From */}

      <FlyingToLocation flyingTo={flyingTo} setFlyingTo={setFlyingTo} />
      {/* End Location Flying To */}

      <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">
            {t("fly-complete-search:depart")}
          </h4>
          <DateSearch date={departDate} setDate={setDepartDate} />
        </div>
      </div>
      {/* End Depart */}

      <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">
            {t("fly-complete-search:return")}
          </h4>
          <DateSearch date={returnDate} setDate={setReturnDate} />
        </div>
      </div>
      {/* End Return */}

      <GuestSearch guestCounts={guestCounts} setGuestCounts={setGuestCounts} />
      {/* End guest */}

      <SearchButton onSearch={handleSearch} />
      {/* End search button_item */}
    </div>
  );
}
