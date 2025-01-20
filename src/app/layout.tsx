import "./globals.css";
import Navbar from "../components/Navbar"; // Import the Navbar component

export const metadata = {
  title: "LoonTune - Experience the Call of the Loon",
  description:
    "A nature toy that brings the calming sound of the loon to life.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-marion-light">
        <Navbar /> {/* Uses the separate Navbar component */}
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="bg-marion-accent text-white text-center p-4 border-t border-marion">
          © {new Date().getFullYear()} LoonTune. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
