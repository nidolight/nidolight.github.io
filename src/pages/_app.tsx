import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { StyleSheetManager } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>nidolight</title>
          <meta name="description" content="nidolight - Portfolio Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <StyleSheetManager>
          <GlobalStyle />
          <Component {...pageProps} />
        </StyleSheetManager>
      </>
  );
}
