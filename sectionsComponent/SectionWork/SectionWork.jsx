import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionWork.module.css'
import cn from 'classnames'
import Image from 'next/image';
import OneIcon from './icons/one.svg';
import TwoIcon from './icons/two.svg';
import ThreeIcon from './icons/three.svg';
import FourIcon from './icons/four.svg';
import FiveIcon from './icons/five.svg';

export default function SectionWork({className, ...props}) {
  return (
	<section className={cn(className, styles.section, roboto.className)} {...props}>
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={cn(styles.title,prata.className)}>Порядок работы</h2>
				<div className={styles.hr}><hr/></div>
			</div>
			<div className={styles.itemContainer}>
				<div className={cn(styles.item, styles.oddItem)}>
					<Image loading='lazy' src={OneIcon} alt='Получение заявки на ритуальные услуги' className={styles.itemIcon}/>
					<div className={styles.itemContent}>
						<div className={cn(styles.itemTitle, montserrat.className)}>Получение заявки</div>
						<div className={styles.lineWrap}><span className={styles.dote}/><hr className={styles.hrDashed}/></div>
						<div className={cn(styles.description, roboto.className)}>Вы связываетесь с нами или оставляете заявку на сайте</div>
					</div>
				</div>
				<hr className={styles.vrDashed}/>
				<div className={cn(styles.item, styles.evenItem)}>
					<Image loading='lazy' src={TwoIcon} alt='Обсуждение' className={styles.itemIcon}/>
					<div className={cn(styles.itemContent, styles.evenContentItem)}>
						<div  className={cn(styles.itemTitle, montserrat.className)}>Обсуждение</div>
						<div className={styles.lineWrap}><span className={styles.dote}/><hr className={styles.hrDashed}/></div>
						<div className={cn(styles.description, roboto.className)}>Мы перезваниваем вам и обсуждаем заказ с учетом всех пожеланий </div>
					</div>
				</div>
				<hr className={styles.vrDashed}/>
				<div className={cn(styles.item, styles.oddItem)}>
					<Image loading='lazy' src={ThreeIcon} alt='Выезд на дом ритуальные услуги' className={styles.itemIcon}/>
					<div className={styles.itemContent}>
						<div  className={cn(styles.itemTitle, montserrat.className)}>Выезд</div>
						<div className={styles.lineWrap}><span className={styles.dote}/><hr className={styles.hrDashed}/></div>
						<div className={cn(styles.description, roboto.className)}>Наш агент оперативно выезжает  к вам, и вы заключаете договор</div>
					</div>
				</div>
				<hr className={styles.vrDashed}/>
				<div className={styles.item}>
					<Image loading='lazy' src={FourIcon} alt='Обязательства' className={styles.itemIcon}/>
					<div className={cn(styles.itemContent, styles.evenContentItem)}>
						<div  className={cn(styles.itemTitle, montserrat.className)}>Обязательства</div>
						<div className={styles.lineWrap}><span className={styles.dote}/><hr className={styles.hrDashed}/></div>
						<div className={cn(styles.description, roboto.className)}>Мы выполняем все обязательства по договору</div>
					</div>
				</div>
				<hr className={styles.vrDashed}/>
				<div className={styles.item}>
					<Image loading='lazy' src={FiveIcon} alt='Качество ритуальных услуг' className={styles.itemIcon}/>
					<div className={cn(styles.itemContent, styles.oddItem)}>
						<div className={cn(styles.itemTitle, montserrat.className)}>Качество</div>
						<div className={styles.lineWrap}><span className={styles.dote}/><hr className={styles.hrDashed}/></div>
						<div className={cn(styles.description, roboto.className)}>Вы получаете самые лучшие ритуальные услуги для близкого человека</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
