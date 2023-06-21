import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import MouseFollower from "../../components/MouseFollower";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>群馬県高崎市のNext.jsを用いたHP制作業者 | Chrono-Office</title>
        <meta
          name="google-site-verification"
          content="eiWwhL_ddr7VLMq5Oz1-p2UtYpd2QdPnLACqLTitQ9U"
        />
        <meta
          name="description"
          content="群馬県高崎市を拠点に、低単価で高品質なホームページ制作を提供する【Chrono-Office】。Next.jsを用いたサイト制作により、お客様のビジネスに合わせたSEO対策やデザインをご提案いたします。"
        />
        <meta
          name="keywords"
          content="群馬県、高崎市、Web制作、HP業者、ホームページ、Next.js、低単価、SEO対策、デザイン、ホームページ業者"
        />
      </Head>
      <Layout navPosition={pageProps.navPosition}>
        <Component {...pageProps} />
        <MouseFollower />
      </Layout>
      <Analytics />
    </>
  );
}
