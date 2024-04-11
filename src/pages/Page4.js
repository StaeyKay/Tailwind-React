import React from "react";
import { useState } from "react";

function Page4() {

    const [name, setName]=useState();
    const [interest, setInterest]=useState();
    const [TnC, setTnC]=useState();

    function handleData (e) {
        e.preventDefault()
        console.log("all data", name, interest, TnC)
    }

    return (

        <div>
            <h1>Hello World!</h1>
            <form>
                <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br/><br/>

                <input type="checkbox" onChange={(e)=>setTnC(e.target.checked)}/><span>Agree with terms and conditions</span><br/><br/>
                <button type="submit" style={{backgroundColor: "gray", padding: "10px"}}>Submit</button>
            </form>
        </div>

    );

    }


export default Page4;
