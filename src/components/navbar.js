import '../App.css'
import {Link} from "react-router-dom";
import Logo from '../img/logo.png'

export default function Navbar() {
    return (
        <div className='nav_container container d-flex justify-content-between align-items-center mt-4 \
        '>
                <div>
                <Link to = "/"><img src={Logo} /></Link>
                </div>
                <div>
                    <ul className='list-inline m-auto'>
                        <li className='list-inline-item'><Link to = "/">Home</Link></li>
                        <li className='list-inline-item'><Link to = "/place_to_stay">Place to stay</Link></li>
                        <li className='list-inline-item'>NFTs</li>
                        <li className='list-inline-item'>Community</li>
                    </ul>
                </div>
                <a><button className='btn btn-primary px-4 py-2 rounded-3 border-none connect_button'>connect wallet</button></a>
        </div>
    );
}