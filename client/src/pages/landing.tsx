import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import {
  Ticket,
  TrendingUp,
  Users,
  BarChart3,
  CheckCircle2,
  Clock,
  Shield,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-20 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Streamline Your{" "}
                <span className="text-primary">Support Workflow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Track, manage, and resolve support tickets with ease. EonTickets
                brings clarity to your customer support with real-time updates,
                analytics, and team collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8"
                    data-testid="button-get-started"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8"
                    data-testid="button-login"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="hsl(var(--card))"
            />
          </svg>
        </section>

        <section id="features" className="py-16 md:py-24 bg-card">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage support tickets efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="shadow-lg hover-elevate" data-testid="card-feature-smart-ticketing">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Ticket className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Ticketing</h3>
                  <p className="text-muted-foreground">
                    Create, categorize, and prioritize tickets with an intuitive
                    interface designed for speed and clarity.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-elevate" data-testid="card-feature-realtime-updates">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
                  <p className="text-muted-foreground">
                    Stay in sync with instant notifications and live status
                    updates across your entire team.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-elevate" data-testid="card-feature-team-collaboration">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                  <p className="text-muted-foreground">
                    Work together seamlessly with shared visibility and
                    collaborative tools for your support team.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-elevate" data-testid="card-feature-analytics">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">
                    Get insights into ticket trends, resolution times, and team
                    performance with comprehensive analytics.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-elevate" data-testid="card-feature-status-tracking">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Status Tracking</h3>
                  <p className="text-muted-foreground">
                    Track ticket progress through customizable workflows with
                    clear visual indicators.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover-elevate" data-testid="card-feature-time-management">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Time Management</h3>
                  <p className="text-muted-foreground">
                    Monitor response times and SLAs to ensure your team meets
                    customer expectations consistently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 right-10 w-[250px] h-[250px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Built for Teams of All Sizes
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a small startup or a large enterprise, EonTickets
                  scales with your needs. Our platform is designed to grow
                  alongside your support operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Easy Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Get started in minutes with our intuitive onboarding process
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Secure & Reliable</h4>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security to protect your customer data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Scalable Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Grows with your team from 1 to 1000+ support agents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="shadow-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Open Tickets</span>
                      <span className="text-2xl font-bold text-green-600">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">In Progress</span>
                      <span className="text-2xl font-bold text-amber-600">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Resolved Today</span>
                      <span className="text-2xl font-bold text-gray-600">38</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span>15% faster resolution this week</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Support?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join teams already using EonTickets to deliver exceptional customer
              support
            </p>
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="secondary"
                className="px-8"
                data-testid="button-cta-signup"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
