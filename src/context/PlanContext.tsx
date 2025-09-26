'use client'


import React, { createContext, ReactNode, useState, FormEvent, useEffect, useRef,} from "react";

import { api } from "@/services/api";

interface PlanProps{
  id:string;
  name:string;
  price:string;
}

interface UsePlanTypes{
     plans: PlanProps[];
     setPlans: React.Dispatch<React.SetStateAction<PlanProps[]>>;
     listPlan:()=> Promise<void>;
     handleSubmit:(PlanProps: Omit<PlanProps, "id">) => Promise<void>;
     selectedPlanId: string | null;
     setSelectedPlanId: (id: string | null) => void;

}

export const PlanContext = createContext<UsePlanTypes | undefined>(undefined)




export function PlanProvider({children}:{children:ReactNode}) {

        const[plans,setPlans]=useState<PlanProps[]>([])
        const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

            useEffect(()=>{
              listPlan()
              },[])


         async function listPlan(){
          try{
            const response = await api.get("/list-plans")
             setPlans(response.data)

             // Define o primeiro plano como padrão se houver planos
           if (response.data.length > 0) {
            setSelectedPlanId(response.data[0].id);
           }

          }catch(err){
        console.error("Failed to load plans:", err);

          }
    }


     async function handleSubmit ({name, price}: Omit<PlanProps,"id">){
     

    if(!name|| !price) return;

     const response = await api.post('/add-plan',{
      name,
      price,
    }) 
    setPlans(allPlans =>[...allPlans, response.data])

    alert('Plano cadastrado com Sucesso!')
    
  }



  return(
    <PlanContext.Provider value={{plans,setPlans,listPlan,handleSubmit,selectedPlanId, setSelectedPlanId}}>
        {children}
    </PlanContext.Provider>
  )

}