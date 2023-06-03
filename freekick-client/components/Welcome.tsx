import React from "react";
import Link from "next/link";
import Slider from "./Slider";
import Image from "next/image";

export default function Welcome() {
  return (
    <>
      <h1 className="text-4xl text-black pb-3 pt-10 px-3 font-bold">
        Hi, <Link href="/profile">Newbie</Link>!
      </h1>
      <Slider
        slides={[
          { src: "/newbie-1.png" },
          { src: "/newbie-2.png" },
          { src: "/newbie-2.png" },
          { src: "/newbie-2.png" },
          { src: "/newbie-2.png" },
        ]}
        paginate={true}
      />
      <h2 className="text-3xl text-black pb-3 pt-8 px-3 font-bold">
        <Link href="/clubs">Club List</Link>
      </h2>
      <div className="py-4">
        <Image
          src={"/location.svg"}
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
      </div>
      <Slider
        slides={[
          { src: "/team-1.svg" },
          { src: "/team-2.svg" },
          { src: "/team-1.svg" },
          { src: "/team-2.svg" },
          { src: "/team-1.svg" },
        ]}
        paginate={false}
      />
    </>
  );
}
