import { Link, NavLink } from "react-router-dom"
import background from '../../images/gym.jpg'
import '../../css/headercss.css'

const Header = () => {
    return (
        <div className="header">
            <div className="image-text"> <img src={background} style={{ width: '100%', height: '100%', backgroundSize: 'cover', opacity: "80%" }} alt='logo' /> </div>
            <div className="text"><h1>Make your a body builder</h1></div>
            <p className="p">We Provide Our best opporturity and qualified trainers</p><br />
            <p className="p2">For best workout yourself as you want</p><br /><br />
            <div className="button"><button><NavLink to='/about'>view details</NavLink></button></div>
            <div className="button2"><button><Link to='/pricing'>Sign in</Link></button></div>
        </div>
    )
}
export default Header