import { createEmployeeSchema } from "@/app/utils/schema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validate = createEmployeeSchema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 });
  }

  var resp = await prisma.employee.create({
    data: {
      name: body.name,
      dob: body.dob,
      contact: body.contact,
      email: body.email,
      date_of_joining: body.doj,
      designation: body.designation,
      address: body.address,
    },
  });

  return NextResponse.json(
    {
      status: true,
      message: resp ? "Employee created successfully" : "Something went wrong",
    },
    { status: 200 }
  );
}
