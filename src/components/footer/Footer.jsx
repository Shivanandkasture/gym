import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import '../../css/footer.css'

const Footer = () => {

    return (
        <>
            <div className='footer'>
                <BsYoutube />
                <BsFacebook />
                <SiInstagram />
                <AiFillTwitterCircle/>
            </div>
        </>
    )
}
export default Footer