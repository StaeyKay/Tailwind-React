import React from "react";
import { useState } from "react";

function Page5() {
    const [productName, setProductName] = useState()
    const [costPrice, setCostPrice] = useState()
    const [sellingPrice, setSellingPrice] = useState()

    const [profitArray, setProfitArray] = useState([])

    const arrayTest = ["esthe22r", "hayford", "jude", "mom"];
    return (
        <div className="bg-pink-500" >
            <h1>Akusika Beverages Stock Tracker</h1><br />
            <form>
                <label for="products">Select a product: </label>

                <select
                    onChange={(e) => {
                        setProductName(e.target.value)
                    }} >
                    <option>Bigoo cocktail</option>
                    <option>Bigoo lemon</option>
                    <option>Bigoo cola</option>
                    <option>Bigoo grape</option>
                    <option>Bigoo orange</option>
                    <option>Bigoo apple</option>
                    <option>Bigoo energy</option>
                    <option>Rush energy</option>
                    <option>BB Coacktail</option>
                    <option>Vitamilk</option>
                    <option>U fresh soy milk</option>
                    <option>U fresh pineaple</option>
                    <option>Tampico (500 ml)</option>
                    <option>Tampico (750 ml)</option>
                    <option>Tampico (1 L)</option>
                    <option>Bel cola</option>
                    <option>Bel malt</option>
                    <option>Bel active</option>
                    <option>Bel aqua (500 ml)</option>
                    <option>Bel aqua (750 ml)</option>
                    <option>Malta guinness (can)</option>
                    <option>Malta guinness (plastic)</option>
                    <option>Sachet water</option>
                </select>
                <br /><br />
                <label for="cost price">Input the cost price: </label>
                <input
                    type="number"
                    name="costPrice"
                    onChange={(e) => {
                        setCostPrice(e.target.value)
                    }}
                />
                <br /><br />
                <label for="selling price">Input the selling price: </label>

                <input
                    type="number"
                    name="sellingPrice"
                    onChange={(e) => {
                        setSellingPrice(e.target.value)
                    }} />
                <br /><br />


                <p>{productName}</p>
                <p>{costPrice}</p>
                <p>{sellingPrice}</p>

                <button
                    className="bg-red-500"
                    onClick={() => {
                        const copiedProfitAray = [...profitArray];
                        copiedProfitAray.push(
                            {
                                "productName": productName
                            }
                        )

                    }}>Button</button>

            </form>

            <div>
                <h1>table</h1>

                {/* {arrayTest.map((value) => {


                        return (<div className="border-2 border-red-500">
                            {value} is a name
                        </div>)
                    })
                    } */}



            </div>
        </div>
    );
}

export default Page5;
