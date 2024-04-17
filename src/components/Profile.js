import React from "react";
import { useState } from "react";


function Profile() {
    const [loggedIn, setLoggedIn] = useState(2);

    return (
        <div>
            {
                loggedIn==1?<h1 style={{fontSize: "30px", fontWeight: "500"}}>Welcome User 1</h1>
                :loggedIn==2?<h1 style={{fontSize: "30px", fontWeight: "500"}}>Welcome User 2</h1>
                :loggedIn==3?<h1 style={{fontSize: "30px", fontWeight: "500"}}>Welcome User 3</h1>
                :<h1 style={{fontSize: "30px", fontWeight: "500"}}>Welcome Guest</h1>
            }
        </div>
    )
}

export default Profile;