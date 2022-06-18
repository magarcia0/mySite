import Head from "next/head";
import { siteTitle } from "../components/layout";
import { NextSeo } from "next-seo";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fitness Workout Builder" />
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
        title="Marco Garcia"
        titleTemplate="Marco Garcia | Next SEO"
        description="A website for Marco A Garcia to show projects he's worked on"
        canonical="https://marcoagarcia.com/"
        />
      </Head>
    </>
  );
}
