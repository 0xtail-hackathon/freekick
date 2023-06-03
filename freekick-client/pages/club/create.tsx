import Navbar from "@/components/Navbar";
import styles from "./create.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";

export default function Create() {
    const { selector, modal, accounts, accountId } = useWalletSelector();
    function handleOnClickCreateButton() {
        console.log("Create!");
        console.log(accountId);
    }

    return (
        <>
            <Navbar isHome={false} />
            <main className={styles.main}>
                <div className={styles.img_box}>
                    <Image
                        src="/club_create/content.svg"
                        alt="banner"
                        width={361}
                        height={598}
                    />
                </div>
                <button
                    className={styles.button}
                    onClick={handleOnClickCreateButton}
                >
                    Create My Club
                </button>
            </main>
        </>
    );
}
