import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pricingcss.css';

const Pricing = () => {
    return (
        <div className='container1'>
            <div className='box'>
                <h3>1200 Rs</h3>
                <h1>Month</h1>
                <h3>YOGA BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>
            <div className='box'>
                <h3>1000 Rs</h3>
                <h1>Month</h1>
                <h3>GYM BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>

            <div className='box'>
                <h3>1400 Rs</h3>
                <h1>Month</h1>
                <h3>DANCE BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>
        </div>
    )
}
export default Pricing