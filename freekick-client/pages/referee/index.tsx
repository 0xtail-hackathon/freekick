import Navbar from "@/components/Navbar";
import styles from "./referee.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import { useCallback, useState } from "react";
import Modal from "@/components/Modal";

export default function Referee() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const { selector, modal, accounts, accountId } = useWalletSelector();

    const onClickToggleModal = useCallback(() => {
        setOpenModal((prev) => !prev);
    }, [isOpenModal]);

    function handleOnClickConfirmButton() {
        console.log("Confirm!");
        setOpenModal((prev) => !prev);
        // TODO: transfer tokens to Referee
    }

    return (
        <div className={styles.container}>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <Image
                        src="/referee/modal_content.png"
                        alt="modal"
                        width={298}
                        height={492}
                    />
                    <button>Test</button>
                </Modal>
            )}
            <Navbar isHome={false} />
            <main className={styles.main}>
                <div className={styles.img_box}>
                    <Image
                        src="/referee/content.svg"
                        alt="content"
                        width={361}
                        height={598}
                    />
                </div>
                <button
                    className={styles.button}
                    onClick={handleOnClickConfirmButton}
                >
                    Confirm
                </button>
            </main>
        </div>
    );
}
