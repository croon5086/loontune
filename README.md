````
# LoonTune Clone

A clone of my WordPress site built with Next.js and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/loontune.git
   cd loontune
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

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building

To build the project and generate static files:

```bash
npm run build
```

This command will build the project and export your site as static HTML into the `out/` folder.

## Deployment to GitHub Pages

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy:**

   ```bash
   npm run deploy
   ```

This will deploy your static site to the `gh-pages` branch of your repository.

> **Note:** GitHub Pages works best for public repositories. If your repository is private, you may need to upgrade your GitHub plan or use a different hosting solution.

## Project Structure

```
loontune/
├── node_modules/           # Installed npm packages
├── public/                 # Static assets (e.g., images, favicon.ico)
├── src/
│   ├── app/                # Application code
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Common layout for all pages
│   │   └── page.tsx        # Homepage
│   ├── about/              # About page folder
│   │   └── page.tsx
│   └── blog/               # Blog page folder
│       └── page.tsx
├── .gitignore              # Files/Folders ignored by Git
├── next.config.ts          # Next.js configuration
├── package-lock.json       # NPM lock file
├── package.json            # NPM project manifest
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Project documentation
└── tailwind.config.ts      # Tailwind CSS configuration
```

## License

[MIT](LICENSE)

```

```
