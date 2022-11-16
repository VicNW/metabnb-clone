import '../App.css'
import X from '../img/x-lg.svg'
import Popup from './popup';
import { useState } from 'react';
import {Link} from "react-router-dom";



export default function Navbar_component__(props) {
    const [buttonPopup, setButtonPopup] = useState(false)
    return  (


            <div className='d-none d-lg-flex burger_menu justify-content-lg-between' >
                {/* <button className='x_button me-3' onClick={() => props.setButtonPopup(false)}>
                        <img src={X} />
                        </button> */}
                <div>
                    <ul className='list-inline m-auto nav-list w-100'>
                        <li className='list-inline-item'><Link to = "/" className='mx-2'>Home</Link></li>
                        <li className='list-inline-item'><Link to = "/place_to_stay" className='mx-2'>Place to stay</Link></li>
                        <li className='list-inline-item mx-2' >NFTs</li>
                        <li className='list-inline-item mx-2'>Community</li>
                    </ul>
                </div>
                <br className='mx-5'/>
                
                {props.children}


            </div>

);
}