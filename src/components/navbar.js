import '../App.css'
// import X from '../img/x-lg.svg'
import {Link} from "react-router-dom";
import Logo from '../img/logo.png';
import Navbar_component from '../components/nav-component';
import Navbar_component__ from '../components/nav-component__';
import Navbar_component___ from '../components/nav-component___';
import List from '../img/list.svg';
import { useState } from 'react';




export default function Navbar() {

    
    const [navView, setNavView] = useState(false)

    


    return (
        <div className='position-fixed head_nav d-flex align-items-center bg-white pb-3'>

            <div className='nav_container container d-flex justify-content-between align-items-center pt-3'>
        
                <div>
                <Link to = "/"><img src={Logo} /></Link>
                </div>
                    <Navbar_component__ />
                    <Navbar_component___ />

                    <Navbar_component trigger={navView} setTrigger={setNavView} />
            </div>
                            

                        <nav class="navbar hamburger_button d-lg-none me-4 mt-2">
                            <button class="navbar-toggler " type="button" 
                            onClick={() => setNavView(!navView)}
                            >
                            <span class="navbar-toggler-icon nav_icon"></span>
                            {/* <button className='x_button nav_x_button me-3' onClick={() => setNavView(false)}>
                                <img src={X} />
                                </button> */}
                                </button>

                                
                       </nav> 
                       
        </div>


             
               
                
              
                       
           
    );
}
