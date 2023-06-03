import styles from "./home.module.css";
import Slider from "@/components/Slider";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.newbie}>
                    <h2 className={styles.h2}>Hi, Newbie</h2>
                    <div className={styles.newbie_img}>
                        <img src="/home/freekick.svg" alt="FreeKick picture" />
                    </div>
                </div>
                <div className={styles.club_list}>
                    <div className={styles.club_list_text}>
                        <h3 className={styles.h3}>Club List</h3>
                        <h5 className={styles.h5}>{"Details >"}</h5>
                    </div>
                    <div className={styles.location_img}>
                        <img src="/home/location.svg" alt="location picture" />
                    </div>
                </div>

                <div className={styles.slider_box}>
                    <Slider
                        slides={[
                            { src: "/home/club_card_1.svg" },
                            { src: "/home/club_card_2.svg" },
                            { src: "/home/club_card_1.svg" },
                            { src: "/home/club_card_2.svg" },
                            { src: "/home/club_card_1.svg" },
                        ]}
                        paginate={false}
                        slidesPerView={1}
                    />
                    {/* card 1 */}
                    {/* <div className={styles.card}>
                        <div className={styles.card_header}>
                            <div className={styles.card_header_logo}>
                                <img
                                    src="/home/club_logo_1.svg"
                                    alt="club logo"
                                />
                            </div>
                            <div className={styles.card_header_button}>
                                <img src="/home/arrow.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className={styles.card_body}>
                            <img
                                src="/home/club_card_body_1.svg"
                                alt="club card description"
                            />
                        </div>
                    </div> */}
                </div>

                <div className={styles.footer}>
                    <img src="/home/footer.svg" alt="footer" />
                </div>
            </div>
        </Layout>
    );
}
