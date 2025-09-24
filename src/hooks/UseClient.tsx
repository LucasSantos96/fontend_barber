import {ClientContext} from '../context/ClientContext'
import { useContext } from 'react'

export function useClient(){
    const context = useContext(ClientContext);
    if(!context) throw new Error('UseClient deve ser usado dentro de ClientProvider')

        return context;
}