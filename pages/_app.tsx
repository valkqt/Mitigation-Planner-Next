import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
// import Encounter from "../components/Encounter/Encounter";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
