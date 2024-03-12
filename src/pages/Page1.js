import Chanelimage from "../assets/images/Chanelimage.jpg";
import {useState, useEffect} from "react";

function Page1() { 
    // first declare the state
    const [name, setName]=useState("Jude")
    useEffect(() => {
        console.log("I am running after HTML render");
    }, [])
    useEffect(() => {
        console.log("I am run anytime state name is updated.");
    }, [name])
    return (

        <div className="grid grid-cols-2">

            {/* <!-- leftContainer --> */}
            <div>
                <img src={Chanelimage} alt="Chanelimage" className="object-cover w-full h-full" />
            </div>

            {/* <!-- rightContainer --> */}
            <div className="p-5 bg-white rounded-md">
                {/* <h6 style="letter-spacing: 7px;">PERFUME</h6> */}

                {/* insert the declared state into the code */}
                <h6 className="tracking-widest">PERFUME {name}</h6><br />
                <h6 className="tracking-widest">Hi, my name is {name}</h6><br />
                <h2 className="font-extrabold text-3xl">Gabrielle Essence Eau De Parfum</h2><br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti, perspiciatis. Cumque temporibus fuga incidunt
                    impedit voluptate reprehenderit dolorum</p><br />

                {/* <!-- pricingContainer --> */}

                <div className="grid grid-cols-2 items-center">
                    {/* <p style="color: green; font-size: 30px;"><b>$149.99</b></p> */}

                    <p className="text-green-600 text-3xl"><b>$149.99</b></p>
                    {/* <p style="text-decoration: line-through; margin-left: 25px;">$169.99</p> */}

                    <p>$169.99</p>
                </div><br /><br /><br />

                <button type="button" className="w-full p-4 text-base bg-green-600 text-white rounded-xl">Add to Cart</button>
                <button onClick={() => {
                    console.log("I have clicked button one");
                    setName("Esther")
                }} type="button" className="w-full p-4 text-base bg-green-600 text-white rounded-xl">Change name to Esther</button>
                <button onClick={() => {
                    console.log("I have clicked button two");
                    setName("Hayford")
                }} type="button" className="w-full p-4 text-base bg-green-600 text-white rounded-xl">Change name to Hayford</button>
            </div>
        </div>
    );
}

export default Page1;
