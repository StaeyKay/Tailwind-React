import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function Page4() {
    return (
        <div className="bg-yellow-500" >
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
                    <Option value='U fresh pineaple'>U fresh pineaple</Option>
                    <Option value='Tampico (500 ml)'>Tampico (500 ml)</Option>
                    <Option value='Tampico (750 ml)'>Tampico (750 ml)</Option>
                    <Option value='Tampico (1 L)'>Tampico (1 L)</Option>
                    <Option value='Bel cola'>Bel cola</Option>
                    <Option value='Bel malt'>Bel malt</Option>
                    <Option value='Bigoo active'>Bel active</Option>
                    <Option value='Bigoo aqua (500 ml)'>Bel aqua (500 ml)</Option>
                    <Option value='Bigoo aqua (750 ml)'>Bel aqua (750 ml)</Option>
                    <Option value='Malta guinness (can)'>Malta guinness (can)</Option>
                    <Option value='Malta guinness (plastic)'>Malta guinness (plastic)</Option>
                    <Option value='Sachet water'>Sachet water</Option>
                </Select>
            </form>
        </div>
    );
}

export default Page4;
