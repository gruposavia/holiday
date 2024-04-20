"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const counters = [
  { name: "adult", defaultValue: 1, label: "12+" },
  { name: "child", defaultValue: 0, label: "2 - 11" },
  { name: "infant", defaultValue: 0, label: "0 - 2" },
];

const Counter = ({
  name,
  defaultValue,
  onCounterChange,
  label,
  t,
  guestCounts,
}) => {
  const [count, setCount] = useState(defaultValue);

  const incrementCount = () => {
    // Calculate the total number of passengers after incrementing the current counter
    const totalPassengers = Object.values(guestCounts).reduce(
      (total, count) => total + count,
      0
    );

    // If the total number of passengers exceeds 9, or the current counter is already 9
    if (totalPassengers >= 9 || count >= 9) return;

    //if infants exceed adults, it is not updated
    const updatedCount = count + 1;
    if (name === "infant" && updatedCount > guestCounts.adult) return;
    setCount(updatedCount);
    onCounterChange(name, updatedCount);
  };

  const decrementCount = () => {
    if (count <= 0) return;
    const updatedCount = count - 1;
    setCount(updatedCount);
    onCounterChange(name, updatedCount);
  };

  return (
    <>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">
            {t(`fly-complete-search:${name}`)}
          </div>

          <div className="text-14 lh-12 text-light-1 mt-5">
            {t(`fly-complete-search:ages`, { label })}
          </div>
        </div>
        {/* End .col-auto */}
        <div className="col-auto">
          <div className="d-flex items-center js-counter">
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
              onClick={decrementCount}
            >
              <i className="icon-minus text-12" />
            </button>
            {/* decrement button */}
            <div className="flex-center size-20 ml-15 mr-15">
              <div className="text-15 js-count">{count}</div>
            </div>
            {/* counter text  */}
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
            {/* increment button */}
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */}
      <div className="border-top-light mt-24 mb-24" />
    </>
  );
};

const GuestSearch = ({ guestCounts, setGuestCounts }) => {
  const { t } = useTranslation();

  const handleCounterChange = (name, value) => {
    const totalPassengers = Object.values(guestCounts).reduce(
      (total, count) => total + count,
      0
    );
    if (totalPassengers + value - guestCounts[name] > 9) {
      return;
    }
    if (name === "infant" && value > guestCounts.adult) {
      return;
    }
    setGuestCounts((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="searchMenu-guests px-24 lg:py-20 lg:px-0 js-form-dd js-form-counters">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">
          {t("fly-complete-search:travelers")}
        </h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          {Object.entries(guestCounts).map(([type, count]) => (
            <span key={`js-count-${type}`} className={`js-count-${type}`}>
              {count} {t(`fly-complete-search:${type}`)}{" "}
            </span>
          ))}
        </div>
      </div>
      {/* End guest */}

      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-30 py-30 rounded-4 counter-box">
          {counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              defaultValue={counter.defaultValue}
              onCounterChange={handleCounterChange}
              label={counter.label}
              guestCounts={guestCounts}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GuestSearch;
