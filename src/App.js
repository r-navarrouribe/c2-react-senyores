import { useState } from "react";
import { Header } from "./components/Header";
import { Senyor } from "./components/Senyor";
import { senyoresAPI } from "./senyoresAPI";

function App() {
  const [arraySenyores, setArraySenyores] = useState(senyoresAPI);
  const pasarSenyores = () => {
    setTimeout(() => {
      setArraySenyores(senyoresAPI);
    }, 2000);
  };
  pasarSenyores();

  return (
    <>
      <div className="contenedor-general container-xl">
        <Header arraySenyores={arraySenyores} />
        <main className="principal mt-2 row">
          {arraySenyores.map((senyor) => (
            <Senyor
              key={senyor.id}
              senyor={senyor}
              arraySenyores={arraySenyores}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
