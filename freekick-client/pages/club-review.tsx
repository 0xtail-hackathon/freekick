import Head from "next/head";
import Content from "../components/Content";
import Image from "next/image";
import Link from "next/link";

export default function ClubReview() {
  return (
    <div>
      <Head>
        <title>Freekick - Club Review</title>
      </Head>

      <div>
        <Link href="/club-popup">
          <Image
            src={"/page-club-review.svg"}
            alt="Club"
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
