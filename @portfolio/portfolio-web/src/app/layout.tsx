import type { Metadata } from "next";
import { Literata, Montserrat, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const literata = Literata({
  variable: "--font-serif",
});

const montserrat = Montserrat({
  variable: "--font-sans",
});

const vt323 = VT323({
  weight: ["400"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
