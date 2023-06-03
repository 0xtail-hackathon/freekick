import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import styles from "./test.module.css";
import Navbar from "@/components/Navbar";
import { getAccountDetail, getContractMetadata } from "@/near/methods";

export default function Test() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    const handleOnClick = async () => {
        const wallet = await selector.wallet();
        console.log(wallet);
    };

    async function handleOnClickTestButton() {
        const wallet = await selector.wallet();
        wallet.signAndSendTransaction({
            actions: [
                {
                    type: "FunctionCall",
                    params: {
                        methodName: "nft_mint",
                        args: {
                            token_id: "99",
                            metadata: {
                                title: "FreeKick",
                                description: "FreeKick first nft",
                                media: "https://bafkreigk3cn4njaw6hwjzc3orjynhnx2houw7ea4dnuz3x32hdcvlaivca.ipfs.nftstorage.link/",
                            },
                            receiver_id: accountId,
                        },
                        gas: "30000000000000",
                        deposit: "100000000000000000000000",
                    },
                },
            ],
        });
    }

    return (
        <>
            <Navbar isHome={true} />
            <div className={styles.buttons}>
                <button onClick={handleOnClick}>Click</button>
                <button onClick={handleOnClickTestButton}>Test</button>
            </div>
        </>
    );
}
