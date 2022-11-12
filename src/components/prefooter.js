import '../App.css';
import Image from '../img/image.png';
import Img from '../img/prefooter.png';


export default function Prefooter() {
    return (
        <div>
            <div className=' d-flex py-5 prefooter'>
                <div className='container d-flex justify-content-between my-5'>
                    <div className=' pretext text-white my-5'>
                        <h2 className='py-4 mt-5'>Metabnb NFTs</h2>
                        <p className=''>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        <button className='btn btn-light py-2 px-4 mt-4'> learn more</button>
                    </div>
                    <img src={Img} className='ms-5'/>
                </div>
            </div>
        </div>
    );
}