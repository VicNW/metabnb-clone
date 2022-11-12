import '../App.css';
import Image from '../img/image.png';
import Opensea from '../img/opensea.svg';
import Fox from '../img/fox.svg';
import Mb from '../img/MB.png'

export default function Hero() {
    return (
        <div>
            <div className='container d-flex py-5'>
                <div className=' hero_text '>
                    <h1>Rent a <strong>Place</strong> away from <strong>Home</strong> in the <strong>Metaverse</strong></h1>
                    <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className='d-flex '>
                        <input type='text' className='py-2 search_input' placeholder='Search for location'></input>
                        <button className='btn btn-primary px-5 search_button'>Search</button>    
                    </div>

                </div>
                <div>
                    <img src={Image} className='mt-5'/>
                </div>
            </div>
            <div className='three'>
                <div className='container px-5 d-flex justify-content-between py-2'>
                    <img src={Mb} />
                    <img src={Fox} />
                    <img src={Opensea} />
                </div>
            </div>
        </div>
    );
}