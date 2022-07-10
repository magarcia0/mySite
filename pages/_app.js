import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Marco Garcia"
        titleTemplate="Marco Garcia"
        defaultTitle="Marco Garcia"
        description="Full stack website developer Marco Garcia"
        canonical="https://marcoagarcia.com/"
        openGraph={{
          url: "https://marcoagarcia.com/",
          title: "Marco Garcia",
          description: "Full stack website developer Marco Garcia",
          site_name: "Marco A. Garcia",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
