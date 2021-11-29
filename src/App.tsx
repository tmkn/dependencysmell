import { useState } from "react";

import {Visitor} from "@tmkn/packageanalyzer/web";
//import {Visitor as Visitor2 } from "@tmkn/packageanalyzer";

console.log(13, Visitor);

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                Hello World
            </div>
        </>
    );
}

export default App;
