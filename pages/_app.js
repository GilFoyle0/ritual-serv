import '@/styles/globals.css'
import Head from 'next/head';


import { roboto } from '@/fonts/fonts';


export default function App({ Component, pageProps }) {
	<Head>
		<title>Ритуальные услуги в Ухте</title>
		<meta property="og:title" content="Ритуальные услуги в Ухте"/>
		<meta name="description" content="Ритуальные услуги в ухте. Ритуальные услуги Ухта. Похороны в ухте"/>
		<meta property="og:description" content="Ритуальные услуги в Ухте. Ритуальные услуги Ухта. Похороны в ухте. Мы предлагаем полный спектр ритуальных услуг в Ухте, обеспечивая профессиональное и чуткое обслуживание в этот трудный период. Наши услуги включают организацию похорон, предоставление гробов, цветов, транспортных услуг и многое другое. Мы заботимся о ваших нуждах, чтобы вы могли сконцентрироваться на важном - поминовении близкого. Ритуальные услуги. Ритуальные услуги дешево и быстро в городе Ухте. Ритуальыне услуги онлайн заказать Ухта."/>
		<meta property="og:url" content="https://похоронывухте.рф"/>
		<meta property="og:locale" content="ru_Ru"/>
		<meta property="og:type" content="website"/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</Head>
  return <div className={roboto.className}>
	 <Component {...pageProps} />
  </div>
}
