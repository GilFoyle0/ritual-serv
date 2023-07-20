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

 function Main() {
  return (
    <div className={styles.main}>
		<div className={cn(styles.sectionWrap, styles.top)}>
			<SectionTop className={styles.sectionTop}/>
			<div className={cn(styles.clouds, styles.cloudsService)}><Image src={CloudsService} alt='облака' width='100%' quality={100}/></div>
		</div>
		<div className={cn(styles.sectionWrap, styles.service)}>
			<Image loading='lazy' src={BoyImg} quality={100} alt='Мальчик' className={styles.boy1}/>
			<Image loading='lazy' src={BasketImg}   quality={100} alt='Корзина' className={styles.basket}/>
			<SectionService className={styles.sectionService}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.principles)}>
			<Image src={CloudPrinc1} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudPrinc1)}/>
			<Image src={Texture} alt='текстура'quality={100} className={styles.texture}/>
			<SectionPrinciples className={styles.sectionPrinciples}/>
			<Image src={CloudPrinc2} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudPrinc2)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.call)}>
			<SectionCall className={cn(styles.sectionCall, styles.sectionCallTop)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.work)}>
			<Image src={CloudWork} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudWork)}/>
			<Image src={Gvozdika} alt='гвоздики' width='100%' quality={100} className={styles.gvozdika}/>
			<Image src={Memory} alt='память' width='100%' quality={100} className={styles.memory}/>
			<SectionWork className={styles.sectionWork}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.exapmples)}>
			<Image src={CloudEx1} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudEx1)}/>
			<div className={styles.backgroundExmp}/>
			<Image src={Roses} alt='розы' width='100%' quality={100} className={cn(styles.roses)}/>
			<Image src={Boy2} alt='мальчик' width='100%' quality={100} className={cn(styles.boy2)}/>
			<Image src={Statue} alt='статя' quality={100} className={cn(styles.statue)}/>
			<SectionExamples className={styles.sectionExamples}/>
			<Image src={CloudEx2} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudEx2)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.whyWe)}>
			<Image src={WhyWeLeft} alt='розы' width='100%' quality={100} className={cn(styles.whyWeLeft)}/>
			<Image src={WhyWeRight} alt='розы' width='100%' quality={100} className={cn(styles.whyWeRight)}/>
			<SectionWhywe className={styles.sectionWhyWe}/>
			<Image src={CloudWhywe} alt='облака' width='100%' quality={100} className={cn(styles.clouds, styles.cloudWhyWe)}/>
		</div>
		<div className={cn(styles.sectionWrap, styles.callBottom)}>
			<SectionCall className={cn(styles.sectionCall, styles.sectionCallBottom)}/>
		</div>
    </div>
  )
}


export default withLayout(Main);
