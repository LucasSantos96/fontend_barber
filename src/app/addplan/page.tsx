'use client'
import { api } from "@/services/api"
import { FormEvent, useRef, useState } from "react";

interface PlanProps{
  id:string;
  name:string;
  price:string;
}

const AddPlan = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)


  const [plan, setPlan] = useState<PlanProps[]>([])



 async function handleSubmit (e:FormEvent){
  e.preventDefault();

    if(!nameRef.current?.value || !priceRef.current?.value) return;

     const response = await api.post('/add-plan',{
      name:nameRef.current?.value,
      price:priceRef.current?.value
    }) 
    setPlan(allPlans =>[...allPlans, response.data])
    alert('Plano cadastrado com Sucesso!')
    nameRef.current.value = ''
    priceRef.current.value=''
  }



  return(
    <section className="mx-8 mt-8">
      <form className="flex flex-col gap-2 mx-auto" onSubmit={handleSubmit}> 
        <label htmlFor="name">Nome do Plano:</label>
        <input className="rounded border border-gray-400 p-1" type="text"  name="name" placeholder="Digite o nome do plano" ref={nameRef}/>

         <label htmlFor="price">Valor do Plano:</label>
        <input className="rounded border border-gray-400 p-1" type="number"  name="price" placeholder="Digite o valor do plano" ref={priceRef}/>


        <button className="shadow-2xl shadow-green-300 p-2 w-full bg-green-600  text-white font-semibold rounded hover:scale-105 duration-300 cursor-pointer hover:bg-green-400 mt-2 ">Adicionar</button>
      </form>
    </section>
  )
}
export default AddPlan