import { useState } from "react";

export const useSelectMoney = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <div className="option-col">
        <label> {label} </label>

        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option disabled value="">
            Selecciona
          </option>

          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return [state, SelectMonedas];
};
