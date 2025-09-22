'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

import Link from "next/link";
import { FiTrash, FiRefreshCcw, FiEdit, FiPlus } from "react-icons/fi";

import { api } from '@/services/api'
import ListPlan from '@/components/ListPlan';

interface ClientProps{
  id:string;
  name: string;
  number:string;
  created_at:string;
}


export default function Home() {

  const [clients, setClients] = useState<ClientProps[]>([]);
 
  const nameRef = useRef<HTMLInputElement>(null)
  const numberRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
      listClients()
  },[])

  async function listClients(){
    const response = await api.get("/list-clients")
    setClients(response.data)
  }


  async function handleSubmit(e:FormEvent){
    e.preventDefault()

    if(!nameRef.current?.value || !numberRef.current?.value) return;
    
    const response = await api.post('/add-client',{
      name:nameRef.current?.value,
      number:numberRef.current?.value
    })
    setClients(allClients =>[...allClients, response.data])
    nameRef.current.value = ''
    numberRef.current.value=''
  }

  async function deleteClient(id:string){
    try{
      await api.delete('/delete-client',{
        params:{
          id:id
        }
      })

      //filtra todos os ids diferentes do id que desejamos excluir
      const allClients = clients.filter((client)=> client.id !== id)
      setClients(allClients)

    }catch(err){
      console.error(err)
    }
  }



  return (
   <main className="flex flex-col items-center min-h-screen mt-8 mx-8">
    
    <h1 className="font-medium text-3xl md:text-4xl ">Cadasto de clientes</h1>

    <form className="flex flex-col gap-1 w-full">
      <label htmlFor="name">Nome do cliente:</label>
      <input type="text" name="name"  placeholder="Nome completo do cliente" className="border border-gray-500 rounded p-1 placeholder:text-sm" ref={nameRef}/>

      <label htmlFor="number">Número do cliente:</label>
      <input type="number" name="number"  placeholder="ex:229999..." className="border rounded p-1 placeholder:text-sm border-gray-500" ref={numberRef}/>
<div className='flex justify-center gap-4'>
  <div className='flex flex-col'>
  
          <ListPlan/>
  
  </div>
  <div className='flex items-center'>
    <Link href={'/addplan'} ><button className='bg-blue-400 rounded-full w-fit flex items-center text-white gap-1 p-1 h-fit cursor-pointer hover:scale-105 duration-300 hover:bg-blue-600'><FiPlus/> Add Plano</button></Link>
  </div>

</div>
  
      <button onClick={handleSubmit} className="border rounded bg-green-400 font-medium text-white py-1 hover:bg-green-600 hover:scale-105 duration-300 cursor-pointer mt-4 shadow-2xl">Cadastrar</button>


    </form>

    <section className="mt-8 w-full">
        <h3 className="font-semibold text-2xl">Dados do cliente</h3>
       {clients.map((client)=>(
      <article key={client.id} className="relative shadow-2xl px-6  py-4 mt-4 rounded bg-gray-200 ">
         <p>Nome: <span>{client.name}</span></p>
        <p>Número: <span>{client.number}</span></p>
        <p>Plano: <span>ouro</span></p>
        <p>Status: <span>ativo</span></p> 
        
        <button 
        onClick={() => deleteClient(client.id)}
        className="bg-red-600 py-1 px-2 rounded absolute  top-22 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm">Deletar<FiTrash size={18} color="#fff" /></button>

         <Link href={`/edit/${client.id}`}><button className="bg-blue-500 py-1 px-2 rounded absolute top-13 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm" >Editar<FiEdit size={18} color="#fff"/></button></Link>


          <button className="bg-green-500 py-1 px-2 rounded absolute top-4 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm">Renovar<FiRefreshCcw size={18} color="#fff"/></button>

      </article>
       ))}

    </section>
   </main>
  )
}
