import '../App.css';
import Image from '../img/image.png';
import Img from '../img/prefooter.png';


export default function Prefooter() {
    return (
        <div>
            <div className=' d-flex py-5 prefooter'>
                <div className='container d-lg-flex justify-content-between my-md-5 w-100'>
                    <div className=' pretext text-white'>
                        <h2 className='py-4 mt-5'>Metabnb NFTs</h2>
                        <p className=''>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        <button className='btn btn-light py-2 px-4 mt-4'> learn more</button>
                    </div>
                    <img src={Img} className='prefooter_img'/>
                </div>
            </div>
        </div>
    );
}