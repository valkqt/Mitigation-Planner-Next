import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
// import Encounter from "../components/Encounter/Encounter";
import "./index.css";
import "./app.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
