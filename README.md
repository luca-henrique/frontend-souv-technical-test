# Frontend Souv Technical Test

Este projeto é um teste técnico de frontend desenvolvido por Lucas Henrique, utilizando tecnologias modernas como Next.js, Tailwind CSS, React Query e a abordagem Atomic Design. O objetivo é demonstrar habilidades em construção de interfaces modulares, acessíveis e com gerenciamento eficiente de estado e dados.

## 🛠️ Tecnologias Utilizadas

- **Next.js** – Framework React para aplicações web com renderização híbrida.
- **Tailwind CSS** – Utilitário CSS para estilização rápida e responsiva.
- **Shadcn UI** – Biblioteca de componentes acessíveis e personalizáveis, baseada em Radix UI.
- **React Query (TanStack Query)** – Gerenciamento de estado assíncrono e cache de dados.
- **Atomic Design** – Arquitetura de componentes reutilizáveis e escaláveis.
- **TypeScript** – Tipagem estática para maior robustez no desenvolvimento.
- **Jest** – Framework de testes para garantir a qualidade do código.

## 📁 Estrutura de Diretórios

```
frontend-souv-technical-test/
├── __mocks__/             # Mocks para testes
├── public/                # Arquivos públicos (imagens, ícones, etc.)
├── src/                   # Código-fonte principal
│   ├── components/        # Componentes organizados por Atomic Design
│   ├── pages/             # Páginas da aplicação
│   ├── services/          # Serviços de API e lógica de negócios
│   ├── styles/            # Estilos globais e configurações do Tailwind
│   └── utils/             # Utilitários e helpers
├── components.json        # Configurações de componentes
├── jest.config.js         # Configuração do Jest
├── jest.setup.js          # Setup inicial para testes
├── next.config.ts         # Configuração do Next.js
├── tailwind.config.js     # Configuração do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências e scripts do projeto
```

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/luca-henrique/frontend-souv-technical-test.git
   cd frontend-souv-technical-test
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**

   Abra o navegador e vá para `http://localhost:3000`.

## ✅ Testes

Para executar os testes unitários com Jest:

```bash
npm run test
# ou
yarn test
```

## 📌 Observações

- O projeto utiliza a abordagem Atomic Design para organização dos componentes, facilitando a manutenção e escalabilidade.
- A biblioteca Shadcn UI é utilizada para garantir componentes acessíveis e facilmente personalizáveis.
- O gerenciamento de dados é feito com React Query, proporcionando uma experiência otimizada de fetching e caching.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
