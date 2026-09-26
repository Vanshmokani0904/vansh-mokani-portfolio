# Portfolio Website Design Specification

## 1. Design Goal

Create a personal portfolio for **Vansh Mokani**, a B.Tech Computer Science and Engineering (AI/ML) student who is exploring the wider computer science field.

The website should feel:

- Personal and credible rather than AI-generated
- Clean, modern, and easy to scan
- Glassmorphic without sacrificing readability
- Calm and professional in light mode
- Focused and polished in dark mode
- Responsive across mobile, tablet, and desktop

Do not present Vansh as an experienced AI/ML engineer. The content should communicate curiosity, learning, and growth.

## 2. Figma Source and Handoff

The implementation should follow the approved Figma design as the source of truth for visual details.

### Required Figma preparation

Before development, organize the Figma file with:

- Pages: `Cover`, `Desktop`, `Tablet`, `Mobile`, `Components`, `Tokens`
- Named frames for each route and responsive breakpoint
- Auto Layout for sections, cards, navigation, and buttons
- Components and variants for buttons, cards, navigation, badges, and theme states
- Variables for colors, spacing, radii, typography, and elevation
- Export-ready assets with descriptive names
- Light and dark variants for every reusable component

### Import workflow

1. Open the approved Figma file in Dev Mode.
2. Inspect spacing, typography, colors, component variants, and responsive behavior.
3. Export only assets that cannot be recreated with CSS, such as the profile photo, certificate previews, logos, and illustrations.
4. Store exported assets in `public/assets/` using lowercase kebab-case names.
5. Recreate layout and styling with React components and CSS tokens instead of exporting whole screens as images.
6. Compare the running website with the Figma frames at the target viewport sizes.
7. Record any intentional implementation differences in the pull request or project notes.

The Figma URL and file key have not been provided yet. Do not invent a Figma link or claim that a design has already been imported.

## 3. Page Structure

Use a single-page portfolio initially, with optional project detail routes later.

### Header

- Wordmark: `Vansh Mokani`
- Navigation: `Home`, `About`, `Projects`, `Certificates`, `Contact`
- Theme toggle with accessible label and icon
- Mobile menu button
- Sticky or floating glass navigation container

### Hero

- Natural profile image from `public/assets/images/profile.png`
- Eyebrow: `Computer Science Student`
- Heading: a concise statement about exploring AI/ML and software
- Short supporting paragraph written in Vansh's natural voice
- Primary action: `View projects`
- Secondary action: `Contact me`
- Small status line such as `Based in Surat, India`

Avoid generic hero copy such as “I craft digital experiences that inspire.”

### About

- Short biography
- Education: B.Tech CSE (AI/ML), 2025-2029
- Optional university line: P P Savani University
- Current learning direction: exploring computer science and AI/ML
- Personal interests: reading, chess, Sudoku, and music

### Projects

Create project cards only from verified GitHub projects.

Each project card should support:

- Project name
- One-sentence description
- Technology tags
- Preview image or repository thumbnail
- GitHub link
- Optional live demo link
- Optional “What I learned” detail

Do not fabricate project metrics, roles, clients, or outcomes.

### Certificates

- Use certificates from `public/assets/certificates/` after verifying their metadata.
- Show a compact certificate grid or horizontal list.
- Use PNG previews for thumbnails when required.
- Keep the original PDF available through a `View certificate` link.
- Display the certificate title, issuer, and date only when verified.

Current certificate files:

- `public/assets/certificates/ai-for-everyone.pdf`
- `public/assets/certificates/aws.pdf`
- `public/assets/certificates/data.pdf`
- `public/assets/certificates/generative-ai-for-everyone.pdf`
- `public/assets/certificates/generative-ai.pdf`
- `public/assets/certificates/github.pdf`
- `public/assets/certificates/python.pdf`
- `public/assets/certificates/web.pdf`

### Contact

- Public email: `vanshmokani152@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vansh-mokani-273333382`
- GitHub: `https://github.com/Vanshmokani0904`
- Simple contact CTA; no unnecessary form fields

## 4. Visual Direction

### Glassmorphism rules

Use glass effects as a supporting layer, not as the entire visual language.

- Use translucent surfaces with `backdrop-filter: blur(...)`
- Add a subtle border to separate glass surfaces from the background
- Keep text on opaque or high-contrast areas where needed
- Use one or two background glow shapes, not a noisy gradient field
- Avoid stacking multiple translucent cards inside each other
- Never use glass effects behind long paragraphs
- Provide a solid fallback when `backdrop-filter` is unsupported

Suggested surface treatment:

```css
background: var(--color-surface-glass);
border: 1px solid var(--color-border-glass);
box-shadow: var(--shadow-glass);
backdrop-filter: blur(18px);
```

### Color tokens

Use CSS custom properties so the theme switch changes tokens rather than duplicating component styles.

