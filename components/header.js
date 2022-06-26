import Head from "next/head";
import { siteTitle } from "../components/layout";
import icon from "../pages/img/icon.png"

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.ico" />
        <link rel="canonical" href="https://marcoagarcia.com/"></link>
        <meta name="description" content="Marco Garcia Software Developer" />
        <meta property="og:title" content="Marco Garcia" />
        <meta property="og:site_name" content="Marco Garcia"></meta>
        <meta property="og:url" content="https://marcoagarcia.com/"></meta>
        <meta property="og:image" content={icon}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:title" content="Marco Garcia"></meta>
        <meta name="twitter:url" content="https://marcoagarcia.com/"></meta>
      </Head>
    </>
  );
}
