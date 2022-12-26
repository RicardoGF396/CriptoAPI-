import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import HeroRight from './components/HeroRight'

function App() {

/*   const [monedas, setMonedas] = useState([]) */
/*   const [resultado, setResultado] = useState({}) */

  return (
    
    <div className='App'>
      <Header />
      <div className='app-content'>
        <HeroLeft/>
        <HeroRight/>
      </div>
    </div>
  )
}

export default App
