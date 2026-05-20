import { useState } from 'react'
const Pelis = ({datos}) => {
    const [mostrarCard, setMostrarCard] = useState(false);
return(
<div>

        <h2>{datos.Title}</h2>
          <img src={datos.Poster} />
        <p><strong>Año:</strong> {datos.Year}</p>
        <p><strong>Tipo:</strong> {datos.Type}</p>

         <button
        className="boton"
        onClick={() => setMostrarCard(!mostrarCard)}
        >
        {mostrarCard ? "Cerrar Card" : "Abrir Card"}
      </button>

      {mostrarCard && (
        <div className="card">
          <h2>{datos.Title}</h2>
          <img src={datos.Poster}/>
          <p>Año: {datos.Year}</p>
          <p>Tipo: {datos.Type}</p>
          <p>Director:{datos.Director}</p>
          <p>Actores:{datos.Actors}</p>
          <p>Sinopsis:{datos.Plot}</p>
          <p>Duración:{datos.Runtime}</p>
          <p>Idioma:{datos.Language}</p>
          <p>País: {datos.Country}</p>
          <p>IMDb Rating: {datos.imdbRating}</p>
        </div>
      )}
</div>
);
}
export default Pelis;