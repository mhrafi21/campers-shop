import React from "react";

type DefaultContainerProps = {
  children: React.ReactNode;
};

const DefaultContainer: React.FC<DefaultContainerProps> = ({ children }) => {
  return <div className="max-w-[1280px] mx-auto px-2 sm:px-0 ">{children}</div>;
};

export default DefaultContainer;
