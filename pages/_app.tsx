// Providers
import "react-toastify/dist/ReactToastify.css";
// My CSS
import "../styles/globals.css";
// Next
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
