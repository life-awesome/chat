import { Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../constants/routes";
import MainLayout from "../layout/MainLayout/MainLayout";
import ChatPage from "../pages/chat/ChatPage";
import LoginPage from "../pages/login/LoginPage";

const useRouter = () => {
  const isAuth: boolean = false;
  return (
    <MainLayout>
      {(isAuth ? privateRoutes : publicRoutes).map(({ route, component }) => (
        <Route path={route} element={component} />
      ))}
    </MainLayout>
  );
};

export default useRouter;
