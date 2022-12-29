import React from 'react';
import About from "./About"
import Pricing from "./Program"
import Program from"./Pricing"
import Header from"./header"
import "../../css/homecss.css"

const Home = () => {
    return (
        <div className='home'>
                <h1>welcome to Our <span>GYM's</span> Home page</h1>
            <Header />
            <About />
            <Pricing />
            <Program />
        </div>
    )
}
export default Home