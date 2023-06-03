import "../styles/globals.css";
import { AppProps } from "next/app";
import { WalletSelectorContextProvider } from "@/contexts/WalletSelectorContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WalletSelectorContextProvider>
            <Component {...pageProps} />
        </WalletSelectorContextProvider>
    );
}

export default MyApp;
