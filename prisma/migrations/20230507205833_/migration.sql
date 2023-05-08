-- CreateTable
CREATE TABLE "Kpi" (
    "id" SERIAL NOT NULL,
    "totalProfit" DECIMAL(10,2) NOT NULL,
    "totalRevenue" DECIMAL(10,2) NOT NULL,
    "totalExpenses" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kpi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyData" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "revenue" DECIMAL(10,2) NOT NULL,
    "expenses" DECIMAL(10,2) NOT NULL,
    "operationalExpenses" DECIMAL(10,2) NOT NULL,
    "nonOperationalExpenses" DECIMAL(10,2) NOT NULL,
    "kpiId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonthlyData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyData" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "revenue" DECIMAL(10,2) NOT NULL,
    "expenses" DECIMAL(10,2) NOT NULL,
    "kpiId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpensesByCategory" (
    "id" SERIAL NOT NULL,
    "salaries" DECIMAL(10,2) NOT NULL,
    "supplies" DECIMAL(10,2) NOT NULL,
    "services" DECIMAL(10,2) NOT NULL,
    "kpiId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpensesByCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MonthlyData" ADD CONSTRAINT "MonthlyData_kpiId_fkey" FOREIGN KEY ("kpiId") REFERENCES "Kpi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyData" ADD CONSTRAINT "DailyData_kpiId_fkey" FOREIGN KEY ("kpiId") REFERENCES "Kpi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpensesByCategory" ADD CONSTRAINT "ExpensesByCategory_kpiId_fkey" FOREIGN KEY ("kpiId") REFERENCES "Kpi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
