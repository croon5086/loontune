Below is an updated version of your `README.md` that reflects the fact this is a commercial project with restricted contributions and requests that potential collaborators contact LoonTune for any inquiries:

---

````markdown
# LoonTune Clone

A clone of my WordPress site built with Next.js and Tailwind CSS for a commercial business.  
This project is proprietary and managed internally. For any questions or requests regarding contributions or modifications, please contact LoonTune directly.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/loontune.git
   cd loontune
   ```
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Development

To run the project locally in development mode, use:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.  
The project uses Next.js with its app directory, so modifications to files inside `src/app` will trigger hot-reloads.

## Building

To build the project and generate static files:

```bash
npm run build
```

This command builds the project. By default, the Next.js configuration is set up to support static exporting (outputting to an `out/` directory) for certain deployment scenarios. If you are deploying dynamically on Vercel, you can adjust or remove the `output: 'export'` setting in `next.config.ts`.

## Deployment

This project is deployed on [Vercel](https://vercel.com). Deployment is automatically triggered on pushes to the main branch.

For additional deployment-related configurations, please refer to the Vercel dashboard.

## Project Structure

```
loontune/
├── node_modules/             # Installed npm packages
├── public/                   # Static assets (e.g., images, favicon.ico)
├── src/
│   ├── app/                  # Application code
│   │   ├── globals.css       # Global styles and Tailwind imports
│   │   ├── layout.tsx        # Common layout for all pages (header, footer, navigation)
│   │   └── page.tsx          # Home page component
│   ├── about/                # Contains the About page component
│   │   └── page.tsx
│   └── blog/                 # Contains the Blog page components (listing & details)
│       └── page.tsx
├── .gitignore                # Files/Folders ignored by Git
├── next.config.ts            # Next.js configuration
├── package-lock.json         # NPM lock file
├── package.json              # NPM project manifest and scripts
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # Project documentation (this file)
└── tailwind.config.ts        # Tailwind CSS configuration
```

## License

[MIT](LICENSE)

## Contact

For any inquiries regarding this project, please get in touch with LoonTune at [contact@loontune.com](mailto:contact@loontune.com).  
All rights to this project are reserved.

```

```
