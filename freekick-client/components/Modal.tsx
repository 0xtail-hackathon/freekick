import styles from "./Modal.module.css";
import { ReactNode } from "react";

interface ModalProps {
    onClickToggleModal: () => void;
    children?: ReactNode;
}

export default function Modal({ onClickToggleModal, children }: ModalProps) {
    return (
        <div className={styles.container}>
            <div className={styles.children}>{children}</div>
            <div className={styles.backdrop} onClick={onClickToggleModal} />
        </div>
    );
}
