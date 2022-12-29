import React from 'react';
import '../../css/aboutcss.css'
import gymimage from '../../images/no pain no gain.jpg'

const About = ()=>{
    return(
       <>
       <div className='main'>
       
   
        <div className='child'>

       <div className='child'> <img src ={gymimage} style={{width:'280px', marginTop:'80px'}}></img></div> 
           
           <div className='heading'><h1>OUR STORY</h1>
           <p>Gym and Fitness was founded in 2002 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices.</p>
           <p>Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.</p>
           </div>
           </div>
           </div>
           </>
    )
}
export default About