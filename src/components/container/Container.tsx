import React from "react";

export const Container: React.FC = ({ children }) => {
    return <div className="mx-auto p-4 xl:p-0 xl:max-w-screen-xl">{children}</div>;
};
