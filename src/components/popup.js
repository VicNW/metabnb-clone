import '../App.css'
import Imgone from '../img/image 66.png'
import Imgtwo from '../img/image 69.png'
import X from '../img/x-lg.svg'
import Y from '../img/chevron-right.svg'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className='popup_bg'>
            <div className='rounded bg-white popup_container rounded-4'>
                <div className='pop1 d-flex justify-content-between m-4'>
                    <h4 >Connect Wallet</h4>
                    <button className='x_button me-3' onClick={() => props.setTrigger(false)}>
                        <img src={X} />
                        </button>
                </div>
                <p className='choose'>Choose your preferred wallet:</p>
                <button className='pop2 d-flex justify-content-between align-items-center  btn'>
                    <div className='d-flex align-items-center'>
                        <img src={Imgone} />
                        <p className='m-0'><strong>Metamask </strong></p>
                    </div>
                    <img src={Y} className='me-2' />
                </button>
                <button className= 'pop2 d-flex justify-content-between align-items-center  btn'>
                    <div className='d-flex align-items-center bg-grey'>
                        <img src={Imgtwo} />
                        <p className='m-0'><strong >WalletConnect</strong></p>
                    </div>
                    <img src={Y} className='me-2' />
                </button>
                {props.children}
            </div>    
        </div>
    ) : "";
}