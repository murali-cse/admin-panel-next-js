import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const list = await prisma.project.findMany();

  return NextResponse.json(list);
}
