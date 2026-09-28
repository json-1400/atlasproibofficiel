# Blueprint: atlasproibofficiel.com (Next.js + Supabase + Sanity + Netlify + Resend)

One note before the build: make sure you hold the rights or licenses to distribute the content behind the subscriptions you sell. Payment processors and Netlify can suspend accounts over this, and it is the biggest risk to the whole project.

## 1. Stack roles

| Tool | Role |
|---|---|
| **Next.js 15 (App Router, TypeScript)** | Frontend, SSG/ISR pages, API route handlers |
| **Sanity** | CMS for tutorials, app pages, plan content, FAQs, reviews |
| **Supabase** | Orders, customers, renewals, support tickets, auth for admin |
| **Resend** | Order confirmation, renewal reminders, contact form |
| **next-seo** | JSON-LD (Product, FAQPage, HowTo, Breadcrumb, Organization) |
| **Netlify** | Hosting, env vars, scheduled functions |
| **GitHub** | Repo, PR previews via Netlify deploy previews |
| **Antigravity IDE** | Agent-driven coding, using the phased prompts in section 10 |

## 2. Repo structure

```
atlasproibofficiel/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          # Homepage (transactional hub)
│   ├── abonnements/
│   │   ├── page.tsx                      # Silo hub (plans comparison)
│   │   ├── [slug]/page.tsx               # 12-mois, 6-mois, 3-mois
│   │   └── renouvellement/page.tsx
│   ├── telecharger/
│   │   ├── page.tsx                      # Download matrix hub
│   │   └── [slug]/page.tsx               # ontv, max, windows, ios
│   ├── tutoriels/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── commander/[plan]/page.tsx         # Checkout form
│   ├── merci/page.tsx
│   ├── api/
│   │   ├── orders/route.ts
│   │   ├── contact/route.ts
│   │   ├── revalidate/route.ts           # Sanity webhook
│   │   └── cron/renewal-reminders/route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                               # Button, Card, Badge, Accordion (shadcn/ui)
│   ├── layout/                           # Header, Footer, Breadcrumbs
│   ├── sections/                         # Hero, PricingTable, FeatureGrid, FAQ, Reviews, StickyCTA, ExpiredAlert
│   └── seo/                              # JsonLd wrappers (next-seo)
├── lib/
│   ├── sanity/ (client.ts, queries.ts, image.ts)
│   ├── supabase/ (server.ts, browser.ts)
│   ├── resend.ts
│   └── seo.ts                            # buildMetadata() helper
├── emails/                               # React Email templates
├── sanity/                               # schemas + studio config (embedded at /studio)
├── supabase/migrations/
├── netlify.toml
├── .env.example
└── README.md
```

## 3. Homepage Strategy: Targeting "Abonnement Atlas Pro" (Commercial Intent)

Going with **`Abonnement Atlas Pro`** as your primary homepage target is a solid, conversion-driven strategy.

When your primary goal is selling licenses rather than just acting as an informational portal, optimizing the homepage directly for commercial intent puts the purchase offer front and center.

Here is how to set up the homepage so it fully targets **`Abonnement Atlas Pro`** without losing brand authority.

### Homepage Metadata Blueprint

* **Primary Keyword:** `Abonnement Atlas Pro`
* **Secondary Keywords:** `Atlas Pro IPTV`, `Abonnement Atlas Pro Max`, `Atlas Pro 12 mois`, `Code Atlas Pro`
* **Search Intent:** Transactional / Commercial Investigation

| Element | Optimized Content |
| --- | --- |
| **Title Tag** | `Abonnement Atlas Pro : Accès Officiel IPTV & Atlas Pro Max` *(~58 chars)* |
| **Meta Description** | `Commandez votre abonnement Atlas Pro officiel. Formules 3, 6 et 12 mois compatibles Smart TV, Android et Fire Stick. Activation immédiate et code sécurisé.` *(~158 chars)* |
| **H1 Tag** | `Abonnement Atlas Pro Officiel : Votre Accès IPTV Haute Définition` |

### Homepage Content Architecture (Targeting Purchase Intent)

Because the homepage is now the primary transactional hub, structure the sections to move visitors directly into the checkout funnel:

1. **Hero Section (Transactional)**
   - **H1:** `Abonnement Atlas Pro Officiel : Votre Accès IPTV Haute Définition`
   - Sub-headline focused on delivery speed and reliability: *« Activation en moins de 15 minutes, compatible avec toutes les applications Atlas Pro ONTV et Atlas Pro Max. »*
   - Direct CTAs: Primary button *« Choisir mon abonnement »* (scrolls to the pricing table) and secondary button *« Télécharger l'application »* (links to `/telecharger/`).

2. **Pricing Grid (Immediate Commercial Focus - Above the Fold on Desktop)**
   - **H2:** `Nos Formules d'Abonnement Atlas Pro`
   - Display 3 cards: **12 Mois** (highlighted as "Le plus populaire"), **6 Mois**, and **3 Mois**.
   - Features list per card: Nombre de chaînes, VOD 4K/FHD, support multi-écrans, code d'activation immédiat.

