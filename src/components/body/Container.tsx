import React, { ReactNode } from "react";

const Container = ({
  children,
  containerStyles = "",
}: {
  children: ReactNode;
  containerStyles?: string;
}) => {
  return <div className={`w-full p-24 ${containerStyles}`}>{children}</div>;
};

export default Container;
