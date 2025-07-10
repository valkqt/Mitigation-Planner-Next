import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import "@/src/domain/styles/App.css";
import "@/src/domain/styles/index.css";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { Wrapper } from "@/components/Layout/Wrapper";

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
          {/* <Footer /> */}
        </Wrapper>
      </body>
    </html>
  );
}
