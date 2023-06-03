import Head from "next/head";
import { WalletSelectorContextProvider } from "../contexts/WalletSelectorContext";
import Content from "../components/Content";

export default function Profile() {

  return (
    <div>
      <Head>
        <title>Freekick - Profile</title>
      </Head>

      <div className="container mx-auto px-4">
        <WalletSelectorContextProvider>
          <Content />
        </WalletSelectorContextProvider>
      </div>
    </div>
  );
}
