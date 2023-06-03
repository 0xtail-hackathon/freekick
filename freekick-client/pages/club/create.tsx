import Navbar from "@/components/Navbar";
import styles from "./create.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Create() {
    const router = useRouter();

    function handleOnClickCreateButton() {
        router.push("/club/owner");
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
