import React, { FC } from "react";
// import ThemeContextProvider from "~/common/context/themeContext.tsx";

export default function App({
  Page,
  pageProps,
}: {
  Page: FC;
  pageProps: Record<string, unknown>;
}) {
  return (
    <main id="app">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </head>
        <Page {...pageProps} />
    </main>
  );
}
