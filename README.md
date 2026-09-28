# Atlas Pro ONTV Officiel (`atlasproibofficiel.com`)

Production-ready web platform for **Atlas Pro ONTV**, engineered for extreme search engine visibility, Core Web Vitals performance (Lighthouse ≥ 92), and high-conversion e-commerce sales.

---

## 1. Tech Stack & Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router, TypeScript) | SSG/ISR rendering, strict type safety (zero `any`) |
| **Styling** | Tailwind CSS v3+ | White SaaS design tokens (Indigo `#4F46E5`, Emerald `#10B981`, Slate) |
| **Database** | Supabase (PostgreSQL) | Orders, customers, tickets with Row Level Security (RLS) |
| **Emails** | Resend + React Email | Transactional emails (confirmation, activation, 7-day renewal reminder) |
| **SEO** | JSON-LD `@graph` + Semantic HTML | Product AggregateOffer, FAQPage, HowTo, SoftwareApplication |
| **Hosting** | Netlify | Edge functions, headers security, immutable asset caching |
| **CI/CD** | GitHub Actions | Automated typechecking (`tsc`), linting, and build verification |

---

## 2. Directory Structure

```
atlasproibofficiel/
├── .github/workflows/ci.yml          # Automated CI pipeline
├── app/
│   ├── layout.tsx                    # Root layout with Inter font & base metadata
│   ├── page.tsx                      # Transactional homepage targeting "Abonnement Atlas Pro"
│   ├── abonnements/
│   │   ├── page.tsx                  # Silo hub & comparison matrix
│   │   ├── [slug]/page.tsx           # Individual plans (12, 6, 3 mois)
│   │   └── renouvellement/page.tsx   # Subscription renewal portal
│   ├── telecharger/
│   │   ├── page.tsx                  # Download matrix hub
│   │   └── [slug]/page.tsx           # APK & app download landing pages
│   ├── tutoriels/
│   │   ├── page.tsx                  # Knowledgebase hub
│   │   └── [slug]/page.tsx           # Step-by-step guides with monetization bridge
│   ├── commander/[plan]/page.tsx     # Checkout order form
│   ├── merci/page.tsx                # Post-purchase confirmation
│   ├── api/
│   │   ├── orders/route.ts           # Order intake & customer upsert (rate-limited)
│   │   ├── contact/route.ts          # Support ticket intake (rate-limited)
│   │   └── cron/renewal-reminders/   # Automated renewal reminder cron
│   ├── robots.ts                     # Search engine crawler directives
│   └── sitemap.ts                    # Dynamic XML sitemap
├── components/
│   ├── layout/                       # Header, Footer, Breadcrumbs
│   ├── sections/                     # PricingCard, ExpiredAlert, StickyCTA, RelatedTutorials, CheckoutForm
│   ├── seo/                          # JsonLd @graph component
│   └── ui/                           # Button and UI primitives
├── emails/                           # React Email templates (Order, Activation, Renewal, Support)
├── lib/
│   ├── mock-data.ts                  # Typed data source for plans, apps, tutorials
│   ├── rate-limit.ts                 # Sliding-window IP rate limiter
│   ├── resend.ts                     # Resend email dispatcher
│   ├── schema.ts                     # Schema.org @graph builders
│   ├── seo.ts                        # buildMetadata() strict canonical helper
│   ├── utils.ts                      # Tailwind merge utility
│   └── supabase/                     # Server client and database types
├── supabase/migrations/              # SQL schema migrations
├── netlify.toml                      # Build and security headers configuration
└── .env.example                      # Environment variables template
```

---

## 3. Getting Started Locally

### Prerequisites
- Node.js 20+ (recommended Node 22+)
- npm 10+

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/atlasproibofficiel.git
cd atlasproibofficiel

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Environment Variables Configuration

Copy `.env.example` to `.env.local` and configure your credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain (`https://atlasproibofficiel.com`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Supabase public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role secret (required for server routes) |
| `RESEND_API_KEY` | Resend API key for transactional emails |
| `RESEND_FROM` | Sender address (e.g. `Atlas Pro <no-reply@mail.atlasproibofficiel.com>`) |
| `CRON_SECRET` | Secret token protecting `/api/cron/renewal-reminders` |

*Note: In development mode, if Supabase or Resend keys are omitted, the application runs gracefully in mock mode, logging actions to the console without crashing.*

---

## 5. Database Setup (Supabase)

1. Open your Supabase dashboard.
2. Navigate to the **SQL Editor**.
3. Run the migration script located in `supabase/migrations/20260928000000_init.sql`.
4. This creates `customers`, `orders`, and `tickets` tables with Row Level Security enabled.

---

## 6. Production Deployment (Netlify)

1. **Link Repository**: Connect the GitHub repository to your Netlify account.
2. **Build Settings**:
   - Build Command: `next build`
   - Publish Directory: `.next`
   - Netlify automatically detects `@netlify/plugin-nextjs`.
3. **Environment Variables**: Add the variables listed in section 4 in Netlify's *Site Settings > Environment Variables*.
4. **Custom Domain & DNS**:
   - Point your apex domain `atlasproibofficiel.com` and `www.atlasproibofficiel.com` to Netlify.
   - Provision free Let's Encrypt SSL/TLS.
5. **Email Subdomain (Resend)**:
   - Verify `mail.atlasproibofficiel.com` in Resend by adding the SPF, DKIM, and DMARC TXT records in your DNS registrar.

---

## 7. Quality & Validation Commands

```bash
# Verify TypeScript strict mode (zero errors)
npm run typecheck

# Run ESLint
npm run lint

# Compile production bundle
npm run build
```
