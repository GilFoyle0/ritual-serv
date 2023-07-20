import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" className='scroll-smooth' style={{scrollBehavior: 'smooth'}}>
      <Head>
		<link rel='shortcut icon' href='./favicon.ico'/>
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
