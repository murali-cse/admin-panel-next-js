import { deleteEmployeeSchema } from "@/app/utils/schema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
// import {deleteEmployeeSchema} from "../../uti"

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

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validate = deleteEmployeeSchema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 });
  }

  const employee = await prisma.employee.findUnique({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json({
    status: true,
    data: employee,
  });
}
