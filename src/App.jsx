import { Routes, Route } from 'react-router-dom';

import { Background } from './components/Background/Background';
import { Calculator } from './components/Calculator/Calculator';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
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
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
