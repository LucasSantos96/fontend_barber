'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { api } from "@/services/api";

//Hooks
import { useClient } from "@/hooks/UseClient";
import { usePlan } from "@/hooks/UsePlan";


const EditClientPage = () => {
     
    const router = useRouter();

    const searchParams = useSearchParams(); 
    const clientId = searchParams.get('id');
    const planNames = searchParams.get('planName');
    
    console.log(clientId);
    
  
    const {clients,listClients} = useClient();
    const client = clients.find(c => c.id === clientId);

    const {plans} = usePlan();
   


    const [name,setName] = useState('');
    const [number, setNumber] = useState('');
    const [planId, setPlanId] = useState('');




    useEffect(()=>{
        if(client){
            setName(client.name);
            setNumber(client.number);
            setPlanId(client.planId);
            
        }
    }, [client])

    async function edit(e: React.FormEvent){
        e.preventDefault();
        try{
            await api.patch(`update-client/${clientId}`,{
                name,
                number,
                planId,
            })
            await listClients(); // Atualiza o estado do contexto
            alert('cliente editado com sucesso!')
            router.push('/')
            
        }catch(err){
            console.error("erro ao editar",err)
        }
    }

 

  return (
 <section className="flex flex-col items-center min-h-screen mt-8 mx-8  lg:mx-36">
      <h1 className="font-medium text-3xl md:text-4xl ">Editar cliente</h1>

      <form onSubmit={edit} className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome do cliente:</label>
        <input
          type="text"
          name="name"
          placeholder="Nome completo do cliente"
          className="border border-gray-500 rounded p-1 placeholder:text-sm"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="number">Número do cliente:</label>
        <input
          type="number"
          name="number"
          placeholder="ex:229999..."
          className="border rounded p-1 placeholder:text-sm border-gray-500"
          value={number}
          onChange={e => setNumber(e.target.value)}

        />

        <label htmlFor="plans">Selecione o plano:</label>
        <select name="plans" id="plans" className="p-1 rounded bg-gray-200"value={planId} onChange={e => setPlanId(e.target.value)}>
          {plans.map(plan=>(
            <option key={plan.id} value={plan.id}>{plan.name}</option>
          ))}
          
          
        </select>

        <input
          type="submit"
          value="Editar"
          className="border rounded bg-green-400 font-medium text-white py-1 hover:bg-green-600 hover:scale-105 duration-300 cursor-pointer mt-4 shadow-2xl"

        />
      </form>
    </section>  

)
}

export default EditClientPage