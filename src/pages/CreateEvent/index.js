import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import EvenForm from "../../components/EvenForm";
import { createEvent } from "./actions";
import Validate from "./validate";
import history from "../../utils/history";
import Loading from "../../components/Loading";

const CreateEvent = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      description: "",
    },
    validate: Validate,
    onSubmit: async (values) => {
      setIsLoading(true);

      const user = JSON.parse(localStorage.user || "{}");

      const events = {
        id: Math.floor(Math.random() * 9999999999999999),
        name: values.name,
        date: values.date,
        description: values.description,
        userId: user.id,
      };
      const response = createEvent(events);
      toast.success(response.message);
      history.push("/event/event-list");
    },
  });
  return (
    <Loading>
      <EvenForm formik={formik} isLoading={isLoading} title="Create Event" />
    </Loading>
  );
};

export default CreateEvent;
