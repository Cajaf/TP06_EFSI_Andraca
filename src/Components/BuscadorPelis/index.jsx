import { useEffect, useState } from 'react'
import "./BuscadorPelis.css"
import Input from '../Input';
import Pelis from '../Pelis';
import axios from "axios";
const BuscadorPelis = () => {
     const [datos, setdatos] = useState([])
     const [info, setInfo] = useState([])
    
    async function hacerConsulta(titulo) {
    try {
      setInfo("Cargando")
      setdatos([])
      const response = await axios.get("http://www.omdbapi.com/?apikey=8f253ef8&s=" + titulo);
       const lista = response.data.Search; 

      const detallesPromises = lista.map((item) =>
        axios.get(
          `http://www.omdbapi.com/?apikey=8f253ef8&i=${item.imdbID}`
        )
      );

      const detallesResponses = await Promise.all(detallesPromises);


      const datosFinales = detallesResponses.map((res) => ({
        Poster: res.data.Poster,
        Title: res.data.Title,
        Year: res.data.Year,
        Type: res.data.Type,
        Director: res.data.Director,
        Actors: res.data.Actors,
        Plot: res.data.Plot,
        Runtime: res.data.Runtime,
        Language: res.data.Language,
        Country: res.data.Country,
        imdbRating: res.data.imdbRating,
      }));

      setdatos(datosFinales);
          
          localStorage.setItem('titulo', JSON.stringify(titulo));
      }
     catch (error) {
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

        <Input hacerConsulta ={hacerConsulta}/>


        <div className="lista-pelis">
        {datos.map((pelicula, index) => (
          <Pelis key={index} datos={pelicula} />
        ))}
      </div>
       
    
    </div>
  );
};
export default BuscadorPelis;