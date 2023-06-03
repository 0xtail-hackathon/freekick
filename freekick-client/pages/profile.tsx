import Head from "next/head";
import { WalletSelectorContextProvider } from "../contexts/WalletSelectorContext";
import Content from "../components/Content";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {

  return (
    <div>
      <Head>
        <title>Freekick - Profile</title>
      </Head>

      <div>
        <WalletSelectorContextProvider>
          <Link href="/profile-done">
            <Image
              src={"/page-profile.svg"}
              alt="Slide"
              quality={70}
              height={400}
              width={980}
              sizes="100vw"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Link>
        </WalletSelectorContextProvider>
      </div>
    </div>
  );
}
