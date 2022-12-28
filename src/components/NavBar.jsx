import React, { useState } from "react"
import "../css/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from '../images/logo.jpeg'
import background from '../images/gym.jpg'


const NavBar = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <>
    <div>
      <nav className='navbar'>
      <Link to ='home'> <img src={logo} className='logo' alt="logo" /></Link>
       
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <NavLink to='/home' className='home'>
            <li>Home</li>
          </NavLink>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/pricing' className='pricing'>
            <li>Pricing</li>
          </Link>
          <Link to='/program' className='program'>
            <li>Program</li>
          </Link>
        
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
        
      </nav>
      </div>
      <div className="image-contaier">
      <div className="image-text"> <img src={background} style={{width: '100%', height:'100%',backgroundSize: 'cover'}} alt='logo'/> </div>
        <div className="text"><h1>Make your a body builder</h1></div>
        <p  className="p">We Provide Our best opporturity and qualified trainers</p><br/>
        <p  className="p2">for best workout yourself as you want</p><br/><br/>
        <div  className="button"><button><NavLink to ='/about'>view details</NavLink></button></div>
        <div  className="button2"><button><Link to ='#'>Sign in</Link></button></div>
      </div>
    
    </>
  )
}
export default NavBar