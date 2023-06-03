import Head from "next/head";
import Content from "../components/Content";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freekick - Home</title>
      </Head>
      <div className="px-6">
        <Content />
      </div>
    </div>
  );
}
