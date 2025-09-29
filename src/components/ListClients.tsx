import { useClient } from "@/hooks/UseClient";  // Hook customizado para acessar o contexto de clientes
import { usePlan } from "@/hooks/UsePlan";      // Hook customizado para acessar o contexto de planos

// Ícones
import { FiTrash, FiRefreshCcw, FiEdit } from "react-icons/fi";
import Link from "next/link"; // Para navegação no Next.js

import { api } from "@/services/api"; // Configuração do axios para chamadas à API

// Componente de listagem de clientes
const ListClients = () => {
  // Pegamos do contexto de clientes: lista de clientes, função de deletar e função para atualizar o estado
  const { clients, deleteClient, setClients } = useClient();
  // Pegamos os planos disponíveis (para mostrar o nome do plano ao invés do id)
  const { plans } = usePlan();

  // Função para renovar o plano de um cliente
  const renewClientPlan = async (clientId: string) => {
    try {
      // Chama a rota backend para reativar/renovar o cliente
      const response = await api.post("/active-client", { clientId });

      // Atualiza o estado local substituindo o cliente que foi renovado
      setClients((allClients) =>
        allClients.map((client) => (client.id === clientId ? response.data : client))
      );
      alert('Plano Renovado com sucesso!')
    } catch (err) {
      console.error("Erro ao renovar plano:", err);
    }
  };

  return (
    <section className="mt-8 w-full mx-8 ">
      <h3 className="font-semibold text-2xl">Dados do cliente</h3>

      {/* Percorre a lista de clientes */}
      {clients.map((client) => {
        // Calcula os dias restantes até a expiração do plano
        const remainingDays = Math.ceil(
          (new Date(client.expires_at).getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24) // converte ms em dias
        );

        // Define a cor do status com base no resultado
        const statusColor = remainingDays > 0 ? "text-green-600" : "text-red-600";

        // Renderiza cada cliente
        return (
          <article
            key={client.id}
            className="relative shadow-2xl px-6 py-4 mt-4 rounded bg-gray-200"
          >
            <p>
              Nome: <span>{client.name}</span>
            </p>
            <p>
              Número: <span>{client.number}</span>
            </p>
            <p>
              Plano:{" "}
              <span>
                {/* Procura o plano pelo id, se não achar mostra "Não selecionado" */}
                {plans.find((plan) => plan.id === client.planId)?.name ||
                  "Não selecionado"}
              </span>
            </p>
            <p>
              Status:{" "}
              <span className={statusColor}>
                {remainingDays > 0 ? "Ativo" : "Inativo"}
              </span>
            </p>
            <p>
              Dias restantes:{" "}
              <span>{remainingDays > 0 ? remainingDays : 0}</span>
            </p>

            {/* Botão de deletar cliente */}
            <button
              onClick={() => deleteClient(client.id)}
              className="bg-red-600 py-1 px-2 rounded absolute top-22 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm"
            >
              Deletar <FiTrash size={18} color="#fff" />
            </button>

            {/* Botão de editar cliente - redireciona para página de edição */}
            <Link
            // Monta a URL de edição passando o id do cliente e o nome do plano como parâmetros
            //encodeUriConponent 
            href={`/edit?id=${client.id}&planId=${client.planId}&planName=${plans.find((plan)=> plan.id === client.planId)?.name || 'Não Selecionado'}`}>
              <button className="bg-blue-500 py-1 px-2 rounded absolute top-13 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm">
                Editar <FiEdit size={18} color="#fff" />
              </button>
            </Link>

            {/* Botão de renovar plano */}
            <button
              onClick={() => renewClientPlan(client.id)}
              className="bg-green-500 py-1 px-2 rounded absolute top-4 right-4 hover:scale-110 cursor-pointer duration-300 flex items-center gap-1 text-white font-semibold text-sm"
            >
              Renovar <FiRefreshCcw size={18} color="#fff" />
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default ListClients;
