import EventList from "../pages/EventList";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";

const EventRoutes = [
  {
    path: "/event/event-list",
    exact: "exact",
    component: EventList,
  },
  {
    path: "/event/create-event",
    exact: "exact",
    component: CreateEvent,
  },
  {
    path: "/event/edit-event",
    exact: "exact",
    component: EditEvent,
  },
];

export default EventRoutes;
