'use client'
import { usePlan } from "@/hooks/UsePlan"
 import React, {useRef,} from "react";



const AddPlan = () => {
  
  
const {handleSubmit} = usePlan()
const nameRef = useRef<HTMLInputElement>(null);
const priceRef = useRef<HTMLInputElement>(null);
  
  const handleFormSubmit = (e: React.FormEvent)=>{
    e.preventDefault();

    if (!nameRef.current || !priceRef.current) return;

    handleSubmit({
        name: nameRef.current?.value || "",
        price: priceRef.current?.value || ""
    });
    nameRef.current.value ='';
    priceRef.current.value ='';

  }






  return(
    <section className="mx-8 mt-8">
      <form className="flex flex-col gap-2 mx-auto" onSubmit={handleFormSubmit}> 
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