import Navbar from "@/components/Navbar";
import styles from "./create.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";

export default function Create() {
    function handleOnClickCreateButton() {
        window.location.href = "/club/";
    }

    return (
        <>
            <Navbar isHome={false} />
            <main className={styles.main}>
                <div className={styles.img_box}>
                    <Image
                        src="/club/create.svg"
                        alt="create"
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
