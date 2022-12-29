import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import '../../css/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <div className='footer'>
              <Link to ='https://youtu.be/eaRQF-7hhmo'><BsYoutube  /></Link>  
             <Link> <BsFacebook /></Link>  
             <Link><SiInstagram /></Link>   
             <Link><AiFillTwitterCircle/></Link>   
            </div>
        </>
    )
}
export default Footer