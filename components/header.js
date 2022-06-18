import Head from "next/head";
import { siteTitle } from "../components/layout";
import { NextSeo } from "next-seo";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Marco Garcia Software Developer" />
        <link rel="canonical" href="https://marcoagarcia.com/"></link>
        <meta property="og:title" content="Marco Garcia" />
        <meta property="og:site_name" content="Marco Garcia"></meta>
        <meta property="og:url" content="https://marcoagarcia.com/"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:title" content="Marco Garcia"></meta>
        <meta name="twitter:url" content="https://marcoagarcia.com/"></meta>
        <NextSeo
        title="Marco Garcia"
        titleTemplate="Marco Garcia | Next SEO"
        description="A website for Marco Garcia to show his development skills"
        canonical="https://marcoagarcia.com/"
        />
      </Head>
    </>
  );
}
