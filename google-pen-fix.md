Listed directory atlasproibofficiel
Viewed blueprint.md:1-100
Listed directory app
Viewed robots.ts:1-73
Viewed sitemap.ts:1-76
Viewed seo.ts:1-85
Viewed layout.tsx:1-61
Viewed page.tsx:1-120
Viewed page.tsx:121-250
Viewed schema.ts:1-253
Viewed schema-merchant.ts:1-50
Listed directory abonnements
Viewed page.tsx:1-80
Viewed mock-data.ts:1-100
Listed directory commander
Viewed page.tsx:1-60
Viewed page.tsx:1-60
Viewed page.tsx:1-70
Viewed schema-content.ts:1-56
Viewed page.tsx:1-70
Viewed page.tsx:1-60
Listed directory public
Viewed page.tsx:1-60
Searched for "rating"
Searched for "avis"
Viewed entities.json:1-21
Viewed next.config.ts:1-18
Viewed Footer.tsx:1-60
Viewed Footer.tsx:61-129
Viewed globals.css:1-21
Searched for "apkUrl"

[AGENT: Antigravity | PHASE: Audit | ACTION: SEO & GSC penalty risk audit | STATUS: pass]

After a thorough forensic audit of your project files, routing structure, metadata, and structured data, here are the critical risks and exact things you must avoid to prevent **Google Search Console (GSC) manual actions, security flags, and algorithmic demotions**:

---