```css
:root {
  color-scheme: light;
  --color-background: #f4f7fb;
  --color-background-elevated: #ffffff;
  --color-surface-glass: rgb(255 255 255 / 0.68);
  --color-surface-solid: #ffffff;
  --color-text-primary: #172033;
  --color-text-secondary: #5d687b;
  --color-border-glass: rgb(255 255 255 / 0.72);
  --color-accent: #4967d8;
  --color-accent-hover: #3854be;
  --color-focus: #275efe;
}

[data-theme="dark"] {
  color-scheme: dark;
  --color-background: #0c1220;
  --color-background-elevated: #131c2e;
  --color-surface-glass: rgb(21 31 51 / 0.68);
  --color-surface-solid: #172238;
  --color-text-primary: #edf2ff;
  --color-text-secondary: #aab5cb;
  --color-border-glass: rgb(255 255 255 / 0.14);
  --color-accent: #8ea5ff;
  --color-accent-hover: #adc0ff;
  --color-focus: #b7c6ff;
}
```

### Typography

- Use one highly readable sans-serif family for the interface.
- Use a slightly heavier display style for the hero heading, without excessive oversized text.
- Body text should be comfortable to read on mobile.
- Suggested scale: `0.875rem`, `1rem`, `1.125rem`, `1.5rem`, `2.25rem`, `clamp(2.5rem, 7vw, 5.5rem)`.
- Keep paragraphs to a readable measure of approximately 60-72 characters.

### Spacing and shape

- Use a 4px or 8px spacing rhythm.
- Section spacing: `clamp(4rem, 10vw, 9rem)`.
- Card radius: `1.25rem`.
- Button radius: `999px` for pill buttons or `0.75rem` for standard buttons.
- Keep borders subtle and consistent.

## 5. Theme Toggle

### Behavior

- Default to the user's system preference on first visit.
- Allow manual light/dark selection.
- Persist the selection in `localStorage` under `portfolio-theme`.
- Apply the theme before the first paint where possible to avoid flashing.
- Use `aria-label`, `aria-pressed`, and a visible focus state.
- Respect `prefers-reduced-motion`.

### Suggested implementation

```js
const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

document.documentElement.dataset.theme = savedTheme || systemTheme;
```

The React theme provider should own updates and persistence; components should consume theme state rather than directly modifying unrelated DOM elements.

## 6. Technology Stack

### Required

- **Node.js**: development runtime and package management
- **React**: component-based UI
- **Vite**: fast development server and production build
- **JavaScript**: application behavior and data
- **HTML**: semantic document structure through JSX
- **CSS**: responsive styling, design tokens, glass effects, and themes

### Recommended supporting tools

- `react-router-dom` if project detail routes are added
- `lucide-react` for consistent interface icons
- `framer-motion` only for restrained, purposeful motion
- ESLint for JavaScript and React checks
- Prettier for consistent formatting
- Vitest and React Testing Library for component behavior

Avoid adding a UI framework unless the Figma design requires it. Custom CSS keeps the visual system precise and prevents the portfolio from looking like a template.

## 7. Suggested Project Structure

```text
portfolio/
├─ public/
│  └─ assets/
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ navigation/
│  │  ├─ sections/
│  │  └─ ui/
│  ├─ data/
│  │  ├─ certificates.js
│  │  └─ projects.js
│  ├─ hooks/
│  │  └─ useTheme.js
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ globals.css
│  │  └─ utilities.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

Keep content in data modules so verified projects and certificates can be updated without rewriting layout components.

## 8. Responsive Requirements

- Mobile-first CSS
- Breakpoints should follow layout needs, not device names
- Navigation collapses into a menu on narrow screens
- Hero becomes a single-column layout on mobile
- Project and certificate cards must remain readable at 320px width
- Touch targets must be at least 44px
- Avoid horizontal overflow
- Test at approximately 320px, 768px, 1024px, and 1440px widths

## 9. Accessibility and Quality

- Use semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`
- Maintain visible keyboard focus
- Meet WCAG AA contrast where practical; do not rely on blur for contrast
- Add alt text for the profile image and meaningful project images
- Mark decorative gradients and glows as hidden from assistive technology
- Ensure all interactive elements have accessible names
- Use reduced-motion styles for transitions and reveal animations
- Optimize images and lazy-load below-the-fold media
- Provide PDF links as accessible text links, not image-only controls

## 10. Figma-to-Code Acceptance Checklist

- [ ] The approved Figma URL is recorded
- [ ] Desktop, tablet, and mobile frames exist
- [ ] Figma variables map to CSS custom properties
- [ ] Component variants map to React props or state
- [ ] Exported assets have been optimized and named consistently
- [ ] Light and dark screenshots match the intended Figma frames
- [ ] Glass surfaces remain readable over both themes
- [ ] Theme selection persists after reload
- [ ] Project and certificate content is verified
- [ ] No placeholder copy or fabricated achievements remain
- [ ] Keyboard navigation, focus states, and reduced motion are tested
