import React from "react";
import { useState } from "react";
import Login from "../components/Login.js";

function Page4() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState();

    const loginHandler=(e)=> {
        e.preventDefault()
        console.log("all data", userId, password)
    }

    return (

        <div>
            <Login />
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Enter user Id" onChange={(e) => {
                    setUserId(e.target.value)
                    console.log(e.target.value)
                }
                } /><br /><br />
                <input type="password" placeholder="Enter password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                }
                } /><br /><br />
                <button type="button" style={{ backgroundColor: "grey", padding: "13px" }}>Login</button>
            </form>
        </div>

    );

}


export default Page4;
