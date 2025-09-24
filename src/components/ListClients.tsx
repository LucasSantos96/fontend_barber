
import { useClient } from "@/hooks/UseClient";

import { FiTrash, FiRefreshCcw, FiEdit} from "react-icons/fi";

import Link from "next/link";



const ListClients = () => {
     const {clients,deleteClient,listClients} = useClient();
  return (

    <section className="mt-8 w-full">
        <h3 className="font-semibold text-2xl">Dados do cliente</h3>
        {clients.map((client) => (
          <article
            key={client.id}
            className="relative shadow-2xl px-6  py-4 mt-4 rounded bg-gray-200 "
          >
            <p>
              Nome: <span>{client.name}</span>
            </p>
            <p>
              Número: <span>{client.number}</span>
            </p>
            <p>
              Plano: <span>ouro</span>
            </p>
            <p>
              Status: <span>ativo</span>
            </p>

            <button
              onClick={() => deleteClient(client.id)}
              className="bg-red-600 py-1 px-2 rounded absolute  top-22 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm"
            >
              Deletar
              <FiTrash size={18} color="#fff" />
            </button>

            <Link href={`/edit/${client.id}`}>
              <button className="bg-blue-500 py-1 px-2 rounded absolute top-13 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm">
                Editar
                <FiEdit size={18} color="#fff" />
              </button>
            </Link>

            <button className="bg-green-500 py-1 px-2 rounded absolute top-4 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm">
              Renovar
              <FiRefreshCcw size={18} color="#fff" />
            </button>
          </article>
        ))}
      </section>
  )
}

export default ListClients