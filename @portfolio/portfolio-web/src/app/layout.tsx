import { Literata, Montserrat, VT323 } from "next/font/google";
import type { Metadata } from "next";

import { Cursor } from "@/components/cursor";
import { Permalinks } from "@/components/permalinks";
import { ThemeProvider } from "@/components/theme-provider";
import { Title } from "@/components/title";

import "./globals.css";

const literata = Literata({
  variable: "--font-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse Sainz",
  description: "Jesse Sainz - Software Engineer and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${literata.variable} ${montserrat.variable} ${vt323.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Cursor />
          <div className="flex min-h-screen justify-between gap-16 overflow-x-hidden max-md:flex-col max-md:pl-20 lg:gap-32">
            <Title />
            <Permalinks />
            <div id="transition-container" className="flex max-w-4xl flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
