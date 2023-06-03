import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.newbie}>
                <h2 className={styles.h2}>Hi, Newbie</h2>
                <div className={styles.newbie_img}>
                    <img src="/home/freekick.png" alt="FreeKick picture" />
                </div>
            </div>
            <div className={styles.club_list}>
                <div className={styles.club_list_text}>
                    <h3 className={styles.h3}>Club List</h3>
                    <h5 className={styles.h5}>{"Details >"}</h5>
                </div>
                <div className={styles.location_img}>
                    <img src="/home/location.png" alt="location picture" />
                </div>
            </div>

            <div className={styles.slider_box}>
                {/* card 1 */}
                <div className={styles.card}>
                    <div className={styles.card_header}>
                        <div className={styles.card_header_logo}>
                            <img src="/home/club_logo_1.png" alt="club logo" />
                        </div>
                        <div className={styles.card_header_button}>
                            <img src="/home/arrow.png" alt="arrow" />
                        </div>
                    </div>
                    <div className={styles.card_body}>
                        <img
                            src="/home/club_card_body_1.png"
                            alt="club card description"
                        />
                    </div>
                </div>

                {/* card 2 */}
                <div className={styles.card}>
                    <div className={styles.card_header}>
                        <div className={styles.card_header_logo}>
                            <img src="/home/club_logo_2.png" alt="club logo" />
                        </div>
                        <div className={styles.card_header_button}>
                            <img src="/home/arrow.png" alt="arrow" />
                        </div>
                    </div>
                    <div className={styles.card_body}>
                        <img
                            src="/home/club_card_body_2.png"
                            alt="club card description"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <img src="/home/footer.png" alt="footer" />
            </div>
        </div>
    );
}
