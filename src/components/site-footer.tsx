import { MapPin, Phone } from "lucide-react"
import { SITE } from "@/config"

export function SiteFooter() {
  return (
    <footer className="mx-4 mt-6 mb-4 flex flex-col gap-3 rounded-2xl bg-card p-4 text-sm">
      <p className="font-heading font-extrabold uppercase tracking-tight">
        {SITE.name}
      </p>

      <div className="flex items-start gap-2 text-muted-foreground">
        <MapPin className="mt-0.5 size-4 shrink-0" />
        <span>{SITE.address}</span>
      </div>

      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-2 text-muted-foreground"
      >
        <Phone className="size-4 shrink-0" />
        {SITE.phone}
      </a>

      <p className="mt-2 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  )
}