3. **Application & Compatibility Bridge**
   - **H2:** `Comment Fonctionne l'Abonnement Atlas Pro ?`
   - 3 quick steps: (1) Choisissez votre durée, (2) Recevez vos identifiants/code par e-mail, (3) Connectez-vous sur votre application (Atlas Pro ONTV, Atlas Pro Max, ou Smart TV).
   - Contextual links to the respective download pages (`/telecharger/atlas-pro-ontv/`, `/telecharger/atlas-pro-max/`).

4. **SEO/AEO Entity Block**
   - **H2:** `Pourquoi Choisir l'Abonnement IPTV Atlas Pro ?`
   - Semantic paragraphs explaining server stability, anti-freeze technology, and device support (Samsung Smart TV, Android Box, Fire Stick, iOS). This section provides the topical depth needed to rank for both `Abonnement Atlas Pro` and broader queries.

5. **FAQ Block (Marked up with JSON-LD `FAQPage`)**
   - **H2:** `Questions Fréquentes sur l'Abonnement Atlas Pro`
   - Include high-CTR questions from your GSC data:
     - *« Combien de temps pour recevoir mon code Atlas Pro après paiement ? »*
     - *« Mon abonnement est-il compatible avec l'application Atlas Pro ONTV ? »*
     - *« Que faire en cas de problème de connexion au serveur ? »* (links to your `/tutoriels/erreur-connexion-serveur` guide).

### Schema Markup Recommendation

On the homepage, implement a composite JSON-LD schema containing:
* **`Product` / `AggregateOffer`**: Outlining the 3, 6, and 12-month packages with real pricing in EUR to capture Google's product rich snippets.
* **`FAQPage`**: To expand the search result footprint with collapsible Q&A snippets.

## 4. Design system (white SaaS style)

- **Background:** `#FFFFFF`, with alternate sections in `#F8FAFC`
- **Text:** `#0F172A` headings, `#475569` body
- **Primary:** indigo `#4F46E5`, hover `#4338CA`; accent green `#10B981` for "instant delivery" badges
- **Borders and shadows:** 1px `#E2E8F0`, `rounded-2xl`, `shadow-sm` that lifts to `shadow-md` on hover
- **Font:** Inter via `next/font`
- **Layout:** `max-w-6xl` container, 96px section spacing, sticky header with blur
- **Components:** pill badges, gradient-free hero with a soft radial indigo glow, pricing cards with a highlighted "Populaire" 12-month plan, accordion FAQ, and a sticky bottom CTA on mobile
- **Setup:** Tailwind CSS + shadcn/ui + lucide-react

## 5. Sanity schemas

- **plan:** `title, slug, durationMonths, price, oldPrice, badge, features[], ctaLabel, seoTitle, seoDescription, faq[]`
- **appPage:** `title, slug, platform, version, apkUrl, sha256, changelog[], installSteps (portable text), relatedTutorials[] (refs), seo`
- **tutorial:** `title, slug, category (troubleshooting | hardware | account), body (portable text), steps[] (for HowTo schema), showExpiredAlert (boolean), relatedTutorials[] (refs), seo`
- **review:** `name, rating, text, date`
- **siteSettings:** `phone/WhatsApp, support email, banner text, default OG image`

The `showExpiredAlert` flag renders the "Expired Code" monetization bridge automatically on the tutorials that need it.

## 6. Supabase schema

```sql
create table customers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  created_at timestamptz default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  plan_slug text not null,          -- atlas-pro-12-mois, etc.
  amount numeric(10,2) not null,
  currency text default 'EUR',
  status text default 'pending',    -- pending | paid | delivered | failed
  payment_ref text,
  activation_start date,
  activation_end date,
  reminder_sent boolean default false,
  created_at timestamptz default now()
);

create table tickets (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  subject text,
  message text not null,
  status text default 'open',
  created_at timestamptz default now()
);

alter table customers enable row level security;
alter table orders enable row level security;
alter table tickets enable row level security;
-- No public policies: all writes go through server routes using the service role key.
```

## 7. Key implementation details

**Static generation.** Every silo page uses `generateStaticParams` plus ISR (`revalidate = 3600`). A Sanity webhook hits `/api/revalidate` for instant updates.

**SEO helper (`lib/seo.ts`).** `buildMetadata({title, description, path, image})` returns Next `Metadata` with canonical, OpenGraph, and Twitter tags. The canonical URL is always absolute and without a trailing slash (match your `netlify.toml` trailing-slash setting to it).

