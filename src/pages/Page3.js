import food from "../assets/images/food.png";

function Page3() {
    return (
        <div className="bg-green-200" >
            <div className="bg-white m-10 p-3 px-7 rounded-2xl grid grid-cols-2">
                <div>
                    <p className="font-bold text-xl">Organ<span className="text-green-400">o</span></p><br /><br />
                    <p className="text-green-400 text-sm font-bold">100% Organic food</p><br />
                    <p className="text-5xl font-bold">Healthy Lifestyle</p>
                    <p className="text-5xl font-bold">is your only <span className="text-green-400">unfair</span></p>
                    <p className="text-green-400 text-5xl font-bold">advantage</p><br />
                    <p>Choose healthy habits with Organo daily meal</p>
                    <p>prepared by our expert nutritionist and chef</p><br />
                    <div className="grid grid-cols-4">
                        <div className="bg-green-400 rounded-md">
                            <button className="text-white font-semibold text-center p-2">Get started</button>
                        </div>
                        <div>
                            <button>Explore menu</button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-6 p-2">
                    <p class="col-span-1">Home</p>
                    <p class="col-span-1">Delivery</p>
                    <p class="col-span-1">Pricing</p>
                    <p class="col-span-1">FAQs</p>
                    <p class="col-span-1">Contact</p>
                    <p class="col-span-1">Get Started</p>
                    <img src={food} alt="foodImg" className="object-cover w-full col-span-6 py-8" />
                    <p className="text-right col-span-6">Powered by Fueler</p>

                </div>
            </div>
        </div>
    );
}

export default Page3;
