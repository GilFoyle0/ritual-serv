import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionService.module.css'
import cn from 'classnames'
import {AgentIcon, LiftIcon, TransportIcon, PreparationIcon, LunchIcon, DocumentsIcon} from './icons'
import Image from 'next/image';


export default function SectionService({className, ...props}) {
  return (
	<section id='service' className={cn(className, styles.section)} {...props}>
			<div className={styles.sectionWrapper}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2 className={cn(styles.title, prata.className)}>Наши услуги</h2>
					<div className={styles.hr}><hr/></div>
				</div>
					<div className={styles.itemContainer}>
						<div className={styles.item}>
							<Image loading='lazy' src={AgentIcon} alt='Вызов ритуального агента' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Вызов ритуального агента</div>
							<div className={cn(styles.description, roboto.className)}>Ритуальный агент — это высококвалифицированный специалист, который обладает соответствующими знаниями и опытом для организации похорон на достойном уровне. Распорядитель похорон организует весь процесс от А до Я.</div>
						</div>
						<div className={styles.item}>
							<Image loading='lazy' src={PreparationIcon} alt='Организация похорон' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Организация похорон</div>
							<div className={cn(styles.description, roboto.className)}>Безупречная организация и проведение похоронных церемоний, а также исполнение всех необходимых процедур и формальностей, которые связаны с захоронением усопшего.</div>
						</div>
						<div className={styles.item}>
							<Image loading='lazy' src={DocumentsIcon} alt='Оформление документов' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Оформление документов</div>
							<div className={cn(styles.description, roboto.className)}>Оформление документов: сотрудники нашей организации обладают всеми навыками, чтобы обеспечить быстрое и качественное оформление нужных видов документов. Воспользоваться нашими услугами можно в любое время.</div>
						</div>
						<div className={styles.item}>
							<Image loading='lazy' src={TransportIcon} alt='Спец транспорт' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Спец транспорт</div>
							<div className={cn(styles.description, roboto.className)}>Новый, отвечающий всем стандартам и нормам ритуальный транспорт, водители которых обладают опытом вождения на данном спецтранспорте более 5-ти лет.</div>
						</div>
						<div className={styles.item}>
							<Image loading='lazy' src={LunchIcon} alt='Организация поминального обеда' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Организация поминального обеда</div>
							<div className={cn(styles.description, roboto.className)}>Заказ и доставка питания для поминального обеда, организация обслуживающего персонала.</div>
						</div>
						<div className={styles.item} >
							<Image loading='lazy' src={LiftIcon} alt='Лифт' className={styles.icon}/>
							<div className={cn(styles.itemTitle, montserrat.className)}>Лифт</div>
							<div className={cn(styles.description, roboto.className)}>Сингуматор (ритуальный лифт): механическое приспособление, которое позволяет поместить гроб в могилу без использования такого устаревшего атрибута, как верёвки. Сингуматор позволяет плавно, безаварийно и эстетично совершить самую эмоционально трудную часть скорбной процедуры.</div>
						</div>
					</div>
				</div>
			</div>
	</section>
  )
}
