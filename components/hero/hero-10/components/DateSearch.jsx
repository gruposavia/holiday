"use client";

import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({
  date,
  setDate,
  departDate,
  availableDates,
  disabled,
  maxDate,
}) => {
  const today = new DateObject();
  const isDateDisabled = (date) => {
    const formattedDate = new DateObject(date).format("YYYY-MM-DD");
    return !availableDates.some(
      (availableDate) => availableDate.format("YYYY-MM-DD") === formattedDate
    );
  };
  return (
    <div
      className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker"
      style={{ cursor: disabled && "not-allowed" }}
    >
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={date}
        onChange={(date) => setDate(date)}
        numberOfMonths={1}
        offsetY={10}
        range={false}
        format="DD MMMM YYYY"
        multiple={false}
        highlightToday={false}
        minDate={departDate || today}
        maxDate={maxDate || new DateObject(today).set(today).add(1, "year")}
        mapDays={({ date }) => {
          const formattedDate = date.format("YYYY-MM-DD");
          const isDisabled = isDateDisabled(formattedDate);
          return {
            disabled: isDisabled,
          };
        }}
        disabled={disabled}
        style={{ cursor: disabled && "not-allowed" }}
      />
    </div>
  );
};

export default DateSearch;
