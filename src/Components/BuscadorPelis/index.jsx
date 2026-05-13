import { useEffect, useState } from 'react'
import "./BuscadorPelis.css"
import Input from '../Input';
const BuscadorPelis = () => {
     const [datos, setdatos] = useState([])
     const [datosCompletos, setdatosCompletos] = useState([]) 
     const hacerConsulta = () => {
    const [mostrarCard, setMostrarCard] = useState(false);
     }
  return (
    <div>
        
      <button onClick={hacerConsulta}>Buscar</button>
        <h2>{datos[1]}</h2>
        <img src={datos[0]}/>
        <p>{datos[2]}</p>
        <p>{datos[3]}</p>
        

        <Input hacerConsulta ="hacerConsulta()"/>

        <button
        className="boton"
        onClick={() => setMostrarCard(!mostrarCard)}
        >
        {mostrarCard ? "Cerrar Card" : "Abrir Card"}
      </button>

      {mostrarCard && (
        <div className="card">
            <h2>{datos[1]}</h2>
            <img src={datos[0]}/>
            <p>{datos[2]}</p>
            <p>{datos[3]}</p>
            <p>{datosCompletos[0]}</p>
            <p>{datosCompletos[1]}</p>
            <p>{datosCompletos[2]}</p>
            <p>{datosCompletos[3]}</p>
            <p>{datosCompletos[4]}</p>
            <p>{datosCompletos[5]}</p>
        </div>
      )}
    
    </div>
  );
};
export default BuscadorPelis;