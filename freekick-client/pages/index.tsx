import Head from "next/head";
import { useState } from "react";
import { WalletSelectorContextProvider } from "../contexts/WalletSelectorContext";
import Content from "../components/Content";

export default function Home() {
  const [showImport, setShowImport] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Freekick</title>
        <meta name="description" content="Play football with web3 friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4">
        <WalletSelectorContextProvider>
          <Content />
        </WalletSelectorContextProvider>
      </div>
    </div>
  );
}
