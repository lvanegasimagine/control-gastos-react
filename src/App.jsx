import { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    setGastos([
      ...gastos,
      gasto
    ])
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto ? (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      ) : null}

      {modal ? (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      ) : null}
    </div>
  );
}

export default App;
