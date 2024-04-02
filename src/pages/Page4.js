import React from "react";
import { useState } from "react";

function Page4() {
    const styles = {
        innerDiv : {
            backgroundColor: "#73AD21",
            padding: "70px 0",
            textAlign: "center",
            border: "3px solid black",
            width: "60%",
            margin: "auto"
        },
        outerDiv: {
            padding: "70px 0",
            backgroundColor: "blue"
        }
    }
    
    return (

        <div style={styles.outerDiv}>
            <div style={styles.innerDiv}>This is a green box</div>
        </div>

    );
}

export default Page4;
