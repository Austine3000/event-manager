import React from "react";
import { Modal, Button } from "react-bootstrap";
import Table from "./Table";
import history from "../../utils/history";
import Loading from "../../components/Loading";

const EventList = () => {
  const [events, setEvents] = React.useState([]);
  const [deleteId, setDeleteId] = React.useState(0);

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  React.useEffect(() => {
    const events = JSON.parse(localStorage.events || "[]");

    setEvents(events);
  }, []);

  const editEvent = (id) => {
    history.push(`/event/edit-event/${id}`);
  };

  const deleteEvent = () => {
    const events = JSON.parse(localStorage.events || "[]");

    const newEvents = events.filter((item) => item.id !== deleteId);

    localStorage.setItem("events", JSON.stringify(newEvents));
    setShow(false);
    setEvents(newEvents);
  };

  const goToCreateEvent = () => {
    history.push("/event/create-event");
  };
  return (
    <Loading>
      <Table
        events={events}
        handleShow={handleShow}
        editEvent={editEvent}
        goToCreateEvent={goToCreateEvent}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to delete an event</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteEvent}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Loading>
  );
};

export default EventList;
