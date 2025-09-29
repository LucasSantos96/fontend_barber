'use client'

import React, { createContext, ReactNode, useState, FormEvent, useEffect, useRef,} from "react";
import { api } from "@/services/api";

interface ClientProps {
  id: string;
  name: string;
  number: string;
  planId:string;
  status: string;
  expires_at: string

}

interface UserContextType{
    clients: ClientProps[];
    setClients: React.Dispatch<React.SetStateAction<ClientProps[]>>;//Permite atualizar os usuários
    listClients:()=> Promise<void>;
    handleSubmit:(ClientProps: Omit<ClientProps, "id">) => Promise<void>;
    deleteClient:(id:string) => Promise<void>
}
//Context
export const ClientContext = createContext<UserContextType | undefined>(undefined)

//Provider
export function ClientProvider({children}:{children:ReactNode}) {

    const [clients, setClients] = useState<ClientProps[]>([]);



  useEffect(() => {
    listClients();
  }, []);

     async function listClients() {
    const response = await api.get("/list-clients");
    setClients(response.data);
  }


    async function handleSubmit( {name,number,planId}: Omit<ClientProps,"id"| "status" | "expires_at">) {
   

    if (!name || !number || !planId) return;

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30); // hoje + 30 dias

    const response = await api.post("/add-client", {
      name,
      number,
      planId,
      status: "active",
      expires_at: expiresAt.toISOString() // manda em formato ISO
    });
    setClients((allClients) => [...allClients, response.data]);
    
  }



    async function deleteClient(id: string) {
    try {
      await api.delete("/delete-client", {
        params: {
          id: id,
        },
      });

      //filtra todos os ids diferentes do id que desejamos excluir
      const allClients = clients.filter((client) => client.id !== id);
      setClients(allClients);
    } catch (err) {
      console.error(err);
    }
}




  return(
    <ClientContext.Provider value={{clients, setClients, listClients, handleSubmit, deleteClient}}>
      {children}
    </ClientContext.Provider>
  )


}

