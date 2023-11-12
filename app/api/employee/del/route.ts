import { deleteEmployeeSchema } from "@/app/utils/schema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validate = deleteEmployeeSchema.safeParse(body);
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 });
  }
  const res = await prisma.employee.update({
    where: {
      id: parseInt(body.id),
    },
    data: {
      status: "DELETED",
    },
  });

  return NextResponse.json({
    status: true,
    message: res ? "Employee Deleted Successfully" : "Something went wrong",
  });
}
