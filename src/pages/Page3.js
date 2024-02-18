import food from "../assets/images/food.png";

function Page3() {
    return (
        <div className="bg-green-200" >
            <div className="bg-white m-10 p-3 px-7 rounded-2xl grid grid-cols-2">
                <div>
                    <p className="font-bold text-xl">Organ<span className="text-green-400">o</span></p><br /><br />
                    <p className="text-green-400 text-base font-bold">100% Organic food</p><br />
                    <p className="text-5xl font-bold">Healthy Lifestyle</p>
                    <p className="text-5xl font-bold">is your only <span className="text-green-400">unfair</span></p>
                    <p className="text-green-400 text-5xl font-bold">advantage</p><br />
                    <p>Choose healthy habits with Organo daily meal</p>
                    <p>prepared by our expert nutritionist and chef</p><br />
                    <div className="grid grid-cols-4">
                        <div>
                            <button className="text-white font-semibold text-center p-2 bg-green-400 rounded-md shadow-xl shadow-green-200">Get started</button>
                        </div>
                        <div>
                            <button className="border border-black p-2 border-solid font-semibold rounded-md">Explore menu</button>
                        </div>
                    </div><br/><br/>
                    <div>
                        <h5 className="text-xl font-semibold">Chef of the month</h5>
                        <p>People love his</p>
                        <p className="text-green-400 font-semibold">80+ famous dishes</p>
                    </div>

                </div>

                <div className="grid grid-cols-6 p-2">
                    <p class="col-span-1 font-bold text-green-400">Home</p>
                    <p class="col-span-1 font-bold">Delivery</p>
                    <p class="col-span-1 font-bold">Pricing</p>
                    <p class="col-span-1 font-bold">FAQs</p>
                    <p class="col-span-1 font-bold">Contact</p>
                    <button class="col-span-1 bg-green-400 text-white rounded-md text-center font-bold p-1 shadow-green-200">Get Started</button>
                    <img src={food} alt="foodImg" className="object-cover w-full col-span-6 py-8" />
                    <p className="text-right col-span-6">Powered by Fueler</p>

                </div>
            </div>
        </div>
    );
}

export default Page3;
