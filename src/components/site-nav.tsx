import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-book", label: "About the Book" },
  { to: "/authors", label: "About the Authors" },
  { to: "/buy", label: "Buy the Book" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-olive-deep text-primary-foreground">
            <Shield className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
              The Battle of Do Ab
            </span>
            <span className="block truncate text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Kelling · Foote
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-display px-3 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "text-olive-deep"
                    : "text-charcoal/70 hover:text-olive-deep"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/buy"
            className="font-display ml-2 rounded-sm bg-olive-deep px-4 py-2 text-[13px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-army"
          >
            Buy Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-display py-3 text-sm uppercase tracking-[0.16em] ${
                  path === l.to ? "text-olive-deep" : "text-charcoal/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
