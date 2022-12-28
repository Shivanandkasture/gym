import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar'
import Home from './components/Header/Home';
import About from './components/Header/About';
import Pricing from './components/Header/Pricing';
import Program from './components/Header/Program';
import Footer from "../src/components/footer/Footer"
function App() {
  return (

    <BrowserRouter>
    <NavBar/>
    
      <Routes>

        <Route exact path='/home' element={<Home />}> </Route>
        
        <Route exact path='/about' element={<About />}> </Route>
        
        <Route exact path='/pricing' element={<Pricing />}> </Route>
        
        <Route exact path='/program' element={<Program />}> </Route>
      </Routes>
      <About />
     
      <Footer/>
    </BrowserRouter>

  );
}

export default App
