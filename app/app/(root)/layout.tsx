import type { Metadata } from "next";
import "../../styles/globals.css";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import NavBar from "@/components/shared/NavBar";

export const metadata: Metadata = {
  title: "Waver UI",
  description: "Waver UI is an custom design UI Component platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
