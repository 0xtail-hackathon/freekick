import Navbar from "@/components/Navbar";
import styles from "./club.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";

export default function Club() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    function handleOnClickMintButton() {
        console.log("Confirm!");
        // TODO: Mint Player's NFT
    }

    return (
        <div className={styles.container}>
            <Navbar isHome={false} />
            <main className={styles.main}>
                <div className={styles.img_box}>
                    <Image
                        src="/club/content.png"
                        alt="content"
                        width={361}
                        height={598}
                    />
                </div>
                <button
                    className={styles.button}
                    onClick={handleOnClickMintButton}
                >
                    Mint My Membership
                </button>
            </main>
        </div>
    );
}
