import React from "react";

export const Container: React.FC = ({ children }) => {
    return (
        <div className="flex flex-grow">
            <div className="flex-grow xl:mx-auto mx-4 xl:p-0 xl:max-w-screen-xl">{children}</div>
        </div>
    );
};
