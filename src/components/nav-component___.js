import '../App.css'
import X from '../img/x-lg.svg'
import Popup from './popup';
import { useState } from 'react';
import {Link} from "react-router-dom";



export default function Navbar_component___(props) {
    const [buttonPopup, setButtonPopup] = useState(false)
    return  (


            <div className='d-none d-lg-flex burger_menu justify-content-lg-between' >
                
                <a>
                    <button type='button' className='btn btn-primary px-4 py-2 rounded-3 border-none connect_button position-relative nav_button'
                    onClick={() => setButtonPopup(true)}>
                    connect wallet
                    </button>
                </a>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className='popup_tag'>
                </Popup>
                {props.children}

                
            </div>

);
}