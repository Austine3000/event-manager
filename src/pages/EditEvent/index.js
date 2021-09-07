import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import EvenForm from "../../components/EvenForm";
import { updateEvent } from "./actions";
import Validate from "./validate";
import history from "../../utils/history";
import Loading from "../../components/Loading";

const initialValues = {
  name: "",
  date: "",
  description: "",
};

const EventList = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [events, setEvents] = React.useState(initialValues);

  const { id } = useParams();

  const formik = useFormik({
    initialValues: events,
    validate: Validate,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);

      const events = {
        name: values.name,
        date: values.date,
        description: values.description,
      };
      const response = updateEvent(events, id);
      toast.success(response.message);
      history.push("/event/event-list");
    },
  });

  React.useEffect(() => {
    const events = JSON.parse(localStorage.events || "[]");

    const newEvents = events.find((item) => item.id === Number(id));
    setEvents(newEvents);
  }, [id]);
  return (
    <Loading>
      <EvenForm formik={formik} isLoading={isLoading} title="Edit Event" />
    </Loading>
  );
};

export default EventList;
