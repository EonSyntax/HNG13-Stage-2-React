import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">EonTickets</h3>
            <p className="text-sm text-muted-foreground">
              Streamline your support workflow with intelligent ticket management.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/eonsyntax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/eonsyntax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/adebanji-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EonTickets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
