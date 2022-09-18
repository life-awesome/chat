import { Navigate } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import { IRoute } from "./types/route";

export const privateRoutes: IRoute[] = [];
export const publicRoutes: IRoute[] = [
  {
    route: "/auth",
    component: <LoginPage />,
  },
  {
    route: "*",
    component: <Navigate to={"/auth"} replace />,
  },
];
