import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionWhywe.module.css'
import cn from 'classnames'
import {ClientsIcon, EcoIcon, OpennessIcon, ProfessionalismIcom, ReliabilityIcon} from './icons'
import Image from 'next/image';

export default function SectionWhywe({className, ...props}) {
  return (
	<section id='whywe' className={cn(className, styles.section)} {...props}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2 className={cn(styles.title, prata.className)}>почему выбирают именно нас?</h2>
					<div className={styles.hr}><hr/></div>
				</div>
				<div className={styles.itemContainer}>
					<div className={styles.item}>
						<div className={styles.number}>1</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>Ритуальный агент</div>
							<div className={styles.itemDescription}>Наш ритуальный агент сам выезжает в назначенное место и организовывает  весь процесс от А до Я</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.number}>2</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>График</div>
							<div className={styles.itemDescription}>Проводим траурные мероприятия без задержек и строго по графику</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.number}>3</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>Транспорт</div>
							<div className={styles.itemDescription}>Предоставляем специальный транспорт из собственного автопарка</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.number}>4</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>Всё необходимое</div>
							<div className={styles.itemDescription}>Всегда в наличии все необходимое для проведения достойных похорон</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.number}>5</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>Без комиссии</div>
							<div className={styles.itemDescription}>Без скрытых платежей и комиссий. Стоимость услуг зафиксируем в договоре. Это исключает скрытые дополнительные расходы</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={cn(styles.number)}>6</div>
						<hr className={styles.vHr}/>
						<div className={styles.itemContent}>
							<div className={cn(styles.itemTitle, montserrat.className)}>Психологическая поддержка</div>
							<div className={styles.itemDescription}>предоставление услуг профессиональных психологов для консультации и поддержки в трудные периоды утраты близкого человека.</div>
						</div>
					</div>
				</div>
			</div>
	</section>
  )
}
