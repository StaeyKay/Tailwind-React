import Chanelimagefood from "../assets/images/food.png";

function Page3() {
    return (
        <div className="bg-green-200" >
            <div className="bg-white m-10 p-3 rounded-2xl grid grid-cols-2">
                <div>
                    <p class>Organo</p>
                    <p>100% Organic food</p>
                    <p>Healthy Lifestyle</p>
                    <p>is your only unfair</p>
                    <p>advantage</p><br />
                    <p>Choose healthy habits with Organo daily meal</p>
                    <p>prepared by our expert nutritionist and chef</p><br />
                    <button>Get started</button>
                    <button>Explore menu</button>

                    <button>Get Started</button>
                    {/* <div class="col-span-4">
                        <p>Home Delivery Pricing FAQs Contact <button>Get Started</button></p>
                    </div> */}
                </div>

                <div className="grid grid-cols-6 p-2">
                    <p class="col-span-1">Home</p>
                    <p class="col-span-1">Delivery</p>
                    <p class="col-span-1">Pricing</p>
                    <p class="col-span-1">FAQs</p>
                    <p class="col-span-1">Contact</p>
                    <p class="col-span-1">Get Started</p>
                </div>
            </div>
        </div>
    );
}

export default Page3;
