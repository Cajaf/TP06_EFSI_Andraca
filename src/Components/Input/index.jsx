const Input = ([hacerConsulta]) => {
 const [valor, setValor] = useState()
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
</div>
);
}
export default Input;