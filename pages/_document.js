import { Html, Head, Main, NextScript } from 'next/document'

import { Metadata } from 'next';

export const metadata = {
  title: 'Sling Academy',
  description:
    'This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day',
};




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
