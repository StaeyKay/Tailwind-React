import React from "react";
import { useState } from "react";

function Page4() {

    // initalize a state to receive input from the user
    const [data, setData]=useState(null)
    const [print, setPrint]=useState(false)

    function getData(e) {
        setPrint(false)
        setData(e.target.value)
    }

    return (

        <div>

            {/* ternary operator to define the conditions of print */}
            {
                print?
                <h1>{data}</h1>
                :null
             }
            <input type="text" onChange={getData}/><br/>
            <button style={{backgroundColor: "red", padding: "10px"}} onClick={()=>setPrint(true)}>Print value</button>
        </div>

    );
}

export default Page4;
