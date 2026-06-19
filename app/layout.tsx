import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PETLY - Trusted Pet Marketplace",
  description: "Find your perfect companion - verified pets and accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}