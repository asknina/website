import React, { ReactNode } from "react";

const Container = ({
  children,
  containerStyles = "",
  id = "",
}: {
  children: ReactNode;
  containerStyles?: string;
  id?: string;
}) => {
  return (
    <div className={`w-full ${containerStyles || "p-24"}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