**next-seo JSON-LD per page type.**
- Homepage: `OrganizationJsonLd`, `WebSiteJsonLd`, `ProductJsonLd` with `AggregateOffer` (3, 6, and 12 mois packages), `FAQPageJsonLd`
- Plan pages: `ProductJsonLd` with offers, `BreadcrumbJsonLd`, `FAQPageJsonLd`
- App pages: `SoftwareApplicationJsonLd`, `BreadcrumbJsonLd`
- Tutorials: `ArticleJsonLd`, `HowToJsonLd` (from the `steps[]` field), `BreadcrumbJsonLd`

**Internal linking, built into the components.**
- `<ExpiredAlert />` renders at the top of tutorials where `showExpiredAlert` is true. Its anchor text is the exact-match "Commander l'abonnement Atlas Pro 12 mois", linking to `/abonnements/atlas-pro-12-mois`.
- `<StickyCTA />` appears on `/telecharger/atlas-pro-ontv` and `/telecharger/atlas-pro-max`, with the "15 minutes" copy.
- `<RelatedTutorials />` gives horizontal cross-links in the tutorials silo. App pages link down to their install tutorial via the `relatedTutorials` refs.
- `<Breadcrumbs />` on every page reinforces the silo.

**Order flow.**
1. `/commander/[plan]` collects name, email, and phone.
2. `POST /api/orders` validates with Zod, upserts the customer, inserts the order as `pending`, and returns a payment link or instructions.
3. The payment webhook (or manual admin confirmation) sets the order to `paid`.
4. Resend sends the confirmation and activation email, and the order becomes `delivered`.

You haven't specified a payment provider. Stripe may not be available for your business location, so decide between Stripe, Paddle, Lemon Squeezy, PayPal, or manual confirmation (WhatsApp plus admin) before building step 3.

**Renewal reminders.** A Netlify scheduled function calls `/api/cron/renewal-reminders` daily. It finds orders where `activation_end` is 7 days away and `reminder_sent = false`, sends a Resend email linking to `/abonnements/renouvellement`, then flags the order.

**Resend.** React Email templates for `order-confirmation`, `activation`, `renewal-reminder`, and `contact-received`. Send from a verified subdomain such as `mail.atlasproibofficiel.com` (add the SPF, DKIM, and DMARC records).

**Anti-spam.** Add a honeypot field and rate limiting on `/api/orders` and `/api/contact` (Upstash Ratelimit or a Supabase-based counter).

## 8. `netlify.toml`

New website deployment configuration (no legacy 301 redirects needed):

```toml
[build]
  command = "next build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[scheduled.functions]]
  # If using a Netlify scheduled function instead of an external cron
```

## 9. Environment variables (`.env.example`)

```
NEXT_PUBLIC_SITE_URL=https://atlasproibofficiel.com
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_FROM=Atlas Pro <no-reply@mail.atlasproibofficiel.com>
CRON_SECRET=
```

## 10. Antigravity IDE: phased agent prompts

Give the agent this document as context, then run one phase at a time and review each diff before moving on.

1. **Scaffold:** "Create a Next.js 15 App Router TypeScript project with Tailwind and shadcn/ui, Inter font, and the white SaaS design tokens from section 4. Build the layout, Header, Footer, Breadcrumbs, and a `buildMetadata` helper."
2. **Sanity:** "Add an embedded Sanity Studio at `/studio` with the schemas from section 5 and typed GROQ queries in `lib/sanity/queries.ts`."
3. **Silo pages & Homepage:** "Build all routes in section 2 with `generateStaticParams`, ISR, the homepage commercial layout from section 3, and the `ExpiredAlert`, `StickyCTA`, and `RelatedTutorials` components. Seed placeholder content for every URL in the architecture tree."
4. **SEO:** "Add next-seo JSON-LD components per page type, `sitemap.ts`, and `robots.ts`. Validate that every page has a unique title, description, and canonical."
5. **Supabase:** "Create migrations from section 6, server and browser clients, and the `/api/orders` and `/api/contact` routes with Zod validation, honeypot, and rate limiting."
6. **Resend:** "Build the four React Email templates and wire them into the order and contact flows, plus the renewal cron route protected by `CRON_SECRET`."
7. **Netlify and GitHub:** "Add `netlify.toml` from section 8, a GitHub Actions workflow for lint, typecheck, and build, and a README with deploy steps."
8. **QA:** "Crawl the built site and report broken links, missing alt text, and pages without JSON-LD."

## 11. Launch checklist

- Connect the GitHub repo to Netlify, add env vars, and enable deploy previews
- Point DNS for atlasproibofficiel.com and verify the Resend domain
- Configure the Sanity webhook to `/api/revalidate?secret=...`
- Test HTTPS enforcement and canonical headers with `curl -I`
- Submit `sitemap.xml` in Google Search Console and run URL Inspection on the money pages
- Check Core Web Vitals (optimize images, use `next/image`, avoid heavy client JS)
- Add a Mentions légales page, Politique de confidentialité, CGV, and a cookie banner
- Run a Rich Results Test on the Product, FAQ, and HowTo pages

I can also produce this as a `.md` file, or write the code for any single phase (for example the Sanity schemas or the order API route) if you'd like to start there.