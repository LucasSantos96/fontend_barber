'use client'
import { api } from "@/services/api"
import { FormEvent, useEffect, useRef, useState } from "react";

interface PlanProps{
  id:string;
  name:string;
  price:string;
}

const ListPlan = () => {

    const[plans,setPlans]=useState<PlanProps[]>([])

    useEffect(()=>{
        listPlan()
    },[])

    async function listPlan(){
         const response = await api.get("/list-plans")
          setPlans(response.data)
    }

  return (
    <section>
        <label htmlFor="plans">Selecione o plano:</label>
  
           {plans.map((plan)=>(
             <select key={plan.id} name="plans" id="plans" className="p-1 rounded bg-gray-200 ">
              <option value="">Plano: {plan.name}, Valor R$: {plan.price}</option>
            </select>
           ))}
            </section>
  )
}

export default ListPlan