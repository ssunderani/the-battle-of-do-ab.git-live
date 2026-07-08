import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Mail, Shield } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-sand">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-olive">
              <Shield className="h-4 w-4 text-charcoal" strokeWidth={2.5} />
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
              Miraculous Turn of Events
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/70">
            A memoir of service, sacrifice, brotherhood, family, and faith —
            rooted in the Afghanistan deployment and the Battle of Do Ab.
          </p>
          <div className="mt-5 flex items-center gap-3 text-sand/70">
            <a href="#" aria-label="Facebook" className="hover:text-olive"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-olive"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-olive"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:contact@battleofdoab.com" aria-label="Email" className="hover:text-olive"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.24em] text-olive">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-sand/80">
            <li><Link to="/about-book" className="hover:text-olive">About the Book</Link></li>
            <li><Link to="/authors" className="hover:text-olive">About the Authors</Link></li>
            <li><Link to="/buy" className="hover:text-olive">Buy the Book</Link></li>
            <li><Link to="/gallery" className="hover:text-olive">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-olive">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-olive">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.24em] text-olive">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-sand/80">
            <li>contact@battleofdoab.com</li>
            <li>Press &amp; media inquiries</li>
            <li>Speaking engagements</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-xs text-sand/50 sm:flex-row sm:items-center">
          <p>© {year} John Kelling &amp; LTC Justin Foote. All rights reserved.</p>
          <p className="font-display uppercase tracking-[0.24em]">In honor of those who served</p>
        </div>
      </div>
    </footer>
  );
}
