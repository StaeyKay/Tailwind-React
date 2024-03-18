import React from "react";
import { useState } from "react";
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function Page5() {
    const [productName, setProductName] = useState()
    const [costPrice, setCostPrice] = useState()
    const [sellingPrice, setSellingPrice] = useState()

    const [profitArray , setProfitArray]= useState([])

    const arrayTest = ["esthe22r", "hayford", "jude", "mom"];
    return (
        <div className="bg-pink-500" >
            <h1>Akusika Beverages Stock Tracker</h1><br />
            <form>
                <label for="products">Select a product: </label>

                <Select placeholder='Select option'
                    onChange={(e) => {
                        setProductName(e.target.value)
                    }} name="Products">
                    <Option value='Bigoo cocktail'>Bigoo cocktail</Option>
                    <Option value='Bigoo lemon'>Bigoo lemon</Option>
                    <Option value='Bigoo cola'>Bigoo cola</Option>
                    <Option value='Bigoo grape'>Bigoo grape</Option>
                    <Option value='Bigoo orange'>Bigoo orange</Option>
                    <Option value='Bigoo apple'>Bigoo apple</Option>
                    <Option value='Bigoo energy'>Bigoo energy</Option>
                    <Option value='Rush energy'>Rush energy</Option>
                    <Option value='BB cocktail'>BB Coacktail</Option>
                    <Option value='Vitamilk'>Vitamilk</Option>
                    <Option value='U fresh soy milk'>U fresh soy milk</Option>
                    <Option>U fresh pineaple</Option>
                    <Option>Tampico (500 ml)</Option>
                    <Option>Tampico (750 ml)</Option>
                    <Option>Tampico (1 L)</Option>
                    <Option>Bel cola</Option>
                    <Option>Bel malt</Option>
                    <Option>Bel active</Option>
                    <Option>Bel aqua (500 ml)</Option>
                    <Option>Bel aqua (750 ml)</Option>
                    <Option>Malta guinness (can)</Option>
                    <Option>Malta guinness (plastic)</Option>
                    <Option>Sachet water</Option>
                </Select>
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

                <Button
                    className="bg-red-500"
                    onClick={() => {
                        const copiedProfitAray = [ ...profitArray];
                        copiedProfitAray.push(
                            {
                                "productName":productName
                            }
                        )

                    }}>Button</Button>

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
