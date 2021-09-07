import React from "react";
import { useFormik } from "formik";
import { signup } from "./action";
import { toast } from "react-toastify";
import Validate from "./validate";
import Loading from "../../components/Loading";
import history from "../../utils/history";
import Form from "./Form";

const Signup = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      phoneNumber: "",
    },
    validate: Validate,
    onSubmit: async (values) => {
      setIsLoading(true);

      const user = {
        id: Math.floor(Math.random() * 9999999999999999),
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        password: values.password,
        phoneNumber: values.phoneNumber,
      };
      const response = signup(user);

      if (response.status === 200) {
        toast.success(response.message);

        setIsLoading(false);
        history.push("/event/event-list");
      } else {
        toast.error(response.message);

        setIsLoading(false);
      }
    },
  });
  return (
    <Loading>
      <Form formik={formik} isLoading={isLoading} />
    </Loading>
  );
};

export default Signup;
