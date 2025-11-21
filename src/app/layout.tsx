import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const InterFont = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "AiCE Community",
  description: "African Institute for Computing Excellence",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${InterFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
