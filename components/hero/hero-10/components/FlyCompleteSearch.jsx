import React, { useState } from "react";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import { useTranslation } from "react-i18next";
import SearchButton from "./SearchButton";
import { DateObject } from "react-multi-date-picker";
import { useRouter } from "next/navigation";
import evaluateErrors from "@/utils/flySearchErrors";
import { useNotification } from "@/context/NotificationContext";

export const buildDate = (date) => `${date.day}.${date.month}.${date.year}`;

export default function FlyCompleteSearch() {
  const { t } = useTranslation();
  const { showFlyErrorNotification } = useNotification();
  const router = useRouter();

  const today = new DateObject();

  const [departDate, setDepartDate] = useState(today);
  const [returnDate, setReturnDate] = useState(
    new DateObject().set(today).add(7, "days")
  );

  const handleDateChange = (date, type) => {
    if (type === "depart") {
      setDepartDate(date);
    } else if (type === "return") {
      setReturnDate(date);
    }
  };
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
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
    const flyErrors = evaluateErrors(
      flyingFrom,
      flyingTo,
      departDate,
      returnDate,
      today
    );
    if (flyErrors.hasErrors) {
      return Object.entries(flyErrors.errors).forEach(([key, value]) => {
        if (value) {
          switch (key) {
            case "flyingFrom":
              showFlyErrorNotification("fly-complete-search:flyingFrom");
              break;
            case "flyingTo":
              showFlyErrorNotification("fly-complete-search:flyingTo");
              break;
            case "returnBeforeDepart":
              showFlyErrorNotification(
                "fly-complete-search:returnBeforeDepart"
              );
              break;
            case "equalLocations":
              showFlyErrorNotification("fly-complete-search:equalLocations");
              break;
            case "departDatePast":
              showFlyErrorNotification("fly-complete-search:departDatePast");
              break;
            case "returnDatePast":
              showFlyErrorNotification("fly-complete-search:returnDatePast");
              break;
            default:
              break;
          }
        }
      });
    }
    router.push(routeSearch);
  };

  return (
    <div className="button-grid items-center">
      <FlyingFromLocation
        filter={flyingTo}
        flyingFrom={flyingFrom}
        setFlyingFrom={setFlyingFrom}
      />
      {/* End Location Flying From */}

      <FlyingToLocation
        flyingTo={flyingTo}
        setFlyingTo={setFlyingTo}
        filter={flyingTo}
      />
      {/* End Location Flying To */}

      <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">
            {t("fly-complete-search:depart")}
          </h4>
          <DateSearch
            date={departDate}
            setDate={(date) => handleDateChange(date, "depart")}
          />
        </div>
      </div>
      {/* End Depart */}

      <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">
            {t("fly-complete-search:return")}
          </h4>
          <DateSearch
            date={returnDate}
            departDate={departDate}
            setDate={(date) => handleDateChange(date, "return")}
          />
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
