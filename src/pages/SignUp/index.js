import React from "react";
import { useFormik } from "formik";
import { login } from "./action";
import { toast } from "react-toastify";
import Validate from "./validate";
import Loading from "../../components/Loading";
import history from "../../utils/history";
import Form from "./Form";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: Validate,
    onSubmit: async (values) => {
      setIsLoading(true);

      const user = {
        username: values.username,
        password: values.password,
        phoneNumber: values.phoneNumber,
      };
      try {
        await login(user);

        history.push("/events");
      } catch (err) {
        toast.error("An error occurred while submitting form");
      } finally {
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

export default Login;
