import React, { useState } from "react";
import CerrarBtn from "../../img/cerrar.svg";
import Mensaje from "../Mensaje/Mensaje";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGastos }) => {
  const [mensaje, setMensaje] = useState("");
  const [formValues, setFormValues] = useState({
    nombre: "",
    cantidad: 0,
    categoria: "",
  });

  const { nombre, cantidad, categoria } = formValues;

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }

    guardarGastos(formValues);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="Cerrar Modal"
          onClick={ocultarModal}
          style={{ cursor: "pointer" }}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={`formulario ${animarModal ? "animar" : ""}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje ? <Mensaje tipo="error">{mensaje}</Mensaje> : null}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) =>
              setFormValues({ ...formValues, nombre: e.target.value })
            }
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={(e) =>
              setFormValues({ ...formValues, cantidad: Number(e.target.value) })
            }
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) =>
              setFormValues({ ...formValues, categoria: e.target.value })
            }
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
