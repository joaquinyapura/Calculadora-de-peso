import React, { useState } from "react";

import rect from "../assets/react.svg";

export const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleImput = (e) => {
    setPeso(e.target.value);
  };

  const handleImputAltura = (e) => {
    setAltura(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="text"
              placeholder="peso"
              onChange={handleImput}
              value={peso}
            />
          </div>
          <div>
            <p className="font-semibold">altura</p>
            <input
              className="p-2 rounded-md border-gray-600 border-2"
              type="text"
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
          <button className="bg-slate-200 rounded-md  p-2">reload</button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <h2>Su peso actual es</h2>
          <p className="font-bold text-4xl">200</p>
          <img src={rect} alt="" srcset="" className="w-20" />
          <p>podrias</p>
        </div>
      </div>
    </div>
  );
};
