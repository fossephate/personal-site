import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
// import 'virtual:windi-devtools'

export { render }
let root;

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext
  // hydrateRoot(
  //   document.getElementById('page-view')!,
  //   <PageShell pageContext={pageContext}>
  //     <Page {...pageProps} />
  //   </PageShell>,
  // )
  // SSG:
  // hydrateRoot(
  //   document.getElementById('page-view')!,
  //     <Page {...pageProps} />,
  // )
  // return <Page {...pageProps} />;

  const page = (
    <Page {...pageProps} />
  )
  const container = document.getElementById('root');
  // // SPA
  // if (container?.innerHTML === '' || !pageContext.isHydration) {
  //   if (!root) {
  //     root = ReactDOM.createRoot(container!);
  //   }
  //   root.render(page);
  //   // SSR
  // } else {
  //   root = ReactDOM.hydrateRoot(container!, page);
  // }

  // pure SPA:
  root = ReactDOM.createRoot(container!);
  root.render(page);
}

export const clientRouting = true
/* To enable Client-side Routing:
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */