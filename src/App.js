import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar'
import Home from './components/Header/Home';
import About from './components/Header/About';
import Pricing from './components/Header/Pricing';
import Program from './components/Header/Program';
import Footer from "../src/components/footer/Footer"
import Header from './components/Header/header';

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/program" element={<Program />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App
