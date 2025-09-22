"use client";

import { useParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../services/api";

interface Clientprops{
  id:string;
  name:string;
  number:string;
}

const EditClient = () => {
  const params= useParams();
  const id = params.id as string //vem direto da url

  const [client, setClient] = useState<Clientprops | null>(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchClient(){
    if (!id)return;
    try{
      const res = await api.get(`/client/${id}`)
     setClient(res.data)

      }catch(err){
        console.error("erro ao buscar cliente:", err)
      } finally{
        setLoading(false)
      }
    }
      fetchClient()
      
  }, [id]);


  async function handleUpdate(e: FormEvent){
    e.preventDefault()
    if(!client) return

    try{
      await api.patch(`/update-client/${id}`,{
        name:client.name,
        number:client.number,
      
      })
      alert("Cliente atualizado com sucesso!")
    } catch(err){
      console.error(err)
    }
  }

  if(loading) return <p>Carregando dados...</p>;

  return (
    <section className="flex flex-col items-center min-h-screen mt-8 mx-8">
      <h1 className="font-medium text-3xl md:text-4xl ">Editar cliente</h1>

      <form onSubmit={handleUpdate} className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome do cliente:</label>
        <input
          type="text"
          name="name"
          placeholder="Nome completo do cliente"
          className="border border-gray-500 rounded p-1 placeholder:text-sm"
          value={client?.name || ""}
          onChange={(e)=> setClient({...client!, name: e.target.value})}
        />

        <label htmlFor="number">Número do cliente:</label>
        <input
          type="number"
          name="number"
          placeholder="ex:229999..."
          className="border rounded p-1 placeholder:text-sm border-gray-500"
                    value={client?.number || ""}
                    onChange={(e)=>setClient({...client!, number:e.target.value})}

        />

        <label htmlFor="plans">Selecione o plano:</label>
        <select name="plans" id="plans" className="p-1 rounded bg-gray-200">
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
          <option value="">plano ouro</option>
        </select>

        <input
          type="submit"
          value="Editar"
          className="border rounded bg-green-400 font-medium text-white py-1 hover:bg-green-600 hover:scale-105 duration-300 cursor-pointer mt-4 shadow-2xl"
        />
      </form>
    </section>
  );
};

export default EditClient;
