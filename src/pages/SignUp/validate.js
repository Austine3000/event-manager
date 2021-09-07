const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Firstname is required";
  }

  if (!values.lastname) {
    errors.lastname = "Lastname is required";
  }

  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validate;
