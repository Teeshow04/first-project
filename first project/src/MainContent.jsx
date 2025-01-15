
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MainContent.css';

export default function MainContent({img, name, country, location, date,description, mapLink }) {
    return (
        <main className='travel-main'>
            <div className='travel-card'>
                <img src={img} className='travel-image' alt={`${name}'s Image`} />
                <div className='travel-info'>
                    <div className='travel-location'>
                        <div className='location-info'>
                            <FaMapMarkerAlt className='location-icon' />
                            <span className='location-country'>{country}</span>
                        </div>

                        <a href={mapLink} className='google-maps-link'>
                            View On Google Maps
                        </a>
                    </div>
                    <div className='travel-details'>
                        <h1>{location}</h1>
                        <h4>{date}</h4>
                        <p className='travel-desription'>{description}</p>
                    </div>
                </div>

            </div>
        </main>
    )
}