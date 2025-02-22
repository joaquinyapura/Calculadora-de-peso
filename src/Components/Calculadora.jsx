import React from "react";

export const Calculadora = () => {
  return (
    <div className=" ">
      <div className="w-[350px] mx-auto py-10 px-4 bg-white shadow-xl flex flex-col items-center">
        <h1 className="text-lg font-bold">Calculadora de peso corporal</h1>
        <form action="" className="mt-5 flex flex-col gap-3">
          <div>
            <p className="font-semibold">peso</p>
            <input
              className="p-2 rounded-md border-gray-600 border-2 "
              type="text"
              placeholder="peso"
            />
          </div>
          <div>
            <p className="font-semibold">altura</p>
            <input
              className="p-2 rounded-md border-gray-600 border-2"
              type="text"
              placeholder="altura"
            />
          </div>
          <button className="bg-slate-700 rounded-md  text-white p-2">
            Sumbit
          </button>
          <button className="bg-slate-200 rounded-md  p-2">reload</button>
        </form>
      </div>
    </div>
  );
};
