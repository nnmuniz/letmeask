import { useState } from "react";

export function Button() {
    // let couter = 0;
    const [couter, setCouter] = useState(0)

    function increment() {
        //couter++;
        setCouter(couter + 1)
    }

    return (
        <button onClick={increment}>
            {couter}
        </button>
    )
}