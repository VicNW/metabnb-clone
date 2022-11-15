import '../App.css'
import Logo from '../img/logo_white.png'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/twitter.png'

export default function Footer() {
    return (
        <div className=' text-white py-5 footer'>
            <div className='container d-flex justify-content-between flex-wrap flex-md-row footer_detail' >
                <div className='footer_col'>
                    <img src={Logo} className='mb-md-4 logo '/>
                    <div className=' mt-md-5 socials mt-2'>
                        <img src={Facebook} />
                        <img src={Instagram} className=' p-3 p-lg-4'/>
                        <img src={Twitter} />
                    </div>
                </div>
                <div className='d-flex justify-content-md-center footer_col'>
                    <div classNAme=''>
                        <li><strong>Community</strong></li>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </div>
                </div>
                <div className='d-flex justify-content-md-center  footer_col'>
                    <div>
                        <li><strong>Places</strong></li>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </div>
                </div>
                <div className='d-flex justify-content-md-center  footer_col'>
                    <div>
                        <li><strong>About us</strong></li>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </div>
                </div>
            </div>
            <p className='container copyright'> © 2022 Metabnb</p>
        </div>
    );
}