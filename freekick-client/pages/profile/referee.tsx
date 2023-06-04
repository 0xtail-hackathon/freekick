import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";

export default function Referee() {
    return (
        <div>
            <Seo title="Referee" />

            <div className="container">
                <Link href="/profile/result">
                    <Image
                        src={"/page_profile_referee.png"}
                        alt="Slide"
                        quality={70}
                        height={400}
                        width={980}
                        sizes="100vw"
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}
