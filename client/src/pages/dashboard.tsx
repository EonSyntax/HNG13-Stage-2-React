import { Link } from "wouter";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { ProtectedRoute } from "@/components/protected-route";
import { useQuery } from "@tanstack/react-query";
import { Ticket as TicketIcon, Clock, CheckCircle2, LogOut, Plus } from "lucide-react";
import type { Ticket } from "@shared/schema";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user, logout } = useAuth();

  const { data: tickets = [], isLoading } = useQuery<Ticket[]>({
    queryKey: ["/api/tickets"],
  });

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full border-b bg-card">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <TicketIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">EonTickets</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline" data-testid="text-username">
              {user?.username}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h2>
            <p className="text-muted-foreground">
              Overview of your ticket management system
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="h-24 bg-muted/50 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-md hover-elevate" data-testid="card-stat-total">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
                  <TicketIcon className="w-5 h-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold" data-testid="text-total-count">
                    {stats.total}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    All time tickets
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover-elevate" data-testid="card-stat-open">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                  <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-600" data-testid="text-open-count">
                    {stats.open}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Awaiting action
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover-elevate" data-testid="card-stat-in-progress">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                  <Clock className="w-5 h-5 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-amber-600" data-testid="text-in-progress-count">
                    {stats.inProgress}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Being worked on
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover-elevate" data-testid="card-stat-closed">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Closed Tickets</CardTitle>
                  <CheckCircle2 className="w-5 h-5 text-gray-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-gray-600" data-testid="text-closed-count">
                    {stats.closed}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Resolved tickets
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tickets">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-manage-tickets">
                <TicketIcon className="w-4 h-4 mr-2" />
                Manage Tickets
              </Button>
            </Link>
            <Link href="/tickets?action=create">
              <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-create-ticket">
                <Plus className="w-4 h-4 mr-2" />
                Create New Ticket
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
