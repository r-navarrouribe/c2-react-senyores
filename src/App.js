import { Header } from "./components/Header";
import { Señor } from "./components/Señor";

function App() {
  return (
    <>
      <div className="contenedor-general container-xl">
        <Header />
        <main className="principal mt-2 row">
          <Señor />
        </main>
      </div>
    </>
  );
}

export default App;
