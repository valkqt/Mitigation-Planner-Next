import { ReactNode, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
