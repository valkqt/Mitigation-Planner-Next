import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "@/resources/styles/App.css";
import "@/resources/styles/index.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <div className="wrapper">
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
