import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <div>
            <Seo title="Profile" />

            <div className="container">
                <Link href="/club">
                    <Image
                        src={"/page_profile_done.png"}
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
