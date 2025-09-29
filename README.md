# Frontend Barber - Sistema de Gerenciamento de Barbearia

## 📋 Descrição

Interface web desenvolvida com Next.js 15 e React 19 para gerenciar clientes e planos de uma barbearia. O sistema oferece uma interface moderna e responsiva para cadastrar, visualizar e gerenciar informações dos clientes e seus planos de assinatura.

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones para React
- **Axios** - Cliente HTTP para requisições à API

## 📦 Dependências

### Produção
- `next` - Framework Next.js
- `react` - Biblioteca React
- `react-dom` - DOM renderer para React
- `react-icons` - Biblioteca de ícones

### Desenvolvimento
- `@eslint/eslintrc` - Configuração ESLint
- `@tailwindcss/postcss` - PostCSS para Tailwind
- `@types/node` - Tipagens do Node.js
- `@types/react` - Tipagens do React
- `@types/react-dom` - Tipagens do React DOM
- `axios` - Cliente HTTP
- `eslint` - Linter para JavaScript/TypeScript
- `eslint-config-next` - Configuração ESLint para Next.js
- `tailwindcss` - Framework CSS
- `typescript` - Compilador TypeScript

## 🏗️ Estrutura do Projeto

```
fontend_barber/
├── public/                 # Arquivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── addplan/       # Página para adicionar planos
│   │   │   └── page.tsx
│   │   ├── edit/          # Página para editar clientes
│   │   │   └── page.tsx
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página inicial
│   │   └── favicon.ico    # Ícone do site
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Clients.tsx    # Formulário de cadastro de clientes
│   │   ├── Footer.tsx     # Rodapé
│   │   ├── ListClients.tsx # Lista de clientes
│   │   ├── ListPlan.tsx   # Lista de planos
│   │   ├── Navbar.tsx     # Barra de navegação
│   │   └── Plans.tsx      # Seleção de planos
│   ├── context/           # Contextos do React
│   │   ├── ClientContext.tsx # Contexto para clientes
│   │   └── PlanContext.tsx   # Contexto para planos
│   ├── hooks/             # Custom hooks
│   │   ├── UseClient.tsx  # Hook para gerenciar clientes
│   │   └── UsePlan.tsx    # Hook para gerenciar planos
│   └── services/          # Serviços de API
│       └── api.ts         # Configuração do Axios
├── eslint.config.mjs      # Configuração ESLint
├── next.config.ts         # Configuração Next.js
├── postcss.config.mjs     # Configuração PostCSS
├── tsconfig.json          # Configuração TypeScript
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm
- API Barber rodando (veja README da pasta `api_barber`)

### Instalação

1. **Clone o repositório e navegue para a pasta:**
```bash
git clone https://github.com/LucasSantos96/systembarber.git
cd systembarber/fontend_barber
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure a URL da API:**
Certifique-se de que a API está rodando em `http://localhost:3333` ou configure a URL no arquivo `src/services/api.ts`.

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O aplicativo estará disponível em `http://localhost:3000`

## 📱 Funcionalidades

### 🏠 Página Inicial
- **Cadastro de Clientes**: Formulário para cadastrar novos clientes com nome, telefone e seleção de plano
- **Lista de Clientes**: Visualização de todos os clientes cadastrados
- **Interface Responsiva**: Design adaptável para desktop e mobile

### 📋 Gerenciamento de Clientes
- Cadastrar novos clientes
- Visualizar lista de clientes
- Editar informações dos clientes
- Associar clientes a planos de assinatura
- Definir status e data de expiração

### 💼 Gerenciamento de Planos
- Visualizar planos disponíveis
- Adicionar novos planos
- Associar clientes aos planos

## 🎨 Interface e UX

### Design System
- **Cores**: Paleta moderna com foco em verde para ações positivas
- **Tipografia**: Fonte Geist otimizada para web
- **Layout**: Design limpo e minimalista
- **Responsividade**: Adaptável a diferentes tamanhos de tela

### Componentes Principais

#### Clients.tsx
- Formulário de cadastro com validação
- Seleção de planos integrada
- Feedback visual para ações

#### ListClients.tsx
- Lista responsiva de clientes
- Informações organizadas em cards
- Ações de edição e exclusão

#### Plans.tsx
- Seleção visual de planos
- Integração com contexto global
- Feedback de seleção

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Constrói o aplicativo para produção com Turbopack
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🌐 Integração com API

O frontend se comunica com a API através do Axios configurado em `src/services/api.ts`. As principais operações incluem:

- **GET** `/clients` - Buscar lista de clientes
- **POST** `/clients` - Criar novo cliente
- **PUT** `/clients/:id` - Atualizar cliente
- **DELETE** `/clients/:id` - Remover cliente
- **GET** `/plans` - Buscar lista de planos
- **POST** `/plans` - Criar novo plano

## 📱 Contextos e Estado

### ClientContext
- Gerencia o estado global dos clientes
- Fornece funções para CRUD de clientes
- Sincroniza com a API

### PlanContext
- Gerencia o estado global dos planos
- Controla seleção de planos no formulário
- Fornece dados para componentes

## 🎯 Custom Hooks

### useClient
- Hook personalizado para operações com clientes
- Encapsula lógica de API calls
- Gerencia estados de loading e erro

### usePlan
- Hook para gerenciar planos
- Controla seleção de planos
- Integra com contexto global

## 🔒 Configurações de Segurança

- CORS configurado na API para aceitar requisições do frontend
- Validação de dados no frontend e backend
- Sanitização de inputs do usuário

## 📱 Responsividade

O design é totalmente responsivo, adaptando-se a:
- **Desktop**: Layout em colunas com sidebar
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Layout em coluna única otimizado para toque

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.