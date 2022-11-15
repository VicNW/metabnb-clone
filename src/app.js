import "./App.css";
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from "./home";
import Place_to_stay from "./place_to_stay"
import Navbar_component from './components/nav-component';


export default function App() {
    return (
        <HashRouter Basename="/">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/place_to_stay' element={<Place_to_stay />} />
                <Route path='/nav' element={<Navbar_component />} />
            </Routes>
        </HashRouter>
    );
}