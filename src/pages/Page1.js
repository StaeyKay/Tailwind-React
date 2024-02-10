import Chanelimage from "../assets/images/Chanelimage.jpg";

function Page1() {
    return (

        <div class="mainContainer">

            {/* <!-- leftContainer --> */}
            <div>
                <img src={Chanelimage} alt="Chanelimage" />
            </div>

            {/* <!-- rightContainer --> */}
            <div class="rightContainer">
                {/* <h6 style="letter-spacing: 7px;">PERFUME</h6> */}

                <h6>PERFUME</h6>
                <h2>Gabrielle Essence Eau De Parfum</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti, perspiciatis. Cumque temporibus fuga incidunt
                    impedit voluptate reprehenderit dolorum</p>

                {/* <!-- pricingContainer --> */}

                <div class="pricingContainer">
                    {/* <p style="color: green; font-size: 30px;"><b>$149.99</b></p> */}

                    <p><b>$149.99</b></p>
                    {/* <p style="text-decoration: line-through; margin-left: 25px;">$169.99</p> */}

                    <p>$169.99</p>
                </div><br /><br /><br />

                <button type="button" onclick="myFunction()">Add to Cart</button>
            </div>
        </div>
    );
}

export default Page1;
