import '../App.css'
import Stars from '../img/Frame 59528.png'
import data from '../card_imgs'
// import Love from '../img/Vector.png'

export default function Card(props) {
    return (
        <div className="card_container rounded-4 p-3 m-2 " >
            <img src={props.images} className="card-img-top" alt="cover images" />
            <div className='d-flex justify-content-between pt-3'>
                <h5 className="card-text">Desert king</h5>
                <h5 className="card-text"><strong>1MBT per night</strong></h5>
            </div>
            <div className='d-flex justify-content-between'>
                <h5 className="card-text">2345km away</h5>
                <h5 className="card-text">available for 2weeks stay</h5>
            </div>
            <img src={Stars} className="star" alt="..." />

        </div>
    );
}