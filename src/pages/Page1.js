import Chanelimage from "../assets/images/Chanelimage.jpg";

function Page1() {
    return (

        <div className="grid grid-cols-2">

            {/* <!-- leftContainer --> */}
            <div>
                <img src={Chanelimage} alt="Chanelimage" className="object-cover w-full h-full" />
            </div>

            {/* <!-- rightContainer --> */}
            <div className="p-5 bg-white rounded-md">
                {/* <h6 style="letter-spacing: 7px;">PERFUME</h6> */}

                <h6 className="tracking-widest">PERFUME</h6><br />
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
            </div>
        </div>
    );
}

export default Page1;
