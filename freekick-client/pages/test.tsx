import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import styles from "./test.module.css";

export default function Test() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    async function handleOnClickTestButton() {
        console.log("Clicked");
        console.log(accountId);
    }

    const handleSignIn = () => {
        modal.show();
    };

    return (
        <div className={styles.buttons}>
            {selector.isSignedIn() ? (
                <button>{accountId}</button>
            ) : (
                <button onClick={handleSignIn}>Sign in</button>
            )}
            <button onClick={handleOnClickTestButton}>Test</button>
        </div>
    );
}
