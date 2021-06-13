export const Header = (props) => {
  return (
    <header className="cabecera text-center py-2 row">
      <h1 className="col-12">Señores que te apuntan con el dedo</h1>
      <span className="col-12 mt-2">
        <span className="total">No he podido calcular cuántos</span> señores que
        te apuntan con el dedo hay marcados
      </span>
      <button className="marcar-todos col-2 offset-5 btn mt-2">
        No he podido hacer funcionar este botón
      </button>
    </header>
  );
};
