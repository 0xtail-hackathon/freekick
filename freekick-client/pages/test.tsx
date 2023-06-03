import styles from "./test.module.css";

export default function Test() {
    async function handleOnClickTestButton() {
        console.log("Clicked");
    }

    return (
        <div className={styles.buttons}>
            <button onClick={handleOnClickTestButton}>Test</button>
        </div>
    );
}
