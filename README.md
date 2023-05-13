<p>Finance é uma aplicação financeira que permite visualizar e analisar dados relacionados a finanças, como receitas, despesas, lucros e previsões. A aplicação possui uma arquitetura full-stack. Apresenta um painel de controle com vários widgets e gráficos interativos para fornecer informações visuais sobre o desempenho financeiro. A aplicação combina tecnologias modernas de desenvolvimento web, como React, Material-UI e bibliotecas de visualização de dados, para criar uma experiência de usuário envolvente e informativa para análise financeira. O objetivo da aplicação é fornecer uma visualização clara e intuitiva das principais métricas financeiras de um negócio, como receita, lucro, despesas, crescimento, entre outras, por meio de gráficos e tabelas. </p>

🔗: <a href="https://dashboard-taupe-five.vercel.app">https://dashboard-taupe-five.vercel.app</a>

## 💻Tecnologias:

- Typescript

- Next.Js

- Material-UI(Mui)

- Prisma

- Recharts

- Redux Toolkit Query

## 🛠️Instalação:

Para instalar as dependências, execute o seguinte comando:

```
npm install || yarn install || pnpm install
```

## 🧑‍💻Uso:

Para iniciar o projeto, execute o seguinte comando:

```
npm start || yarn start || pnpm dev
```

Isso iniciará o projeto em`http://localhost:3000`.

## 🗃️Estrutura dos arquivos:

```

dashboard/
├── .next/
│    └── ...
├── .vscode/
│	└── ...
├── prisma/
│	├── migrations
│   ├── schema.prisma
│	└── seed.ts
└── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── kpis/
│   │   │   │   ├── route.ts
│   │   │   ├── products/
│   │   │   │   ├── route.ts
│   │   │   ├── transactions/
│   │   │   │   ├── route.ts
│   │   ├── predictions/
│   │   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── CampaignsAndTargets.tsx
│   │   │   ├── ExpenseBreakdownByCategory.tsx
│   │   │   ├── index.ts
│   │   │   ├── ListOfProducts.tsx
│   │   │   ├── Operational.tsx
│   │   │   ├── OverallSummary.tsx
│   │   │   ├── ProductPrices.tsx
│   │   │   ├── ProfitAndRevenue.tsx
│   │   │   ├── RecentOrders.tsx
│   │   │   ├── RevenueAndExpenses.tsx
│   │   │   ├── RevenueMonthByMonth.tsx
│   │   ├── BoxHeader.tsx
│   │   ├── DashboardBox.tsx
│   │   ├── FlexBetween.tsx
│   │   ├── NavBar.tsx
│   ├── models/
│   │   ├── models.ts
│   ├── mui/
│   │   ├── expanded-theme.ts
│   │   ├── theme.ts
│   ├── prisma/
│   │   ├── prisma.ts
│   ├── service/
│   │   ├── api.ts
│   │   ├── store.ts
│	└──
├──.env
├──.env.local
├──.eslintrc.json
├──.gitignore
├──docker-compose.yaml
├──Dockerfile
├──next-env.d.ts
├──next.config.js
├──package-lock.json
├──package.json
├──README.md
├──tailwind.config.js
├──tsconfig.json
```

## 🔑Descrição de alguns diretórios importantes:

- `.next/`: Onde contém todos os recursos compilados e otimizados, como as páginas HTML, pacotes JavaScript, imagens e outros arquivos estáticos necessários para executar o aplicativo no modo de produção.
- `src/`: Diretório usado para armazenar o código-fonte. Contém todos os arquivos Typescript, componentes React e outros recursos usados para criar a interface do usuário e implementar a lógica de negócios do aplicativo.
- `src/app/`: Novo diretório introduzido para fornecer um local centralizado para configurar e inicializar o aplicativo. Responsável por configurar o layout e os estilos globais do aplicativo, manipular a renderização do lado do cliente e fornecer outras opções de personalização.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/models/`: Onde contém a definição de interfaces TypeScript para as props de diferentes componentes usados na estrutura Next.js.
- `src/mui`: Contém estilos e themas de cores usando a biblioteca Material-UI (Mui).
- `src/prisma`: Instância global do client Prisma.
- `src/service`: Configuração Api, busca de dados do servidor e respostas das consultas utilizando a biblioteca Redux Toolkit Query.

## 🧰Detalhes e funções de alguns arquivos:

- `src/componentes/dashboard/CampaignsAndTargets.tsx`: O componente renderiza um painel de controle com informações sobre campanhas e metas.
- `src/components/dashboard/ExpenseBreakdownByCategory.tsx`: O componente renderiza um painel de controle com um gráfico de pizza que mostra a distribuição de despesas por categoria. O hook `useMemo` é usado para calcular a variável `pieChartData` somente quando o `kpiData` muda. Essa variável é definida com base nos dados retornados da consulta. Ela calcula o valor das fatias do gráfico de pizza para cada categoria de despesa (salaries, supplies e services) e retorna um array de objetos no formato esperado pelo gráfico de pizza. Se os dados de `kpiData` não estiverem disponíveis, um array vazio é retornado.
- `src/componentes/dashboard/ListOfProducts.tsx`: Esse componente renderiza uma lista de produtos em uma grade de dados.
- `src/componentes/dashboard/Operational.tsx`: O componente renderiza um painel de controle com um gráfico de linha que mostra a comparação entre despesas operacionais e despesas não operacionais ao longo do tempo.
- `src/componentes/dashboard/OverallSummary.tsx`: Esse componente renderiza o Menu de navegação do aplicativo web.
- `src/componentes/dashboard/ProductPrices.tsx`:  Esse componente renderiza um painel de controle com um gráfico de dispersão que compara os preços dos produtos com as despesas relacionadas.
- `src/componentes/dashboard/ProfitAndRevenue.tsx`: Esse componente renderiza um painel de controle com um gráfico de linha que mostra a receita e o lucro ao longo do tempo.
- `src/componentes/dashboard/RecentOrders.tsx`: Esse componente renderiza um painel de controle com uma tabela de transações recentes.
- `src/componentes/dashboard/RevenueAndExpenses.tsx`: Esse componente renderiza um painel de controle com um gráfico de área representando a receita e as despesas.
- `src/componentes/dashboard/RevenueMonthByMonth.tsx`: Esse componente renderiza um painel de controle com um gráfico de barras representando a receita mês a mês.
- `src/componentes/BoxHeader.tsx`: Esse componente renderiza o cabeçalho para os painéis de controle. Recebe várias propriedades para personalizar o conteúdo do cabeçalho.
- `src/componentes/NavBar.tsx`: Esse componente renderiza a barra de navegação da aplicação. Exibe o logotipo da aplicação e os links para diferentes páginas.
