import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winsha Awards | Honoring Excellence In Business",
  description: "A premium award platform by Winsha Groups celebrating the visionary leaders and innovators of tomorrow.",
  icons: {
    icon: "/winsha-logo.jpg",
    apple: "/winsha-logo.jpg",
  },
  openGraph: {
    title: "Winsha Awards | Excellence In Business",
    description: "Honoring the leaders of Winsha Groups.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-primary text-accent selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
