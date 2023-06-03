import { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

interface MyProps {
    children?: ReactNode;
}

export default function Layout({ children }: MyProps) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </>
    );
}
