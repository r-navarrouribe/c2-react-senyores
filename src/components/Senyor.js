import { useState } from "react";

export const Senyor = (props) => {
  const { senyor, marcado2 } = props;
  const getInicial = () => {
    const nombreSeparado = senyor.nombre.split(" ");
    if (nombreSeparado[0].length < 3) {
      return nombreSeparado[1].charAt(0);
    } else {
      return nombreSeparado[0].charAt(0);
    }
  };
  const [marcado, setMarcado] = useState(senyor.marcado);
  const toggleMarcado = () => {
    if (marcado) {
      setMarcado(false);
    } else {
      setMarcado(true);
    }
  };
  return (
    <article
      className={`senyor col-8 offset-2 mb-4 ${marcado ? "marcado" : ""} ${
        marcado2 ? "marcado" : ""
      }`}
      onClick={toggleMarcado}
    >
      <div className="row">
        <div className="avatar col">
          <img
            src={`/img/${senyor.foto}`}
            className="img-fluid rounded-circle"
            width="214"
            alt=""
          />
          <span className="inicial text-center rounded-circle">
            {getInicial()}
          </span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor">{senyor.nombre}</h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col">{senyor.profesion}</span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col">{senyor.estado}</span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col">{senyor.twitter}</span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
