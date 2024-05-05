import React, { useState, useEffect } from "react";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";
import { useTranslation } from "react-i18next";
import SearchButton from "./SearchButton";
import { DateObject } from "react-multi-date-picker";
import { useFlightService } from "@/context/FlightServiceContext";

export const buildDate = (date) => `${date.day}.${date.month}.${date.year}`;

export default function FlyCompleteSearch() {
  const { t } = useTranslation();
  const { searchFlights, loadingSearch, getAvailableFlightDates } =
    useFlightService();
  const today = new DateObject();

  const [departDate, setDepartDate] = useState(today);

  const [returnDate, setReturnDate] = useState(
    new DateObject().set(today).add(7, "days")
  );
  const [availableDates, setAvailableDates] = useState();

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
  useEffect(() => {
    const fetchAvailableDates = async () => {
      if (flyingFrom && flyingTo) {
        const dates = await getAvailableFlightDates(flyingFrom, flyingTo);
        if (dates[0] > departDate) setDepartDate(dates[0]);

        if (!dates.includes(returnDate) || dates[1] > returnDate)
          setReturnDate(dates[1]);
        //if (dates[0] < departDate) setDepartDate(dates[0]);

        setAvailableDates(dates);
      }
    };
    fetchAvailableDates();
  }, [flyingFrom, flyingTo, getAvailableFlightDates]);

  useEffect(() => {
    if (departDate > returnDate) setReturnDate(departDate);
  }, [departDate, returnDate]);

  const handleSearch = async () =>
    await searchFlights(
      flyingFrom,
      flyingTo,
      departDate,
      returnDate,
      guestCounts
    );
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
            availableDates={availableDates}
            date={departDate}
            setDate={(date) => handleDateChange(date, "depart")}
            disabled={!availableDates}
            maxDate={
              availableDates && availableDates[availableDates.length - 1]
            }
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
            availableDates={availableDates}
            date={returnDate}
            departDate={departDate}
            setDate={(date) => handleDateChange(date, "return")}
            disabled={!availableDates}
            maxDate={
              availableDates && availableDates[availableDates.length - 1]
            }
          />
        </div>
      </div>
      {/* End Return */}

      <GuestSearch guestCounts={guestCounts} setGuestCounts={setGuestCounts} />
      {/* End guest */}

      <SearchButton onSearch={handleSearch} isLoading={loadingSearch} />
      {/* End search button_item */}
    </div>
  );
}
