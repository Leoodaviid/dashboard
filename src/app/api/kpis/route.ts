import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function GET() {
  const kpis = await prisma.kpi.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      monthlyData: true,
      dailyData: true,
      expensesByCategory: true,
    },
  });

  return NextResponse.json(kpis);
}
