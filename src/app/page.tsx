"use client";



//Components
import Clients from "@/components/Clients";
import ListClients from "@/components/ListClients";

export default function Home() {


  

  return (
    <main className="flex flex-col items-center min-h-screen mt-8 mx-8 lg:mx-56">
     
      <Clients/>
      <ListClients/>

      
    </main>
  );
}
