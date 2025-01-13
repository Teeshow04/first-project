import MountFuji from './assets/fuji.png'
import SydneyOpera from './assets/sydney.png'
import Geirangerfjord from './assets/geiranger.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MainContent.css';

export default function MainContent() {
    return (
        <main className='travel-main'>
            <div className='travel-card'>
                <img src={MountFuji} className='travel-image' alt="Mount Fuji Image" />
                <div className='travel-info'>
                    <div className='travel-location'>
                        <div className='location-info'>
                            <FaMapMarkerAlt className='location-icon'/>
                            <span className='location-country'>JAPAN</span>
                        </div>

                        <a href="" className='google-maps-link'>
                            View On Google Maps
                        </a>
                    </div>
                    <div className='travel-details'>
                        <h1>Mount Fuji</h1>
                        <h4>12 Jan, 2021-24 Jan, 2021</h4>
                        <p className='travel-desription'>Mount Fuji is the latest mountain in japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in japan, for both japanese and foreign tourists.</p>
                    </div>
                </div>

            </div>

        </main>
    )
}