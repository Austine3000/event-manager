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
    onSubmit: (values) => {
      setIsLoading(true);

      const user = {
        username: values.username,
        password: values.password,
      };
      const response = login(user);

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

export default Login;
