import "../styles/globals.css";
import { WalletSelectorContextProvider } from "../contexts/WalletSelectorContext";

function MyApp({ Component, pageProps }) {
  return <WalletSelectorContextProvider><Component {...pageProps} /></WalletSelectorContextProvider>;
}

export default MyApp;
