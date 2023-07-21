import {withLayout} from '@/layout/Layout'
import styles from './index.module.css';
import {SectionTop, SectionService, SectionPrinciples, SectionCall, SectionWork, SectionExamples, SectionWhywe} from '@/sectionsComponent'
import Image from 'next/image';
import CloudPrinc1 from '../public/cloudsPrinc1.png'
import CloudPrinc2 from '../public/cloudsPrinc2.png'
import Texture from '../public/texture.png'
import CloudWork from '../public/work_cloud.png'
import Gvozdika from '../public/gvozdiki.png'
import Memory from '../public/memory.png'
import CloudEx1 from '../public/cloudExpm1.png';
import CloudEx2 from '../public/cloudExmp2.png'; 
import Roses from '../public/roses.png';
import Boy2 from '../public/boy2.png';
import Statue from '../public/statue.png';
import BoyImg from '../public/boy.png'
import BasketImg from '../public/basket.png'
import CloudsService from '../public/service_clouds.png';
import WhyWeLeft from '../public/whywe1.png'
import WhyWeRight from '../public/whywe2.png'
import CloudWhywe from '../public/whyweCloud.png';


import cn from 'classnames';
import Head from 'next/head';

 function Main() {
  return (
	
    <div className={styles.main}>
		<Head>
		<title>Ритуальные Услуги</title>
		<meta property="og:title" content="Ритуальные Услуги"/>
		<meta name="description" content="Вызов ритуального агента, Организация похорон в Ухте, Оформление документов, Организация поминального обеда в городе Ухте"/>
		<meta property="og:description" content="Ритуальные услуги в Ухте. Ритуальные услуги Ухта. Мы предлагаем полный спектр ритуальных услуг в России, обеспечивая профессиональное и чуткое обслуживание в этот трудный период. Наши услуги включают организацию похорон, предоставление гробов, цветов, транспортных услуг и многое другое. Мы заботимся о ваших нуждах, чтобы вы могли сконцентрироваться на важном - поминовении близкого. Ритуальные услуги. Ритуальные услуги дешево и быстро в городе Ухте. Ритуальыне услуги онлайн заказать Ухта."/>
		<meta property="og:url" content="https://ritual-service"/>
		<meta property="og:locale" content="ru_Ru"/>
		<meta property="og:type" content="website"/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</Head>
		<div className={cn(styles.sectionWrap, styles.top)}>
			<SectionTop className={styles.sectionTop}/>
			<div className={cn(styles.clouds, styles.cloudsService)}><Image placeholder='blur' src={CloudsService} alt='облака' width='100%' quality={100}/></div>
		</div>
		<div className={cn(styles.sectionWrap, styles.service)}>
			<Image placeholder='blur' loading='lazy' src={BoyImg} quality={100} alt='Мальчик' className={styles.boy1}/>
			<Image placeholder='blur' loading='lazy' src={BasketImg}   quality={100} alt='Корзина' className={styles.basket}/>
			<SectionService className={styles.sectionService}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.principles)}>
			<Image placeholder='blur' src={CloudPrinc1} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudPrinc1)}/>
			<Image placeholder='blur' src={Texture} alt='текстура'quality={100} className={styles.texture}/>
			<SectionPrinciples className={styles.sectionPrinciples}/>
			<Image placeholder='blur' src={CloudPrinc2} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudPrinc2)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.call)}>
			<SectionCall className={cn(styles.sectionCall, styles.sectionCallTop)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.work)}>
			<Image placeholder='blur' src={CloudWork} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudWork)}/>
			<Image placeholder='blur' src={Gvozdika} alt='гвоздики' width='100%' quality={100} className={styles.gvozdika}/>
			<Image placeholder='blur' src={Memory} alt='память' width='100%' quality={100} className={styles.memory}/>
			<SectionWork className={styles.sectionWork}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.exapmples)}>
			<Image placeholder='blur' src={CloudEx1} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudEx1)}/>
			<div className={styles.backgroundExmp}/>
			<Image placeholder='blur' src={Roses} alt='розы' width='100%' quality={100} className={cn(styles.roses)}/>
			<Image placeholder='blur' src={Boy2} alt='мальчик' width='100%' quality={100} className={cn(styles.boy2)}/>
			<Image placeholder='blur' src={Statue} alt='статуя' quality={100} className={cn(styles.statue)}/>
			<SectionExamples className={styles.sectionExamples}/>
			<Image placeholder='blur' src={CloudEx2} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudEx2)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.whyWe)}>
			<Image placeholder='blur' src={WhyWeLeft} alt='розы' width='100%' quality={100} className={cn(styles.whyWeLeft)}/>
			<Image placeholder='blur' src={WhyWeRight} alt='розы' width='100%' quality={100} className={cn(styles.whyWeRight)}/>
			<SectionWhywe className={styles.sectionWhyWe}/>
			<Image placeholder='blur' src={CloudWhywe} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudWhyWe)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.callBottom)}>
			<SectionCall className={cn(styles.sectionCall, styles.sectionCallBottom)}/>
		</div>
    </div>
  )
}


export default withLayout(Main);
