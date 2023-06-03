import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <h1 className="text-2xl text-black">
        Hi, <Link href="/profile">Newbie</Link>!
      </h1>
      <Image
        src="/newbie.png"
        width={200}
        height={100}
        alt="Picture of the author"
      />
    </>
  );
}
