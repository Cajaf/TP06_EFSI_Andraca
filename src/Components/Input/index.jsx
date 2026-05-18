import { useEffect, useState } from 'react'
const Input = ({hacerConsulta}) => {
 const [valor, setValor] = useState("")
return(
<div>
<input
        type="text"
        onChange={(e) => setValor(e.target.value)}
        placeholder="Busca una Pelicula"
        onKeyDown={(e) => {
        if (e.key === "Enter") {
            hacerConsulta(valor);
        }
        }}
      />
     <button onClick={() => hacerConsulta(valor)}>Buscar</button>
</div>
);
}
export default Input;