'use client'
import { usePlan } from "@/hooks/UsePlan" 

const ListPlan = () => {

      const {plans, selectedPlanId, setSelectedPlanId}= usePlan()



  return (
    <section>
        <label htmlFor="plans" className="font-semibold">Selecione o plano: </label>
  
        <select  value={selectedPlanId || ''} 
        onChange={(e)=> setSelectedPlanId(e.target.value)}
        name="plans" id="plans" 
        className="p-1 rounded bg-gray-300 cursor-pointer">
           {plans.map((plan)=>(
              <option key={plan.id} value={plan.id} className=""> {plan.name} R$: {plan.price} |  </option>
            ))}
            </select>
            </section>
  )
}

export default ListPlan