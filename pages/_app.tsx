import React from "react";
import "tailwindcss/tailwind.css";
import "../src/styles/global.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
