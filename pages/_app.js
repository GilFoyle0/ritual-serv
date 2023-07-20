import '@/styles/globals.css'
import Head from 'next/head';


import { roboto } from '@/fonts/fonts';


export default function App({ Component, pageProps }) {
	<Head>
	<title>Ритуальные Услуги</title>
	<link rel='shortcut icon' href='./favicon.ico'/>
	<meta property="og:title" content="Ритуальные Услуги"/>
	<meta name="description" content="Вызов ритуального агента, Организация похорон в Ухте, Оформление документов, Организация поминального обеда в городе Ухте"/>
	<meta property="og:description" content="Ритуальные услуги в Ухте. Ритуальные услуги Ухта. Мы предлагаем полный спектр ритуальных услуг в России, обеспечивая профессиональное и чуткое обслуживание в этот трудный период. Наши услуги включают организацию похорон, предоставление гробов, цветов, транспортных услуг и многое другое. Мы заботимся о ваших нуждах, чтобы вы могли сконцентрироваться на важном - поминовении близкого. Ритуальные услуги. Ритуальные услуги дешево и быстро в городе Ухте. Ритуальыне услуги онлайн заказать Ухта."/>
	<meta property="og:url" content="https://ritual-service"/>
	<meta property="og:locale" content="ru_Ru"/>
	<meta property="og:type" content="website"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	</Head>
  return <div className={roboto.className}>
	 <Component {...pageProps} />
  </div>
}