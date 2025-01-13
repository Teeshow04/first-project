
import { FaGlobe } from 'react-icons/fa';


export default function Navbar() {
    return (
        <header className='header'>
         <nav>
         <FaGlobe className='earth-icon'/>
         <span>my travel journal</span>
         </nav>
        </header>
    )
}