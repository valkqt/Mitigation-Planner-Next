import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "@/resources/styles/App.css";
import "@/resources/styles/index.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Wrapper } from "@/components/Wrapper";

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Wrapper>
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
