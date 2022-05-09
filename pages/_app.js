import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { LangProvider } from "context/lang";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </>
  );
}

export default MyApp;
