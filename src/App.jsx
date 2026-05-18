import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BuscadorPelis from './Components/BuscadorPelis'

function App() {
  return (
    <div>
      <h1>Buscador de pelis</h1>

      <BuscadorPelis/>
    </div>
  );
}

export default App
