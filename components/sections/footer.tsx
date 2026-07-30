import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = [
  "Company",
  "Services",
  "Become Partner",
  "FAQs",
  "Privacy",
  "Terms",
  "Contact"
];

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-border bg-background px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="#" className="flex items-center gap-3 text-2xl font-800 text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white">
              R
            </span>
            Relyn
          </a>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            Premium household professional matching for families who value trust,
            clarity and reliable support.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Relyn social profile"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-border text-muted transition hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-base font-800 text-ink">Explore</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="text-sm font-700 text-muted transition hover:text-ink">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-base font-800 text-ink">Contact</h2>
          <div className="mt-5 grid gap-3 text-sm font-700 text-muted">
            <a href="mailto:hello@relyn.in" className="flex items-center gap-3 hover:text-ink">
              <Mail className="h-4 w-4" />
              hello@relyn.in
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-ink">
              <Phone className="h-4 w-4" />
              +91 00000 00000
            </a>
          </div>
        </div>
      </div>
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

      <p className="mx-auto mt-10 max-w-[1280px] border-t border-border pt-6 text-sm font-600 text-muted">
        Copyright 2026 Relyn India Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}
