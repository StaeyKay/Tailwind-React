import React from "react";
import { useState } from "react";

function Page4() {
    const [data, setData] = useState()
    const getData = (e) => {
        setData(e.target.value)
    }
    return (

        <div>
            <h1 className="text-lg text-center">Get Input box value</h1>
            <form>
                <input type="text" onChange={getData} />
                <p>{data}</p>
            </form>
        </div>

    );
}

export default Page4;
