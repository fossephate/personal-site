import React, { FC } from "react";
// import ThemeContextProvider from "~/common/context/themeContext.tsx";

export default function App({ Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> }) {
  return (
    <main id="app">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script> */}
      </head>
      <Page {...pageProps} />
    </main>
  );
}
