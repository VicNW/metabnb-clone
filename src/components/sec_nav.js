import '../App.css'
import Setting from '../img/export.png'

export default function Sec_nav() {
    return (
        <ul className='container d-flex flex-wrap align-items-center sec_nav '>
            <li>Restaurant</li>
            <li className='px-4 py-1'>Cottage</li>
            <li className='px-4 py-1'>Castle</li>
            <li className='px-4 py-1'>fantasy city</li>
            <li className='px-4 py-1'>beach</li>
            <li className='px-4 py-1'>Carbins</li>
            <li className='px-4 py-1'>Off-grid</li>
            <li className='px-4 py-1'>Farm</li>
            <li py-1>
                <button className='d-flex location-button rounded'>
                    <p className='p-2 m-0 settings_text'>Location</p>
                    <img src={Setting} className='p-2 m-0'/>
                </button>
            </li>
        </ul>
    );
}