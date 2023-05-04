import { Routes, Route } from 'react-router-dom';

import { About } from './components/About/About';
import { Background } from './components/Background/Background';
import { Calculator } from './components/Calculator/Calculator';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
import { Projects } from './components/Projects/Projects';
import { Nfts } from './components/Nfts/Nfts';

import './App.css';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <div className="parallax">
        <div className='layer parallax-back'>
          <Background />
        </div>
        <div className=' layer paralax-base'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info' element={<Info />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/nfts' element={<Nfts />} />
            {/* <Home /> */}
            {/* <Info /> */}
            {/* <About /> */}
            {/* <Projects /> */}
            {/* <Contact /> */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
