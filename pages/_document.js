import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="ru" className='scroll-smooth' style={{scrollBehavior: 'smooth'}}>
      <Head>
		<link rel="shortcut icon" href="/favicon.ico"/>
		<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
		<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
