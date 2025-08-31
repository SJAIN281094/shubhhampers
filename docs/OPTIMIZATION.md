# 🧪 AI LLM Testing Commands for Next.js App Router SEO/Performance Debugging

These testing commands are designed for AI agents or LLMs to analyze performance issues in a Next.js App Router-based site, particularly for resolving Lighthouse/GTmetrix errors like:

> **"The page took too long to load (No CPU idle period)"**

---

## 🔍 General Diagnostic

```bash
Analyze the Next.js App Router app for client-side hydration delays. Check if excessive "use client" components are blocking initial render.
```

```bash
List all top-level components inside the /app route that are marked with "use client". Flag any unnecessary client components.
```

```bash
Identify if there are any blocking API calls or dynamic imports in the default `page.tsx` or `layout.tsx` that delay TTFB or hydration.
```

---

## ⚙️ Rendering Strategy

```bash
Verify whether server components are used by default. Ensure no heavy logic or data fetching is happening in client components via useEffect.
```

```bash
Check if getStaticProps or generateStaticParams is implemented for all static pages and routes. Recommend where it can be added.
```

```bash
For each dynamic route in /app, suggest whether to use generateStaticParams or fetch in a Server Component.
```

---

## 📦 Bundle Size

```bash
Generate a list of JavaScript bundles larger than 100KB after compression. Recommend dynamic imports for each.
```

```bash
Review next.config.js and confirm if @next/bundle-analyzer is configured. If not, generate the config.
```

---

## 🖼️ Image Optimization

```bash
Check all images in the page and confirm if <Image> from next/image is used. Flag any <img> tags with large images.
```

```bash
List all images above 200KB and suggest compression or resize.
```

---

## 🔁 Hydration & CPU Load

```bash
Scan all client components for heavy useEffect or setInterval loops. Flag any long-running tasks or polling behavior.
```

```bash
Identify third-party scripts loaded in _app or layout.tsx. Recommend defer or lazyOnload loading using next/script.
```

```bash
Check if loading.tsx or error.tsx in the route tree contains blocking UI or infinite spinners.
```

---

## 🔧 Script & Asset Loading

```bash
List all external scripts included in the application. Suggest optimizations using <Script strategy="lazyOnload">.
```

```bash
Review layout.tsx for global stylesheets and font imports. Ensure fonts use preload or font-display: swap.
```

---

## 🧪 Testing Simulation

```bash
Simulate running Lighthouse on the homepage. Identify why it doesn’t reach an idle state. Output likely causes.
```

```bash
Emulate GTmetrix Waterfall and list all blocking or long network requests during the initial load.
```

---

> ✅ Use these commands as prompts for an LLM or intelligent agent that analyzes Next.js App Router performance issues.
