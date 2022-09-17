import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
  <Script id='scroll-animation'>document.documentElement.classList.add(`js`)</Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/taos@1.0.2/dist/taos.js"></Script>
      </body>
    </Html>
  )
}