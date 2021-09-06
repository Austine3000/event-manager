import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import AppRoute from "./AppRoute";
import EventRoutes from "./EventRoutes";

const Routes = [
  {
    path: "/login",
    exact: "exact",
    component: Login,
  },
  {
    path: "/signup",
    exact: "exact",
    component: Signup,
  },
  {
    path: "/event",
    component: AppRoute,
    routes: EventRoutes,
  },
];

export default Routes;
