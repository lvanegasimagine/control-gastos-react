import React from "react";
import { formatearFecha } from "../../helpers/formatearFecha";
import IconAhorro from "../../img/icono_ahorro.svg";
import IconCasa from "../../img/icono_casa.svg";
import IconComida from "../../img/icono_comida.svg";
import IconGastos from "../../img/icono_gastos.svg";
import IconOcio from "../../img/icono_ocio.svg";
import IconSalud from "../../img/icono_salud.svg";
import IconSuscripciones from "../../img/icono_suscripciones.svg";

const diccionarioIcono = {
  ahorro: IconAhorro,
  casa: IconCasa,
  comida: IconComida,
  gastos: IconGastos,
  ocio: IconOcio,
  salud: IconSalud,
  suscripciones: IconSuscripciones,
};

const Gasto = ({ gasto }) => {
  const { categoria, nombre, fecha, cantidad } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={diccionarioIcono[categoria]} alt="Icono de Gastos" />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <div className="cantidad-gasto">$ {cantidad}</div>
    </div>
  );
};

export default Gasto;
