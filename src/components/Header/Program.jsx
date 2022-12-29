import React from 'react';
import '../../css/programcss.css';
import { Link } from 'react-router-dom';


const Program = () => {
    return (
        <div className='container'>
            <div className='box'>
                <h3>Naveen Sharma</h3>
                <h1>Hatha Yoga for Beginners</h1>
                <h3>YOGA BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>
            <div className='box'>
                <h3>Simran Nazare</h3>
                <h1>GYM Fitness Training</h1>
                <h3>GYM BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>

            <div className='box'>
                <h3>Swati joshi</h3>
                <h1>Dance Fitness Xpress</h1>
                <h3>Dance BEGINNER</h3>
                <Link to='#'><button>Click Here</button></Link>

            </div>
        </div>
    )
}
export default Program