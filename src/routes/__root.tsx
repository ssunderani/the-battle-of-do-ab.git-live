import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Off the map</p>
        <h1 className="font-display mt-3 text-7xl font-bold text-charcoal">404</h1>
        <h2 className="font-display mt-2 text-xl uppercase tracking-wide text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="font-display inline-flex items-center rounded-sm bg-olive-deep px-4 py-2 text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-army"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl uppercase tracking-wide text-charcoal">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="font-display inline-flex items-center rounded-sm bg-olive-deep px-4 py-2 text-sm uppercase tracking-[0.14em] text-primary-foreground hover:bg-army"
          >
            Try again
          </button>
          <a href="/" className="font-display inline-flex items-center rounded-sm border border-border bg-background px-4 py-2 text-sm uppercase tracking-[0.14em] text-charcoal hover:bg-accent/10">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Miraculous Turn of Events — The Battle of Do Ab" },
      { name: "description", content: "A military memoir of service, sacrifice, brotherhood, family, and faith by John Kelling and LTC Justin Foote." },
      { name: "author", content: "John Kelling, LTC Justin Foote" },
      { property: "og:title", content: "Miraculous Turn of Events — The Battle of Do Ab" },
      { property: "og:description", content: "A military memoir of service, sacrifice, brotherhood, family, and faith by John Kelling and LTC Justin Foote." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Battle of Do Ab" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Miraculous Turn of Events — The Battle of Do Ab" },
      { name: "twitter:description", content: "A military memoir of service, sacrifice, brotherhood, family, and faith by John Kelling and LTC Justin Foote." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af554e8e-07cd-4142-a98a-de0cacd77440/id-preview-9f51d156--a4d1522a-97d1-45e3-9f7c-082c64eacb2f.lovable.app-1783533536725.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/af554e8e-07cd-4142-a98a-de0cacd77440/id-preview-9f51d156--a4d1522a-97d1-45e3-9f7c-082c64eacb2f.lovable.app-1783533536725.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
