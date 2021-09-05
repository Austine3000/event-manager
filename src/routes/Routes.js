import Login from "../pages/Login";
import Signup from "../pages/SignUp";

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
];

export default Routes;
