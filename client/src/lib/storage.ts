import { z } from "zod";
import { insertTicketSchema } from "@shared/schema";

export type User = {
  id: string;
  username: string;
  password: string;
};

export type Ticket = z.infer<typeof insertTicketSchema> & {
  id: string;
  createdAt: string;
};

const USERS_KEY = 'ticketapp_users';
const TICKETS_KEY = 'ticketapp_tickets';

// User management
export const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const createUser = (username: string, password: string): User => {
  const users = getUsers();
  const newUser: User = {
    id: crypto.randomUUID(),
    username,
    password
  };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return newUser;
};

export const getUserByUsername = (username: string): User | undefined => {
  const users = getUsers();
  return users.find(user => user.username === username);
};

// Ticket management
export const getTickets = (userId: string): Ticket[] => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  const allTickets: Ticket[] = tickets ? JSON.parse(tickets) : [];
  return allTickets.filter(ticket => ticket.userId === userId);
};

export const createTicket = (ticketData: z.infer<typeof insertTicketSchema>): Ticket => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  const allTickets: Ticket[] = tickets ? JSON.parse(tickets) : [];
  
  const newTicket: Ticket = {
    ...ticketData,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
  
  allTickets.push(newTicket);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(allTickets));
  return newTicket;
};

export const updateTicket = (id: string, userId: string, data: Partial<Ticket>): Ticket | null => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  const allTickets: Ticket[] = tickets ? JSON.parse(tickets) : [];
  
  const ticketIndex = allTickets.findIndex(t => t.id === id && t.userId === userId);
  if (ticketIndex === -1) return null;
  
  const updatedTicket = {
    ...allTickets[ticketIndex],
    ...data,
  };
  
  allTickets[ticketIndex] = updatedTicket;
  localStorage.setItem(TICKETS_KEY, JSON.stringify(allTickets));
  return updatedTicket;
};

export const deleteTicket = (id: string, userId: string): boolean => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  const allTickets: Ticket[] = tickets ? JSON.parse(tickets) : [];
  
  const filteredTickets = allTickets.filter(t => !(t.id === id && t.userId === userId));
  
  if (filteredTickets.length === allTickets.length) return false;
  
  localStorage.setItem(TICKETS_KEY, JSON.stringify(filteredTickets));
  return true;
};