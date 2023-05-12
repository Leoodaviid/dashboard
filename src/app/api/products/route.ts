import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      transaction: true,
    },
  });

  return NextResponse.json(products);
}
