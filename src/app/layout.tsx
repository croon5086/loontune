// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LoonTune Clone",
  description: "A clone of my WordPress site built in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <Link href="/">LoonTune Clone</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 text-center p-4">
          © {new Date().getFullYear()} LoonTune Clone. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
