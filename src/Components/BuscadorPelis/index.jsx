import { useEffect, useState } from 'react'
import "./BuscadorPelis.css"
import Input from '../Input';
import axios from "axios";
const BuscadorPelis = () => {
     const [datos, setdatos] = useState([])
     const [info, setInfo] = useState([])
     const [datosCompletos, setdatosCompletos] = useState([]) 
    const [mostrarCard, setMostrarCard] = useState(false);
    async function hacerConsulta(titulo) {
    try {
      setInfo("Cargando")
      setdatos([])
      setdatosCompletos([])
      const response = await axios.get("http://www.omdbapi.com/?apikey=8f253ef8&t=" + titulo);
      if (response.data.Response === "True") {
        setInfo("")
         setdatos([
            response.data.Poster,
            response.data.Title,
            response.data.Year,
            response.data.Type
          ]);
          setdatosCompletos([
            response.data.Director,      
            response.data.Actors,       
            response.data.Plot,          
            response.data.Runtime,       
            response.data.Language,      
            response.data.Country,       
            response.data.imdbRating
          ])
          localStorage.setItem('titulo', JSON.stringify(response.data.Title));
      }
    } catch (error) {
      setInfo("Peli no encontrada")
    }
  }
      const titulo = JSON.parse(localStorage.getItem('titulo'));
     useEffect(() => {
      if(titulo != null)
        hacerConsulta(titulo)
    }, [])
  return (
    <div>
        <p>{info}</p>
      
        <h2>{datos[1]}</h2>
        <img src={datos[0]}/>
        <p>{datos[2]}</p>
        <p>{datos[3]}</p>
        

        <Input hacerConsulta ={hacerConsulta}/>

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
            <p>{datosCompletos[6]}</p>
        </div>
      )}
    
    </div>
  );
};
export default BuscadorPelis;