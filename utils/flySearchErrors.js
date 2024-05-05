const evaluateErrors = (
  flyingFrom,
  flyingTo,
  departDate,
  returnDate,
  today
) => {
  let errors = {
    flyingFrom: false,
    flyingTo: false,
    returnBeforeDepart: false,
    equalLocations: false,
    departDatePast: false,
    returnDatePast: false,
  };

  if (!flyingFrom) {
    errors.flyingFrom = true;
  }

  if (!flyingTo) {
    errors.flyingTo = true;
  }

  if (returnDate.toDate() < departDate.toDate()) {
    errors.returnBeforeDepart = true;
  }

  if (flyingFrom !== "" && flyingTo !== "" && flyingFrom === flyingTo) {
    errors.equalLocations = true;
  }

  const hasErrors = Object.values(errors).some((error) => error);

  return {
    errors,
    hasErrors,
  };
};
export default evaluateErrors;
