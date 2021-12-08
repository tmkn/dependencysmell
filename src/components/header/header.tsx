import React from "react";
import { Container } from "../container/Container";

export const Header: React.FC = ({ children }) => {
    return (
        <header className="flex border-b bg-white">
            <Container>
                <div className="flex py-4 items-center w-full">
                    <h1 className="text-lg flex-none font-bold font-source-code-pro">NPMSmell</h1>
                    <div className="flex-grow ml-8"></div>
                    <div className="flex-none">Highlight outdated NPM packages</div>
                </div>
            </Container>
        </header>
    );
};
