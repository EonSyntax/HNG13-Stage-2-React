import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(50, "Username must be less than 50 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type User = {
  id: string;
  username: string;
  password: string;
};

export const insertTicketSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title must be less than 255 characters"),
  description: z.string().optional(),
  status: z.enum(["open", "in_progress", "closed"], {
    errorMap: () => ({ message: "Status must be open, in_progress, or closed" }),
  }),
  priority: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "Priority must be low, medium, or high" }),
  }).optional(),
  userId: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertTicket = z.infer<typeof insertTicketSchema>;

export type Ticket = InsertTicket & {
  id: string;
  createdAt: string;
};
