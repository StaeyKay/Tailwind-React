import React from "react";
import { useState } from "react";

function Page4() {

    // define a state to show/hide the text
    const [show, setShow]=useState(false)

    return (

        <div>

            {/* state the conditions for hiding/showing the text */}
            {
            show?<h1>Hello World!</h1>:null
            }
            {/* <button style={{backgroundColor: "green", padding: "10px"}} onClick={()=>setShow(true)}>Show</button>
            <button style={{backgroundColor: "red", padding: "10px"}} onClick={()=>setShow(false)}>Hide</button> */}
            <button style={{backgroundColor: "red", padding: "10px"}} onClick={()=>setShow(!show)}>Toggle</button>

        </div>

    );

    }


export default Page4;
