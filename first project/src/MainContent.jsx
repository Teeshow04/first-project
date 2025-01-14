
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
                            <FaMapMarkerAlt className='location-icon' />
                            <span className='location-country'>JAPAN</span>
                        </div>

                        <a href="https://maps.app.goo.gl/y2rdMafn9Zza4yW68" className='google-maps-link'>
                            View On Google Maps
                        </a>
                    </div>
                    <div className='travel-details'>
                        <h1>Mount Fuji</h1>
                        <h4>12 Jan, 2025-24 Jan, 2025</h4>
                        <p className='travel-desription'>Mount Fuji is the latest mountain in japan, standing at 3,776 meters (12,388 feet). Mount Fuji is the single most popular tourist site in japan, for both japanese and foreign tourists.</p>
                    </div>
                </div>

            </div>

            <div className='travel-card'>
                <img src={SydneyOpera} className='travel-image' alt="Sydney Opera Image" />
                <div className='travel-info'>
                    <div className='travel-location'>
                        <div className='location-info'>
                            <FaMapMarkerAlt className='location-icon' />
                            <span className='location-country'>AUSTRALIA</span>
                        </div>

                        <a href="https://maps.app.goo.gl/NiG91S6DvHmr4VZRA" className='google-maps-link'>
                            View On Google Maps
                        </a>
                    </div>
                    <div className='travel-details'>
                        <h1>Sydney Opera House</h1>
                        <h4>27 May, 2025- 8 June, 2025</h4>
                        <p className='travel-desription'>The Sydney Opera House is a multi-venue performing arts center in Sydney located on the bans of the sydney Habour, it is often regarded as one of the 20th century's most famous and distinctive buildings</p>
                    </div>
                </div>

            </div>

            <div className='travel-card'>
                <img src={Geirangerfjord} className='travel-image' alt="Geirangerfjord image" />
                <div className='travel-info'>
                    <div className='travel-location'>
                        <div className='location-info'>
                            <FaMapMarkerAlt className='location-icon' />
                            <span className='location-country'>NORWAY</span>
                        </div>

                        <a href="https://maps.app.goo.gl/AMQoAxiohyadyN4a7" className='google-maps-link'>
                            View On Google Maps
                        </a>
                    </div>
                    <div className='travel-details'>
                        <h1>Geirangerfjord</h1>
                        <h4>01 oct, 2025- 18 Nov, 2025</h4>
                        <p >The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
                    </div>
                </div>

            </div>

        </main>
    )
}