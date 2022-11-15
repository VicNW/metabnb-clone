import '../App.css'

import Popup from '../components/popup';
import { useState } from 'react';
import {Link} from "react-router-dom";



export default function Navbar_component(props) {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (props.trigger) ? (


            <div className='d-lg-flex burger_menu justify-content-lg-between' >
                
                <div>
                    <ul className='list-inline m-auto nav_list '>
                        <li className='list-inline-item'><Link to = "/">Home</Link></li>
                        <li className='list-inline-item'><Link to = "/place_to_stay">Place to stay</Link></li>
                        <li className='list-inline-item'>NFTs</li>
                        <li className='list-inline-item'>Community</li>
                    </ul>
                </div>
                <br className='mx-5'/>
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

) : "";
}