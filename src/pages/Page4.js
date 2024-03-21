import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function Page4() {
    const [data, setData] = useState(0)
    const updateData = () => {
        setData(data+1)
    }
    return (
        <div className="bg-yellow-500" >
            <h1>My name is {data}</h1>
            <button 
            className="w-max p-2 text-base bg-green-600 text-white rounded-lg"
            onClick={updateData}
            >Click Me!</button>
        </div>
    );
}

export default Page4;
