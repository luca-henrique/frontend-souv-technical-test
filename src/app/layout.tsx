import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "./providers/query-provider";
import { ShoppingListProvider } from "./providers/shopping-list-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping List",
  description: "Suav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <QueryProvider>
          <ShoppingListProvider>
            {children}
          </ShoppingListProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
