"use client";

//Hook do contexto
import { useClient } from "@/hooks/UseClient";

//Components
import Clients from "@/components/Clients";
import ListClients from "@/components/ListClients";

export default function Home() {


  

  return (
    <main className="flex flex-col items-center min-h-screen mt-8 mx-8">
     
      <Clients/>
      <ListClients/>

      
    </main>
  );
}
