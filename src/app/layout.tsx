// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LoonTune",
  description:
    "A nature toy that brings the calming sound of the loon to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-marion-light">
        <header className="bg-marion text-white p-6 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/" className="text-white hover:text-marion-accent">
                LoonTune
              </Link>
            </h1>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-marion-accent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-marion-accent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/featured-on-tv"
                    className="text-white hover:text-marion-accent"
                  >
                    Featured on TV
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="bg-marion-accent text-white text-center p-4 border-t border-marion">
          © {new Date().getFullYear()} LoonTune. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
