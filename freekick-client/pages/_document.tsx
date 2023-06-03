import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Play football with web3 friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="container mx-auto border-r-4 border-l-4 border-black min-h-screen">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
