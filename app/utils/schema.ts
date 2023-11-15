import { z } from "zod";

export const createEmployeeSchema = z.object({
  name: z.string().min(1).max(255),
  dob: z.string().min(1).max(255),
  contact: z.string().min(1).max(20),
  email: z.string().min(1).max(100),
  doj: z.string().min(1).max(255),
  designation: z.string().min(1).max(255),
  address: z.string().min(1).max(255),
});

export const deleteEmployeeSchema = z.object({
  id: z.number().gt(0),
});
