import Navbar from "@/components/Navbar";
import styles from "./referee.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import { useCallback, useState } from "react";
import Modal from "@/components/Modal";
import Seo from "@/components/Seo";

export default function Referee() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const { selector, modal, accounts, accountId } = useWalletSelector();

    const onClickToggleModal = useCallback(() => {
        setOpenModal((prev) => !prev);
    }, [isOpenModal]);

    async function handleOnClickConfirmButton() {
        // await storageDeposit();
        await tokenTransfer();
    }

    function handleOnClickImg() {
        setOpenModal((prev) => !prev);
    }

    async function storageDeposit() {
        const wallet = await selector.wallet();
        wallet.signAndSendTransaction({
            actions: [
                {
                    type: "FunctionCall",
                    params: {
                        methodName: "storage_deposit",
                        args: {
                            account_id: "kick-coina.testnet",
                        },
                        gas: "30000000000000",
                        deposit: "100000000000000000000000",
                    },
                },
            ],
        });
    }

    async function tokenTransfer() {
        const wallet = await selector.wallet();
        wallet.signAndSendTransaction({
            actions: [
                {
                    type: "FunctionCall",
                    params: {
                        methodName: "ft_transfer",
                        args: {
                            receiver_id: "kick-coina.testnet",
                            amount: "120000000000000000000",
                            memo: "Referee Reward",
                        },
                        gas: "30000000000000",
                        deposit: "1",
                    },
                },
            ],
        });
    }

    return (
        <div className={styles.container}>
            <Seo title="Referee" />
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <Image
                        src="/referee/modal_content.png"
                        alt="modal"
                        width={298}
                        height={492}
                    />
                </Modal>
            )}
            <Navbar isHome={false} />
            <main className={styles.main}>
                <div className={styles.img_box} onClick={handleOnClickImg}>
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
