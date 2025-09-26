"use client";
import { useRef } from "react";

//Hook do contexto
import { useClient } from "@/hooks/UseClient";
import { usePlan } from "@/hooks/UsePlan";

import Plans from "./Plans";

const Clients = () => {


  const { handleSubmit } = useClient();

  const {selectedPlanId} = usePlan()

  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameRef.current || !numberRef.current || !selectedPlanId) return;

    handleSubmit({
      name: nameRef.current?.value || "",
      number: numberRef.current?.value || "",
      planId: selectedPlanId,
    });
    nameRef.current.value = "";
    numberRef.current.value = "";
  };

  return (
    <section>
      <h1 className="font-medium mb-4 text-3xl md:text-4xl ">
        Cadastro de clientes
      </h1>

      <form className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome do cliente:</label>
        <input
          type="text"
          name="name"
          placeholder="Nome completo do cliente"
          className="border border-gray-500 rounded p-1 placeholder:text-sm"
          ref={nameRef}
        />

        <label htmlFor="number">Número do cliente:</label>
        <input
          type="number"
          name="number"
          placeholder="ex:229999..."
          className="border rounded p-1 placeholder:text-sm border-gray-500"
          ref={numberRef}
        />
        <Plans />
        <button
          onClick={handleFormSubmit}
          className="border rounded bg-green-400 font-medium text-white py-2 hover:bg-green-600 hover:scale-105 duration-300 cursor-pointer mt-4 shadow-2xl"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default Clients;
