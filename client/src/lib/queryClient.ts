import { QueryClient } from "@tanstack/react-query";
import * as storage from "./storage";

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<any> {
  const session = localStorage.getItem("ticketapp_session");
  if (!session) {
    throw new Error("Not authenticated");
  }
  const { user } = JSON.parse(session);

  if (url === "/api/tickets") {
    switch (method) {
      case "GET":
        return storage.getTickets(user.id);
      case "POST":
        return storage.createTicket(data as any);
      default:
        throw new Error(`Unsupported method ${method} for ${url}`);
    }
  }

  if (url.startsWith("/api/tickets/")) {
    const id = url.split("/").pop()!;
    switch (method) {
      case "PATCH":
        return storage.updateTicket(id, user.id, data as any);
      case "DELETE":
        const success = storage.deleteTicket(id, user.id);
        if (!success) throw new Error("Ticket not found");
        return { message: "Ticket deleted successfully" };
      default:
        throw new Error(`Unsupported method ${method} for ${url}`);
    }
  }

  throw new Error(`Unsupported endpoint: ${url}`);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
