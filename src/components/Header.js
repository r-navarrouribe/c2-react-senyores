export const Header = (props) => {
  const { arraySenyores, marcado2, setMarcado2 } = props;
  const cambiarMarcado = () => {
    marcado2 ? setMarcado2(false) : setMarcado2(true);
  };
  const contador = () => {
    const contadorMarcados = arraySenyores.filter(
      (senyor) => senyor.marcado
    ).length;
    return contadorMarcados;
  };
  return (
    <header className="cabecera text-center py-2 row">
      <h1 className="col-12">Señores que te apuntan con el dedo</h1>
      <span className="col-12 mt-2">
        <span className="total">{contador()}</span> señores que te apuntan con
        el dedo marcados
      </span>
      <button
        className="marcar-todos col-2 offset-5 btn mt-2"
        onClick={cambiarMarcado}
      >
        Marcar todos
      </button>
    </header>
  );
};
