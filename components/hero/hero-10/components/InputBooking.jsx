"use client";

const InputBooking = ({ title, placeholder, value, onChange }) => {
  return (
    <>
      <div className="searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <h4 className="text-15 fw-500 ls-2 lh-16">{title}</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <input
            autoComplete="off"
            type="search"
            placeholder={placeholder && placeholder}
            className="js-search js-dd-focus"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default InputBooking;
