import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <nav>Sono il layout</nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
