import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const employee = await prisma.employee.findMany({
    where: {
      status: {
        in: ["ACTIVE", "INACTIVE"],
      },
    },
  });

  return NextResponse.json(
    {
      status: true,
      data: employee,
    },
    { status: 200 }
  );
}
