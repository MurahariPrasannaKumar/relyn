import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-border bg-background px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto mt-16 max-w-[1280px] select-none text-center" aria-hidden>
        <p
          className="font-display leading-none tracking-tight bg-clip-text text-transparent [font-size:clamp(4.5rem,16vw,13rem)]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #e7e4de 0%, #e7e4de 35%, #9a968d 50%, #e7e4de 65%, #e7e4de 100%)"
          }}
        >
          RELYN
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-col gap-4 border-t border-border pt-6 text-sm font-600 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Relyn India Pvt Ltd. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href="mailto:support@relyn.com" className="flex items-center gap-2 hover:text-ink">
            <Mail className="h-4 w-4" />
            support@relyn.com
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-ink">
            <Phone className="h-4 w-4" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </footer>
  );
}
