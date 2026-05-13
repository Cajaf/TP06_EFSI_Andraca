const Input = () => {
 
return(
<div>
<input
        type="text"
        onChange={(e) => setValor(e.target.value)}
        placeholder="Busca una Pelicula"
        onKeyDown={(e) => {
        if (e.key === "Enter") {
            hacerConsulta();
        }
        }}
      />
</div>
);
}
export default Input;