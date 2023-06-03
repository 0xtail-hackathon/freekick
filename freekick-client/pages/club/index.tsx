import Navbar from "@/components/Navbar";
import styles from "./club.module.css";
import Image from "next/image";
import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import { CLUB_URL_1 } from "@/constants";

export default function Club() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    function handleOnClickMintButton() {
        nftMint();
    }

    async function nftMint() {
        const wallet = await selector.wallet();
        wallet
            .signAndSendTransaction({
                actions: [
                    {
                        type: "FunctionCall",
                        params: {
                            methodName: "nft_mint",
                            args: {
                                token_id: `${new Date().getTime()}`,
                                metadata: {
                                    title: "FreeKick",
                                    description: "FreeKick first nft",
                                    media: CLUB_URL_1,
                                },
                                receiver_id: accountId,
                            },
                            gas: "30000000000000",
                            deposit: "100000000000000000000000",
                        },
                    },
                ],
            })
            .then(() => {
                window.location.href = "/home";
            });
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
