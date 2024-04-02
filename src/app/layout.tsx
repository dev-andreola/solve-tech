import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolveTech",
  description:
    "Transformando suas necessidades em soluções tecnológicas eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        variables: { colorPrimary: "#4d7c0f" },
        elements: {},
      }}
    >
      <html lang="pt-br">
        <body className={font.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
