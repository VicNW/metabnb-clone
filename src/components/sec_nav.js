import '../App.css'
import Setting from '../img/export.png'

export default function Sec_nav() {
    return (
        <ul className='container d-flex flex-wrap align-items-center justify-content-between sec_nav '>
            <li className=' py-1 d-none d-lg-block'>Restaurant</li>
            <li className=' py-1 d-none d-lg-block'>Cottage</li>
            <li className=' py-1 d-none d-lg-block'>Castle</li>
            <li className=' py-1 d-none d-lg-block'>fantasy city</li>
            <li className=' py-1 d-none d-lg-block'>beach</li>
            <li className=' py-1 d-none d-lg-block'>Cabins</li>
            <li className=' py-1 d-none d-lg-block'>Off-grid</li>
            <li className=' py-1 d-none d-lg-block'>Farm</li>
            <li className='ms-auto ms-lg-1'>
                <button className='d-flex location-button rounded'>
                    <p className='p-2 m-0 settings_text'>Location</p>
                    <img src={Setting} className='p-2 m-0'/>
                </button>
            </li>
        </ul>
    );
}