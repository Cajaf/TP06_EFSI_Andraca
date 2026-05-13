import "./Cita.css"
const Cita = ({nombre, dueño, fecha, hora, sintoma,eliminarCita}) => {
 
return(
<div className="cita">
      <p>Mascota: <span>{nombre}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntoma: <span>{sintoma}</span></p><button className="button elimnar u-full-width" onClick={() =>eliminarCita(nombre)}>Eliminar ×</button>
</div>

);
}
export default Cita;