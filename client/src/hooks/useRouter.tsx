import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../constants/routes";
import MainLayout from "../layout/MainLayout/MainLayout";
import ChatPage from "../pages/chat/ChatPage";
import LoginPage from "../pages/login/LoginPage";

const useRouter = () => {
  const isAuth: boolean = false;
  return (
    <MainLayout>
      <Routes>
        {(isAuth ? privateRoutes : publicRoutes).map(
          ({ route, component }, index: number) => (
            <Route key={index} path={route} element={component} />
          )
        )}
      </Routes>
    </MainLayout>
  );
};

export default useRouter;
