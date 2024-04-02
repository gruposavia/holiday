"use client";

import DatePicker from "react-multi-date-picker";

const DateSearch = ({ date, setDate }) => {
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={date}
        onChange={(date) => setDate(date)}
        numberOfMonths={2}
        offsetY={10}
        range={false}
        format="DD MMMM YYYY"
        multiple={false}
      />
    </div>
  );
};

export default DateSearch;
