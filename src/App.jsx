import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Background } from './components/Background/Background';
import { Calculator } from './components/Calculator/Calculator';
import { Choreminder } from './components/Choreminder/Choreminder';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
import { Nfts } from './components/Nfts/Nfts';

import './App.css';

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
                        <Route path='/choreminder' element={<Choreminder />} />
                        <Route path='/nfts' element={<Nfts />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;
