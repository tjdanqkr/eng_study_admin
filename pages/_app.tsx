import { AppProps } from "next/app";
import { env } from "process";
import { Provider } from "react-redux";
import store, { wrapper } from "../app/store";
import "../styles/index.css";
import { ThemeProvider } from "next-themes";
import DarkModeButton from "../components/darkMode-button";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      {/* <DarkModeButton /> */}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
