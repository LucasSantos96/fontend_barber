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
        <label htmlFor="plans" className="font-semibold">Selecione o plano: </label>
  
        <select  name="plans" id="plans" className="p-1 rounded bg-gray-300 cursor-pointer">
           {plans.map((plan)=>(
              <option key={plan.id} value="" className=""> R$: {plan.price} | {plan.name} </option>
            ))}
            </select>
            </section>
  )
}

export default ListPlan