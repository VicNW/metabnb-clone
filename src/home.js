import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import data from './card_img'

export default function Home() {
    const cards = data.map(item =>{
        return (
            <Card images={item.images}  />
        );
    })
    
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container d-grid flex-wrap justify-content-center cards_div my-3">
                {cards}
            </div>
            <Prefooter />
            <Footer />
            
        </>
    );
}