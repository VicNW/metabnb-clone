import '../App.css';
import Image from '../img/image.png';
import Opensea from '../img/opensea.svg';
import Fox from '../img/fox.svg';
import Mb from '../img/MB.png'

export default function Hero() {
    return (
        <div>
            <div className='container d-lg-flex py-5 align-items-sm-center justify-content-between hero-section'>
                <div className=' hero_text'>
                    <h1>Rent a <strong>Place</strong> away from <strong>Home</strong> in the <strong>Metaverse</strong></h1>
                    <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className='d-flex search_div'>
                        <input type='text' className='py-2 search_input w-sm-25' placeholder='Search for location'></input>
                        <button type='button' className='btn btn-primary px-5 search_button' >Search</button>    
                    </div>

                </div>
                <div className='' id='hero_img_div'>
                    <img src={Image} className='mt-5 hero_img'/>
                </div>
            </div>
            <div className='three '>
                <div className='container px-5 py-3 d-flex flex-md-row justify-content-between '>
                    <img src={Mb} className='px-2 w-25' />
                    <img src={Fox} className='px-2 w-25' />
                    <img src={Opensea} className='px-2 w-25' />
                </div>
            </div>
        </div>
    );
}