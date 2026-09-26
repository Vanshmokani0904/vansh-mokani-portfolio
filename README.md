# Vansh Mokani — Personal Portfolio

An original, responsive personal portfolio for **Vansh Mokani**, a B.Tech Computer Science and Engineering (AI/ML) student based in Surat, India.

The website presents Vansh's education, learning direction, interests, certificates, and contact links in a vCard-inspired interface. It is intentionally honest about being a work in progress: verified projects will be added as they are built.

## Preview

The portfolio can be run locally with the commands below:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Portfolio Preview

Full-page PDF snapshots of the portfolio in desktop and mobile responsive layouts.

| Version | PDF |
| --- | --- |
| 🖥️ PC / Desktop | [View PC Portfolio PDF](./portfolio-PC.pdf) |
| 📱 Mobile | [View Mobile Portfolio PDF](./portfolio-Mobile.pdf) |

## Features

- Responsive layout for desktop, tablet, and mobile
- vCard-inspired profile sidebar
- Expandable contact details
- Tabbed About, Resume, Portfolio, Notes, and Contact sections
- Light and dark theme toggle
- Theme preference saved in `localStorage`
- Accessible contact form using the visitor's email client
- Certificate PDF archive
- GitHub, LinkedIn, and email links
- Real profile photo from the local assets
- Keyboard focus states
- Reduced-motion support
- No fabricated projects, achievements, metrics, or experience

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js
- Vite for local development and production builds

The website does not use React, a UI framework, a database, or a JSON content file.

## Project Structure

```text
vansh-mokani-portfolio/
├── public/
│   └── assets/
│       ├── certificates/
│       └── images/
│           └── profile.png
├── docs/
│   ├── design.md
│   ├── details.md
│   └── instruction.md
├── index.html
├── script.js
├── styles.css
├── package.json
└── README.md
```

## Local Development

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Personal Information

- **Name:** Vansh Mokani
- **Role:** B.Tech Computer Science and Engineering (AI/ML) student
- **Location:** Surat, India
- **Study period:** 2025-2029
- **University:** P P Savani University
- **Email:** [vanshmokani152@gmail.com](mailto:vanshmokani152@gmail.com)
- **GitHub:** [github.com/Vanshmokani0904](https://github.com/Vanshmokani0904)
- **LinkedIn:** [Vansh Mokani](https://www.linkedin.com/in/vansh-mokani-273333382)

## Content Guidelines

This portfolio is designed to grow with Vansh's learning journey.

- Add projects only after verifying their repository details.
- Add certificate issuers and dates only after checking the original certificates.
- Do not add invented metrics, clients, roles, or achievements.
- Keep the writing personal and specific instead of using generic marketing phrases.
- Preserve the original PDF certificates in `public/assets/certificates/`.
- Replace the profile image only with an approved personal image.

## Adding a Verified Project

When a project is ready to publish:

1. Verify the repository name and URL.
2. Add a short description in Vansh's own words.
3. List only technologies actually used.
4. Add a screenshot or demo only if it is available.
5. Explain one meaningful thing learned from the project.
6. Add the project to the Portfolio section without inventing outcomes.

## Design Notes

The interface uses a dark, card-based vCard layout with a restrained lime accent. It is inspired by the usability pattern of personal vCard portfolios, but the implementation, content, styling, and assets are original to this project.

The design documents in [`docs/`](./docs/) explain:

- [`design.md`](./docs/design.md) — visual direction and design system
- [`details.md`](./docs/details.md) — confirmed personal information and available assets
- [`instruction.md`](./docs/instruction.md) — implementation instructions for AI-assisted development

## Deployment

This is a static website and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

For GitHub Pages, configure the repository to deploy the built static files using the preferred Pages workflow or static hosting configuration.

## License

The portfolio source code is available for personal and educational use. Vansh's profile photo, certificates, personal information, and other personal assets may not be reused without permission.
