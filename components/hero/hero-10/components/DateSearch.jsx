"use client";

import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({ date, setDate, departDate }) => {
  const today = new DateObject();
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
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
      />
    </div>
  );
};

export default DateSearch;
