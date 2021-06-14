import { useState } from "react";
import { Header } from "./components/Header";
import { Senyor } from "./components/Senyor";
import { senyoresAPI } from "./senyoresAPI";

function App() {
  const [arraySenyores, setArraySenyores] = useState([]);
  const pasarSenyores = () => {
    setTimeout(() => {
      setArraySenyores(senyoresAPI);
    }, 2000);
  };
  pasarSenyores();
  const [marcado2, setMarcado2] = useState();
  return (
    <>
      <div className="contenedor-general container-xl">
        <Header
          arraySenyores={arraySenyores}
          marcado2={marcado2}
          setMarcado2={setMarcado2}
        />
        <main className="principal mt-2 row">
          {arraySenyores.map((senyor) => (
            <Senyor
              key={senyor.id}
              senyor={senyor}
              arraySenyores={arraySenyores}
              marcado2={marcado2}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
