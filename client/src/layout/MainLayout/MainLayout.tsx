import React, { FC } from "react";
import "./style.scss";

interface IProps {
  children: React.ReactNode;
}

const MainLayout: FC<IProps> = ({ children }: IProps) => {
  return <div className="layout">{children}</div>;
};

export default MainLayout;
