# AI Website-Building Instructions

## 1. Task

Build a polished, responsive personal portfolio website for **Vansh Mokani**.

The result must feel like a real student's personal portfolio, not a generic AI-generated landing page or a copied template. Use the information and constraints in this file as the source of truth. Do not invent missing projects, achievements, metrics, experience, or certificates.

## 2. Confirmed Personal Context

- **Name:** Vansh Mokani
- **Current position:** B.Tech Computer Science and Engineering (AI/ML) student
- **Current stage:** 3rd semester
- **Study period:** 2025-2029
- **Location:** Surat, India
- **University:** P P Savani University
- **Email:** vanshmokani152@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/vansh-mokani-273333382
- **GitHub:** https://github.com/Vanshmokani0904
- **Current direction:** Exploring the wider computer science field before choosing a specific AI/ML specialization

Vansh should not be presented as a senior engineer or as an expert in a specific AI/ML area. Use language such as “exploring,” “learning,” and “building a foundation.”

## 3. Personal Interests

Confirmed interests:

- Reading books
- Playing chess
- Solving Sudoku
- Listening to music

Do not add extra hobbies unless Vansh confirms them.

## 4. Available Assets

The source assets are in the `public/assets/` folder:

- `images/profile.png` — Vansh's profile photo
- `certificates/ai-for-everyone.pdf`
- `certificates/aws.pdf`
- `certificates/data.pdf`
- `certificates/generative-ai-for-everyone.pdf`
- `certificates/generative-ai.pdf`
- `certificates/github.pdf`
- `certificates/python.pdf`
- `certificates/web.pdf`

Use the real profile photo. Preserve the original PDFs as certificate links. Generate optimized PNG thumbnails only when needed for the certificate cards. Do not replace the profile photo with an AI-generated avatar or stock image.

## 5. Important Content Limitation

The GitHub and LinkedIn profiles should be checked before publishing project and certificate metadata. Use only verified information from those profiles or local files.

If projects cannot be verified:

- Show a clear empty-state message such as “Projects will be added as I continue building.”
- Or create a data placeholder that is easy to replace later.
- Do not create fake project cards.

If certificate issuer names or dates cannot be verified, show only the certificate title and a PDF link, or leave those fields out.

## 6. Required Website Sections

Build a single-page portfolio with these sections:

### Header

- Wordmark: `Vansh Mokani`
- Links: `Home`, `About`, `Projects`, `Certificates`, `Contact`
- Accessible light/dark mode toggle
- Responsive mobile menu
- Glass navigation container

### Hero

Include:

- Real image from `public/assets/images/profile.png`
- Label: `Computer Science Student`
- A concise, personal headline about exploring computer science and AI/ML
- A short paragraph in natural language
- `View projects` button
- `Contact me` button
- `Based in Surat, India`

Avoid generic phrases such as:

- “I craft digital experiences”
- “Passionate problem solver”
- “Turning ideas into reality”
- “Innovative solutions for the digital world”

### About

Include:

- A short biography
- B.Tech CSE (AI/ML), 2025-2029
- P P Savani University, if the final layout has enough space
- An honest explanation that Vansh is exploring computer science
- A small personal interests area

### Projects

Use verified GitHub projects only.

Every project entry may contain:

- Project name
- Short description
- Technologies
- GitHub link
- Live demo link, if verified
- Screenshot, if available
- Short learning note

Do not invent outcomes or statistics.

### Certificates

Use the local certificate PDFs after checking their contents.

Each certificate card may contain:

- Certificate title
- Issuer
- Date
- Thumbnail
- Link to the original PDF

Only show issuer and date when verified.

### Contact

Include:

- `vanshmokani152@gmail.com`
- LinkedIn link
- GitHub link
- A simple contact call-to-action

Do not create a complex form unless a working backend or mail service is intentionally added.

## 7. Visual Design

Use a **balanced professional** visual direction:

- Modern but calm
- Personal and credible
- Clean typography
- Restrained animation
- Good whitespace
- Strong readability
- No excessive decoration

Use glassmorphism for navigation, selected cards, panels, and buttons:

- Semi-transparent background
- `backdrop-filter: blur(...)`
- Subtle border
- Soft shadow
- Solid fallback for browsers without backdrop-filter

