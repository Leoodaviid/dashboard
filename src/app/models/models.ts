export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
[];

export interface Month {
  id: number;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: number;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: number;
  totalProfit: number;
  totalReveue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

export interface Transaction {
  id: number;
  amount: number;
  buyer: string;
  productId: string;
}

export interface GetProductResponse {
  id: string;
  price: number;
  expense: number;
  transaction: Array<Transaction>;
}

export interface GetTransactionsResponse {
  id: number;
  amount: number;
  buyer: string;
  ProductId: string;
}
