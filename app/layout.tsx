import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "@/resources/styles/App.css";
import "@/resources/styles/index.css";
import Navbar from "@/components/TopNav/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Navbar />
        <SessionProvider>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
