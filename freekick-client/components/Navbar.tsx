import { useWalletSelector } from "@/contexts/WalletSelectorContext";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    const { selector, modal, accounts, accountId } = useWalletSelector();

    const handleSignIn = () => {
        modal.show();
    };

    const handleSignOut = async () => {
        const wallet = await selector.wallet();

        wallet.signOut().catch((err) => {
            console.log("Failed to sign out");
            console.error(err);
        });
    };

    return (
        <>
            <Image
                src="/phone_top.svg"
                alt="FreeKick Logo"
                className={styles.top}
                width={390}
                height={44}
                priority
            />
            <nav className={styles.nav}>
                <Image
                    src="/logo.svg"
                    alt="FreeKick Logo"
                    className={styles.logo}
                    width={45}
                    height={45}
                    priority
                />
                <div className={styles.buttons}>
                    {selector.isSignedIn() && (
                        <>
                            <button className={styles.account_button}>
                                {accountId}
                            </button>
                            <button
                                className={styles.signout_button}
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        </>
                    )}
                    {!selector.isSignedIn() && (
                        <>
                            <button
                                className={styles.signin_button}
                                onClick={handleSignIn}
                            >
                                Sign in
                            </button>
                            <button className={styles.signup_button}>
                                Create Account
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}
