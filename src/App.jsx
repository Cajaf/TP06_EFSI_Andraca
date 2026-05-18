import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AdministradorCitas from './Components/AdministradorCitas'
import Form from './Components/Form'
import BuscadorPelis from './Components/BuscadorPelis'

function App() {
  const [recarga, setRecarga] = useState(false)
  const [citas, setcitas] = useState([])
  useEffect(()=>{
    if(recarga){
      localStorage.setItem('citas',JSON.stringify(citas))
    }
    
  },[citas])
  useEffect(()=>{
  setcitas(JSON.parse(localStorage.getItem('citas')))
  setRecarga(true)
  },[])

  return (
    <div>
      <h1>Buscador de pelis</h1>

      <BuscadorPelis/>
    </div>
  );
}

export default App
