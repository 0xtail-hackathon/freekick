import { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";
import { WalletSelectorContextProvider } from "@/contexts/WalletSelectorContext";

interface MyProps {
    children?: ReactNode;
}

export default function Layout({ children }: MyProps) {
    return (
        <WalletSelectorContextProvider>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </WalletSelectorContextProvider>
    );
}
