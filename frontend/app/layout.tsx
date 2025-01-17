"use client";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname hook
import "./globals.css";
import { ThemeProvider } from "./provider";
import Header from "@/components/Header"; // Import Header component
import Sidebar from "@/components/Sidebar"; // Import Sidebar component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get current route path

  // Define routes where Sidebar should not be displayed
  const isSidebarExcludedRoute = pathname === "/" || pathname === "/login" || pathname === "/signup";
  
  // Define route where Header should not be displayed (only "/")
  const isHeaderExcludedRoute = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Ensure light theme is always used
          enableSystem={false} // Disable system theme switching
          disableTransitionOnChange
        >
          {/* Header should be visible on all pages except for "/" */}
          {!isHeaderExcludedRoute && <Header />}

            {/* Sidebar should be visible on all pages except for "/", "/login", and "/signup" */}
            {!isSidebarExcludedRoute && <Sidebar />}
            {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}