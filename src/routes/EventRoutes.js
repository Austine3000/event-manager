import EventList from "../pages/EventList";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";

const EventRoutes = [
  {
    path: "/event/event-list",
    exact: "exact",
    component: EventList,
    authRequired: true,
  },
  {
    path: "/event/create-event",
    exact: "exact",
    component: CreateEvent,
    authRequired: true,
  },
  {
    path: "/event/edit-event/:id",
    exact: "exact",
    component: EditEvent,
    authRequired: true,
  },
];

export default EventRoutes;
