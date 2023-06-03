import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <Image
                src="/phone_top.png"
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
                    <button className={styles.signin_button}>Sign in</button>
                    <button className={styles.signup_button}>
                        Create Account
                    </button>
                </div>
            </nav>
        </>
    );
}
