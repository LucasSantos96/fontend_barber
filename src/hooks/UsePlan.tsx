import { PlanContext} from '../context/PlanContext'
import { useContext } from 'react'

export function usePlan(){
    const context = useContext(PlanContext);
    if(!context) throw new Error('UsePlan deve ser usado dentro de ClientProvider')

        return context;
}