const evaluateErrors = (flyingFrom, flyingTo, departDate, returnDate) => {

    let errors = {
      flyingFrom: false,
      flyingTo: false,
      returnBeforeDepart: false
    };
  

    if (!flyingFrom) {
      errors.flyingFrom = true;
    }
  
    // Evaluar si flyingTo está vacío
    if (!flyingTo) {
      errors.flyingTo = true;
    }
  

    if (returnDate.toDate() <= departDate.toDate()) {
      errors.returnBeforeDepart = true;
    }
  
    const hasErrors = Object.values(errors).some((error) => error);
  
    return {
      errors,
      hasErrors
    };
  };
  export default evaluateErrors;