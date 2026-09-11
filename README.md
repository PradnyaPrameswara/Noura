# Pradnya � Modern Creative Agency & Portfolio

A modern, high-performance website rebuilt from the ground up using **Astro 5**, **React 19**, **Tailwind CSS**, and **Radix-Free ShadCN UI**. Completely decoupled from legacy runtimes, jQuery polyfills, and Webflow client-side scripts.

---

## ? Tech Stack & Architecture

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Interactive UI**: [React 19](https://react.dev/) (Islands architecture)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom design tokens
- **Components**: Accessible Radix-Free ShadCN UI primitives
- **Typography**: BDO Grotesk & Roboto Mono
- **Quality Gates**: [Oxlint](https://oxc.rs/) with vendored [anti-slop](https://github.com/dmmulroy/anti-slop) rules
- **Code Intelligence**: [Lexa](https://github.com/anvia-hq/lexa) & [CodeDB](https://github.com/justrach/codedb)
- **Agent Workflows**: [Addy Osmani's Agent Skills](https://github.com/addyosmani/agent-skills) (25 SDLC workflows)

---

## ?? Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+ or v22+
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start Astro development server
npm run dev
```

### Production Build

```bash
# Build static production assets
npm run build

# Preview build locally
npm run preview
```

### Code Quality & Linting

```bash
# Run Oxlint with opinionated anti-slop rules
npm run lint:oxlint
```

---

## ?? Project Structure

```
+-- .agents/               # Installed Agent Skills & SDLC workflows
+-- public/                # Static local assets (100% self-contained, zero CDN)
|   +-- favicon.svg        # 'P' brand favicon
|   +-- logo.svg           # 'P' brand logo
|   +-- fonts/             # Self-hosted fonts (BDOGrotesk, RobotoMono)
|   +-- images/            # Categorized local image assets
|   |   +-- about/         # Studio showcase & team visuals
|   |   +-- blog/          # Article covers & mockups
|   |   +-- brands/        # Partner brand SVG logos
|   |   +-- hero/          # Hero scatter collage images
|   |   +-- social/        # Social media vector icons
|   |   +-- works/         # Case study visuals & screenshots
|   |   +-- og-image.png   # OpenGraph social preview image
|   +-- videos/            # Ambient videos & poster frames
+-- src/
�   +-- components/
�   �   +-- about/         # 3D interactive cube & about components
�   �   +-- blog/          # Blog cards & newsletter forms
�   �   +-- common/        # Navbar (rolling text hover), MobileNav, Footer
�   �   +-- contact/       # Contact form & FAQ accordion
�   �   +-- home/          # Hero, Marquee, Sticky sections, Work lists
�   �   +-- ui/            # Radix-Free ShadCN primitives (Button, Accordion, Badge, etc.)
�   �   +-- works/         # Case study components
�   +-- content/           # Astro Content Collections (works & blog)
�   +-- layouts/           # BaseLayout & PageLayout
�   +-- lib/               # Utility functions (cn helper)
�   +-- pages/             # 15 Astro static routes
�   +-- styles/            # Global styles, fonts, and custom CSS utilities
+-- tools/
�   +-- oxlint/anti-slop/  # Vendored anti-slop rules & plugin
+-- astro.config.mjs       # Astro configuration
+-- lsp-ai.json            # LSP-AI language server configuration
+-- oxlint.config.mjs      # Oxlint anti-slop configuration
+-- tailwind.config.mjs    # Tailwind theme configuration
```

---

## ?? License

MIT License.
