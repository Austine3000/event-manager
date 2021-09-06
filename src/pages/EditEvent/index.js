import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import EvenForm from "../../components/EvenForm";
import Validate from "./validate";
import Loading from "../../components/Loading";

const EventList = () => {
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

      const user = {
        name: values.name,
        date: values.date,
        description: values.description,
      };
      try {
      } catch (err) {
        toast.error("An error occurred while submitting form");
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <Loading>
      <EvenForm formik={formik} isLoading={isLoading} title="Edit Event" />
    </Loading>
  );
};

export default EventList;
