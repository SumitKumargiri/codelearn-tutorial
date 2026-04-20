import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/shared/layout/components/Footer";
import { Header } from "@/shared/layout/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "CodeLearn",
//   description: "Learn coding with modern courses",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://codelearn-tutorial.vercel.app"),

  title: {
    default: "CodeLearn",
    template: "%s | CodeLearn",
  },

  description: "Learn coding with modern courses like JavaScript, React, Node.js",
  keywords: ["learn coding", "javascript course", "react course"],

  authors: [{ name: "CodeLearn" }],
  creator: "CodeLearn",
  category: "education",

  verification: {
    google: "Yw703YaTPcio1la9cITb24Jr6g3gEgrqFEiS",
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "CodeLearn",
    description: "Learn coding with modern courses",
    url: "https://codelearn-tutorial.vercel.app/",
    siteName: "CodeLearn",
    images: [
      {
        url: "https://codelearn-tutorial.vercel.app/logo1.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeLearn",
    description: "Start learning coding today",
    images: ["https://codelearn-tutorial.vercel.app/logo1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
