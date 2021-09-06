const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  return errors;
};

export default validate;
