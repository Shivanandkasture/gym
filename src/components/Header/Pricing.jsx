import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pricingcss.css';
const Pricing = ()=>{
    return(
        <div className='main2'>
           <div className='container'>
                <div className='box'>
                    <h3>1200 Rs</h3>
                    <h1>Month</h1>
                    <h3>YOGA BEGINNER</h3>
                    <Link to='#'><button>Click Here</button></Link>
               
                </div>
                <div className='box'>
                    <h3>1200 Rs</h3>
                    <h1>Month</h1>
                    <h3>Dance BEGINNER</h3>
                    <Link to='#'><button>Click Here</button></Link>
                   
                </div>
                
                <div className='box'>
                    <h3>1200 Rs</h3>
                    <h1>Month</h1>
                    <h3>Dance BEGINNER</h3>
                    <Link to='#'><button>Click Here</button></Link>
                    
                </div>
            </div>
            </div>
               
      
    )
}
export default Pricing