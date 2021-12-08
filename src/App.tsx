import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { Container } from "./components/container/Container";
import { MainSearch } from "./components/search/MainSearch";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className="flex border-b">
                <div className="flex p-4 items-center w-full">
                    <h1 className="text-lg flex-none font-bold font-source-code-pro">NPMsmell</h1>
                    <div className="flex-grow ml-8"></div>
                    <div className="flex-none">Highlight outdated NPM packages</div>
                </div>
            </header>
            <main>
                <div className="flex p-4">
                    <div className="w-2/6">
                        <div className="text-3xl mb-4">Highlight outdated NPM Packages</div>
                        <MainSearch />
                    </div>
                    <div className="flex-grow">lorem ipsum</div>
                </div>
                <div className="p-4">
                    <h1 className="text-2xl font-source-code-pro">Smell Tracker</h1>
                    <h2 className="text-xs">
                        A curated list of downloads for smelly packages at a glance
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="justify-self-center">
                            <MockChart />
                        </div>
                        <div className="justify-self-center">
                            <MockChart />
                        </div>
                        <div className="justify-self-center">
                            <MockChart />
                        </div>
                        <div className="justify-self-center">
                            <MockChart />
                        </div>
                        <div className="justify-self-center">
                            <MockChart />
                        </div>
                    </div>
                </div>
                <Container>hello world</Container>
            </main>
        </>
    );
}

const MockChart: React.FC = () => {
    const data = [
        { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 100, pv: 2400, amt: 2400 },
        { name: "Page C", uv: 500, pv: 2400, amt: 2400 }
    ];

    return (
        <>
            <h1 className="pb-1">react</h1>
            <LineChart width={400} height={200} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </>
    );
};

export default App;
