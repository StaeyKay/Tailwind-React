import React from "react";
import { useState } from "react";
import Profile from "../components/Profile.js";

function Page4() {

    // define a state to show/hide the text
    const [show, setShow]=useState(false)
    const [name, setName]=useState();
    const [interest, setInterest]=useState();
    const [TnC, setTnC]=useState();

    function handleData (e) {
        e.preventDefault()
    }
    console.log("all data", name, interest, TnC)

    return (

        <div>

            {/* state the conditions for hiding/showing the text */}
            {
            show?<h1>Hello World!</h1>:null
            }
            {/* <button style={{backgroundColor: "green", padding: "10px"}} onClick={()=>setShow(true)}>Show</button>
            <button style={{backgroundColor: "red", padding: "10px"}} onClick={()=>setShow(false)}>Hide</button> */}
            <button style={{backgroundColor: "red", padding: "10px"}} onClick={()=>setShow(!show)}>Toggle</button>

            <h1>Hello World!</h1>
            <form>
                <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>{
                    setInterest(e.target.value)
                    console.log(e.target.value);
                    }}>
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
