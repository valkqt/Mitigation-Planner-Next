import React, { ReactNode } from "react";
import Header from "./Header/Header";
import { globalStyle, layoutStyle } from "./LayoutStyles";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
    <style jsx global>
      {globalStyle}
    </style>
  </div>
);

export default Layout;
