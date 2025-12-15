import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Home from "../pages/home.jsx";
import Visits from "../pages/Visits.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Events from "../pages/Events.jsx";
import Giving from "../pages/Giving.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='navbar' element={<Navbar />} />
    <Route path='footer' element={<Footer />} />
    <Route path="/about" element={<About />} />
    <Route path="/visits" element={<Visits />} />
    <Route path="/events" element={<Events />} />
    <Route path="/giving" element={<Giving />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>,
)
