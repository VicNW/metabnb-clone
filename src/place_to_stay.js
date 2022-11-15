import './App.css'
import Navbar from './components/navbar'
// import Card from './components/card'
import Footer from './components/footer'
import Sec_nav from './components/sec_nav'
import Card from './components/card'
import data from './card_imgs'

export default function Place_to_stay() {
    const cards = data.map(item =>{
        return (
             <Card images={item.images} />
        );
    })

    return (
        <>
            <Navbar />
            <Sec_nav />
            <div className="container d-flex flex-wrap justify-content-center ">
                {/* <Card /> */}
                {cards}
            </div>
            <Footer />
            
        </>
    );
}