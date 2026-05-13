import "./Form.css";
const Form = ({setCitas, citas}) => {
  const setcitas2 = (e) =>{
    e.preventDefault();
    const form = e.target;
    const cita ={
      nombre: form.mascota.value,
      dueño: form.propietario.value,
      fecha: form.fecha.value,
      hora: form.hora.value,
      sintoma: form.sintomas.value
    }
    setCitas([...citas, cita])
  }
  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={setcitas2}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />

        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width" placeholder="Describe los síntomas"></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
          
    </div>
    
  );
}

export default Form;