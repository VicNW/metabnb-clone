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
                    <ul className='list-inline m-auto nav_list '>
                        <li className='list-inline-item'><Link to = "/">Home</Link></li>
                        <li className='list-inline-item'><Link to = "/place_to_stay">Place to stay</Link></li>
                        <li className='list-inline-item'>NFTs</li>
                        <li className='list-inline-item'>Community</li>
                    </ul>
                </div>
                <br className='mx-5'/>
                
                {props.children}


            </div>

);
}