Do not use glassmorphism everywhere. Avoid nested transparent cards, unreadable text, excessive gradients, noisy backgrounds, and large decorative effects that compete with the content.

## 8. Theme System

Implement both light and dark themes.

Requirements:

- Use CSS custom properties for all theme colors
- Detect the system preference on the first visit
- Allow manual switching
- Persist the choice in `localStorage`
- Prevent a visible flash of the wrong theme where possible
- Add `aria-label` and `aria-pressed` to the toggle
- Provide visible keyboard focus
- Respect `prefers-reduced-motion`

Recommended storage key:

```text
portfolio-theme
```

The light theme should use a soft, bright neutral background. The dark theme should use a deep blue-gray background. Both themes must maintain accessible text contrast.

## 9. Recommended Technology

Use:

- Node.js
- React
- Vite
- JavaScript
- JSX
- HTML through semantic React markup
- CSS with custom properties

Recommended packages only when useful:

- `react-router-dom` for project detail routes
- `lucide-react` for icons
- `framer-motion` for restrained animations
- ESLint
- Prettier
- Vitest and React Testing Library

Do not add a UI framework just for convenience. Prefer custom CSS so the implementation can match the design accurately.

## 10. Recommended Structure

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
│  │  ├─ projects.js
│  │  └─ certificates.js
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

Keep projects and certificates in data files. This allows verified content to be updated without changing layout components.

## 11. Figma Workflow

If a Figma design file is provided:

1. Treat the approved Figma file as the visual source of truth.
2. Inspect desktop, tablet, and mobile frames in Dev Mode.
3. Inspect variables, component variants, spacing, typography, and responsive rules.
4. Export only assets that cannot be recreated in CSS.
5. Put optimized exports in `public/assets/`.
6. Recreate the design using React components and CSS, not screenshots of full screens.
7. Map Figma variables to CSS custom properties.
8. Map Figma component variants to React props or state.
9. Compare the running website with Figma at matching viewport sizes.

The Figma URL has not been supplied yet. Do not invent one or state that Figma has been imported until a real file is available.

## 12. Responsive Behavior

Use a mobile-first layout.

Test at:

- 320px
- 375px
- 768px
- 1024px
- 1440px

Requirements:

- No horizontal overflow
- Hero changes to one column on small screens
- Navigation becomes a usable mobile menu
- Cards remain readable at 320px
- Touch targets are at least 44px
- Images do not distort
- Section spacing scales smoothly

## 13. Accessibility

- Use semantic HTML landmarks
- Use one logical heading hierarchy
- Add useful alt text to the profile image and meaningful project images
- Mark decorative shapes as hidden from assistive technology
- Make every interactive control keyboard accessible
- Maintain visible focus styles
- Do not rely on color alone to communicate state
- Support reduced motion
- Keep contrast readable in both themes
- Use descriptive link text
- Make PDF links understandable without seeing the thumbnail

## 14. Implementation Process

Follow this order:

1. Inspect the existing workspace and preserve useful files.
2. Read `docs/details.md` and `docs/design.md`.
3. Verify the local assets and certificate files.
4. Set up or inspect the Node/Vite/React project.
5. Create the design tokens and global styles.
6. Build the page shell and navigation.
7. Implement the theme system.
8. Implement the hero, about, projects, certificates, and contact sections.
9. Add only verified content.
10. Optimize images and certificate previews.
11. Test responsive layouts and keyboard interaction.
12. Run lint, build, and relevant tests.
13. Fix errors caused by the implementation.
14. Review the final page for generic AI wording and remove it.

## 15. Definition of Done

The website is complete only when:

- It runs with the documented Node commands
- It builds successfully for production
- Light and dark modes work and persist after reload
- The profile photo is used correctly
- Verified links open correctly
- No fake projects, achievements, dates, metrics, or skills remain
- The layout works on mobile and desktop
- Glass surfaces remain readable in both themes
- Keyboard navigation works
- Reduced-motion preferences are respected
- Images and PDFs are loaded from valid paths
- There are no broken links or console errors
- The final copy sounds like Vansh, not like generic AI marketing text

## 16. Commands to Support

The project should provide these scripts where applicable:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

If a script is not configured, add it only when the required tool is already part of the project or is intentionally added to `package.json`.
