import React from "react";
import Link from "next/link";
import Slider from "./Slider";

export default function Welcome() {
  return (
    <>
      <h1 className="text-2xl text-black">
        Hi, <Link href="/profile">Newbie</Link>!
      </h1>
      <Slider
        slides={[
          { src: "/newbie.png" },
          { src: "/newbie.png" },
          { src: "/newbie.png" },
          { src: "/newbie.png" },
          { src: "/newbie.png" },
        ]}
      />
    </>
  );
}
