import './App.css'
import { Background } from './components/Background/Background'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

function App() {
  return (
    <>
      <div className="parallax">
        <div className='layer parallax-back'>
          <Background />
        </div>
        <div className=' layer paralax-base'>
          <Header />
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
