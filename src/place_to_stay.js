import './App.css'
import Navbar from './components/navbar'
// import Card from './components/card'
import Footer from './components/footer'
import Sec_nav from './components/sec_nav'
import data from './card_imgs'

export default function Place_to_stay() {
    const cards = data.map(item =>{
        return (
            {...item}
        );
    })

    return (
        <>
            <Navbar />
            <Sec_nav />
            <div className="container d-flex flex-wrap justify-content-between ">
                {/* <Card /> */}
                {cards}
            </div>
            <Footer />
            
        </>
    );
}