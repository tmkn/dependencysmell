import { useState, useEffect } from "react";

import { Visitor } from "@tmkn/packageanalyzer/web";
import type { ILogger, IPackageJsonProvider, PackageVersion } from "@tmkn/packageanalyzer/web";
import { IPackageJson } from "@tmkn/packageanalyzer/build/src/npm";

class ConsoleLogger implements ILogger {
    start() {}
    stop() {}
    log(msg: string) {
        //console.log(msg);

        const div = document.createElement(`div`);
        div.innerText = msg;

        document.body.appendChild(div);

        div.scrollIntoView(true);
    }
    error(msg: string) {
        console.error(msg);
    }
}

class UnpkgProvider implements IPackageJsonProvider {
    async getPackageJson(name: string, version?: string | undefined): Promise<IPackageJson> {
        if (!version) {
            const url = `https://unpkg.com/${name}/`;

            const request = await fetch(url);

            version = request.url.split(`${name}@`)[1];

            if (!version) throw new Error(`Couldn't determine version for ${name}`);
        }

        const url = `https://unpkg.com/${name}@${version}/package.json`;

        const request = await fetch(url);

        return request.json();
    }

    async *getPackageJsons(modules: PackageVersion[]): AsyncIterableIterator<IPackageJson> {
        for (const [name, version] of modules) {
            yield this.getPackageJson(name, version);
        }
    }
}

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const visitor = new Visitor(
                    ["react" /*, "17.0.2"*/],
                    new UnpkgProvider(),
                    new ConsoleLogger()
                );

                const pkg = await visitor.visit("dependencies");

                console.log(`Done`, pkg.fullName);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                Hello World
            </div>
        </>
    );
}

export default App;
