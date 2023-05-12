import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function GET() {
  const transactions = await prisma.transactions.findMany({});

  return NextResponse.json(transactions);
}
