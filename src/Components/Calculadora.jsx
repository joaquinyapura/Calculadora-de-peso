import React, { useState } from "react";

import underweightImg from "../assets/underweight.png";
import overweightImg from "../assets/overweight.png";
import healthyImg from "../assets/healthy.png";

export const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState("ingrese valores");

  const handleImput = (e) => {
    setPeso(e.target.value);
  };

  const handleImputAltura = (e) => {
    setAltura(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (altura == 0 || peso == 0) {
      alert("introduzca valores validos");
    } else {
      let imc = peso / (altura * altura);
      imc = imc.toFixed(2);
      setImc(imc);

      if (imc < 18.5) {
        setMensaje("tenes bajo peso");
        setImagen(underweightImg);
      } else if (imc >= 18.5 && imc < 24.9) {
        setMensaje("tu peso es normal");

        setImagen(healthyImg);
      } else if (imc >= 25 && imc < 29.9) {
        setMensaje("Tenés sobrepeso");
        setImagen(overweightImg);
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="w-[350px] mx-auto py-10 px-4 bg-white shadow-xl flex flex-col items-center">
        <h1 className="text-lg font-bold">Calculadora de peso corporal</h1>
        <form
          action=""
          className="mt-5 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div>
            <p className="font-semibold">peso</p>
            <input
              className="p-2 rounded-md border-gray-600 border-2 "
              type="number"
              placeholder="peso"
              onChange={handleImput}
              value={peso}
            />
          </div>
          <div>
            <p className="font-semibold">altura</p>
            <input
              className="p-2 rounded-md border-gray-600 border-2"
              type="number"
              step={0.1}
              placeholder="altura"
              onChange={handleImputAltura}
              value={altura}
            />
          </div>
          <button
            type="submit"
            className="bg-slate-700 rounded-md  text-white p-2"
          >
            Sumbit
          </button>
          <button onClick={reload} className="bg-slate-200 rounded-md  p-2">
            reload
          </button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <h2>Su IMC es </h2>
          <p className="font-bold text-4xl">{imc}</p>

          {imagen && <img src={imagen} alt="" className="w-20" />}

          <p>{mensaje}</p>
        </div>
      </div>
    </div>
  );
};
