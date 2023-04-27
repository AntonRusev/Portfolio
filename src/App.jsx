import './App.css'
import { About } from './components/About/About'
import { Background } from './components/Background/Background'
import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'

function App() {
  return (
    <>
      <div className="parallax">
        <div className='layer parallax-back'>
          <Background />
        </div>
        <div className=' layer paralax-base'>
          <Header />
          {/* <Home /> */}
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
