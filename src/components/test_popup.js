import '../App.css'
import Imgone from '../img/image 66.png'
import Imgtwo from '../img/image 69.png'
import X from '../img/x-lg.svg'
import Y from '../img/chevron-right.svg'

export default function Popup() {
    return (
        <div className='d-grid place-items-center'>

        <div className='rounded position-absolute m-auto modal' onClick={initModal}>
       <div>
           <h4>Connect Wallet</h4>
           <i class="bi bi-x-lg"></i>
       </div>
       <p>Choose your preferred wallet:</p>
       <div>
           <img src={Imgone} />
           <p><strong>Metamask </strong></p>
           <i class="bi bi-chevron-right me-auto"></i>
       </div>
       <div>
           <img src={Imgtwo} />
           <p><strong>WalletConnect</strong></p>
           <i class="bi bi-chevron-right me-auto"></i>
       </div>
   </div>
}