### 1. Avoid the "Robots.txt vs. Noindex" Conflict (GSC Indexing Trap)
* **The Issue Found in Code:**
  In [app/robots.ts](file:///d:/atlasproibofficiel/app/robots.ts#L42-L49), you have blocked paths:
  ```ts
  const PROTECTED_PATHS = ["/api/", "/commander", "/commander/", "/merci", "/studio/", "/*?*"];
  ```
  However, in [app/commander/[plan]/page.tsx](file:///d:/atlasproibofficiel/app/commander/%5Bplan%5D/page.tsx#L39) and [app/merci/page.tsx](file:///d:/atlasproibofficiel/app/merci/page.tsx#L12), you set:
  ```ts
  noIndex: true
  ```
* **Why GSC Flags This:**
  Googlebot **cannot read the `<meta name="robots" content="noindex">` tag if the URL is blocked in `robots.txt`**. If any internal link (or backlink) points to `/commander/...` or `/merci`, Google will index the URL regardless and trigger the warning: **"Indexed, though blocked by robots.txt"**.
* **What to Avoid:**
  * Do not combine `robots.txt disallow` with `noindex`. If you want Google to see `noindex` and keep a page out of the index, **allow it in robots.txt** so Googlebot can crawl and respect the `noindex` directive.
  * Avoid `disallow: "/*?*"` in `robots.txt` as it blocks Googlebot from verifying canonical tags whenever users or campaigns share URLs with query parameters (e.g. UTM tags).

---

### 2. Avoid Schema Markup Violations & Misleading Merchant Data
* **The Issue Found in Code:**
  In [lib/schema-merchant.ts](file:///d:/atlasproibofficiel/lib/schema-merchant.ts#L14-L49), you have configured physical delivery and return schemas for digital subscriptions:
  ```ts
  unitCode: "MIN" // Line 37: Invalid UN/CEFACT code for shipping in Google Merchant
  returnMethod: "https://schema.org/ReturnByMail" // Line 47: Physical postal return for an emailed digital IPTV code!
  ```
  In [lib/schema-content.ts](file:///d:/atlasproibofficiel/lib/schema-content.ts#L13), for Apple App Store links:
  ```ts
  downloadUrl: `${SITE_URL}${app.apkUrl}` 
  // Yields: "https://atlasproibofficiel.comhttps://apps.apple.com" (Malformed URL error)
  ```
* **Why GSC Flags This:**
  Google Search Console strictly validates Rich Results and Merchant Listings. Falsifying physical shipping/returns for digital activation codes or submitting malformed URLs triggers:
  * **"Invalid value in field 'returnMethod' / 'unitCode'"**
  * **Manual Action: Structured Data Issue** (if Google deems the structured markup deceptive or non-compliant with Schema.org guidelines).
* **What to Avoid:**
  * Do not include physical `shippingDetails` or `ReturnByMail` for digital activation codes.
  * Ensure all `downloadUrl` properties check if the link is already an external URL (`http/https`) before prefixing `SITE_URL`.

---

### 3. Avoid Unwanted Software / Security Penalties (Broken or Unsigned APKs)
* **The Issue Found in Code:**
  In [lib/mock-data.ts](file:///d:/atlasproibofficiel/lib/mock-data.ts#L253-L329), your download links point to local files:
  * `/downloads/atlas-pro-ontv-v4.2.0.apk`
  * `/downloads/atlas-pro-windows-setup.exe`
  
  Yet, your [public/](file:///d:/atlasproibofficiel/public) directory contains **no `/downloads` folder and no APK/EXE binaries**.
* **Why GSC Flags This:**
  * If Googlebot crawls download links and hits 404s, it hurts crawl trust.
  * If you later upload raw `.apk` and `.exe` files directly without trusted code-signing certificates, Google Safe Browsing / Google Search Console will flag your domain with a **Security Issue: "Deceptive site ahead / Harmful program detected"**, causing a red security warning screen in Chrome.
* **What to Avoid:**
  * Avoid self-hosting untrusted `.exe` / `.apk` files directly if they are not cryptographically signed.
  * Instead, provide clear installation tutorials using official store links or verified package installers.

---

### 4. Avoid Site-Wide 404s on High-Trust Pages (E-E-A-T Demotion)
* **The Issue Found in Code:**
  In [components/layout/Footer.tsx](file:///d:/atlasproibofficiel/components/layout/Footer.tsx#L101-L113), you have links to:
  * `/mentions-legales`
  * `/politique-de-confidentialite`
  * `/conditions-generales-de-vente`
  
  And in [lib/schema.ts](file:///d:/atlasproibofficiel/lib/schema.ts#L34):
  * `url: "${SITE_URL}/contact"`
  
  **None of these routes currently exist** in your [app/](file:///d:/atlasproibofficiel/app) folder (your contact page is `/ouvrir-ticket`).
* **Why GSC Flags This:**
  * Googlebot will encounter 404 errors on every page crawl.
  * For commercial sites, missing legal identification, terms of sale, and privacy policies severely hurts Google’s quality evaluation (Google Quality Rater Guidelines / Helpful Content System), leading to lower indexing priority.
* **What to Avoid:**
  * Never leave legal and contact links broken in the global layout.
  * Create the actual pages (`app/mentions-legales/page.tsx`, `app/politique-de-confidentialite/page.tsx`, `app/conditions-generales-de-vente/page.tsx`) and point contact schema to `/ouvrir-ticket`.

---

### 5. Avoid Keyword Stuffing & Over-Optimization
* **The Issue Found in Code:**
  In [app/page.tsx](file:///d:/atlasproibofficiel/app/page.tsx#L83-L89):
  ```html
  <h1>
    Abonnement Atlas Pro ONTV Officiel : Serveur IPTV Atlas & Atlas IPTV en France
  </h1>
  ```
  The single opening paragraph repeats:
  `"Atlas Pro France"`, `"IPTV Atlas"`, `"abonnement Atlas Pro ONTV"`, and `"Atlas IPTV"`.
* **Why GSC Flags This:**
  Under Google's **Spam Policies on Keyword Stuffing**, unnatural keyword repetition across H1s, titles, and paragraphs triggers algorithmic filters that prevent ranking or cause rank drops.
* **What to Avoid:**
  * Avoid repeating identical keyword permutations in the same H1 and meta title. Keep titles natural and focused on user benefit rather than exact-match keyword combinations.

---

### 6. Avoid Doorway Pages (Thin / Duplicate Content)
* **The Issue Found in Code:**
  You have individual pages for plans (`/abonnements/atlas-pro-12-mois`, `/abonnements/atlas-pro-6-mois`, `/abonnements/atlas-pro-3-mois`, `/abonnements/multi-ecran`, `/abonnements/renouvellement`).
* **Why GSC Flags This:**
  If the only difference between the 3-month, 6-month, and 12-month pages is the price figure and duration while sharing the exact same feature list, Google treats them as **Doorway Pages** or **Duplicate Content**, resulting in GSC flagging:
  * *"Crawled - currently not indexed"*
  * *"Discovered - currently not indexed"*
* **What to Avoid:**
  * Do not create near-identical thin pages just to target specific long-tail queries.
  * Ensure each plan page provides substantial unique content (e.g. detailed comparison of who the plan is best for, specific FAQs, and distinct use cases).

---

### 7. Avoid Copyright / DMCA Infringement Triggers (Google Pirate Update)
* **The Domain Risk:**
  Your site targets IPTV subscriptions (`Abonnement Atlas Pro`, `IPTV France`). 
* **Why GSC Flags This:**
  If broadcast copyright holders (e.g., Canal+, beIN Sports, UEFA) identify stream reselling or unlicensed channel distribution on the site, they submit DMCA notices directly to Google. 
  * Google reports these in Search Console as **DMCA Takedown Notices**.
  * Sites with accumulating DMCA strikes are penalized site-wide under the **Google Pirate Algorithm**, dropping all search visibility permanently.
* **What to Avoid:**
  * Avoid publishing specific copyrighted TV channel logos, proprietary broadcaster screenshots, or lists of pay-TV brands (e.g., beIN, Canal+, RMC) anywhere on the landing pages or schema.
  * Position the service around technical application compatibility, software, and middleware rather than illegal rebroadcast claims.