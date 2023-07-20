import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionPrinciples.module.css'
import cn from 'classnames'
import {ClientsIcon, EcoIcon, OpennessIcon, ProfessionalismIcom, ReliabilityIcon} from './icons'
import Image from 'next/image';

export default function SectionPrinciples({className, ...props}) {
  return (
	<section id='principles' className={cn(className, styles.section)} {...props}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2 className={cn(styles.title, prata.className)}>Принципы работы</h2>
					<div className={styles.hr}><hr/></div>
				</div>
				<div className={styles.itemContainer}>
					<div className={cn(styles.item, styles.gridItem1)}>
						<Image loading='lazy' src={ProfessionalismIcom} alt='Безупречность и профессионализм' className={styles.icon}/>
						<div className={cn(styles.itemTitle, montserrat.className)}>Безупречность и профессионализм</div>
						<div className={cn(styles.description, roboto.className)}>Мы гарантируем выполнение всех своих обязательств с высоким качеством и профессионализмом. Наши специалисты обладают достаточными знаниями и опытом в сфере ритуальных услуг, чтобы безупречно организовать и провести похоронную церемонию.</div>
					</div>
					<div className={cn(styles.item, styles.gridItem2)}>
						<Image loading='lazy' src={OpennessIcon} alt='Открытость и честность' className={styles.icon}/>
						<div className={cn(styles.itemTitle, montserrat.className)}>Открытость и честность</div>
						<div className={cn(styles.description, roboto.className)}>Мы предоставляем понятную и подробную информацию о стоимости услуг и товаров, о действующих правилах оказания ритуальных услуг. Кроме того, мы готовы ответить на любые ваши вопросы и предоставить прозрачные отчёты о своей деятельности.</div>
					</div>
					<div className={cn(styles.item, styles.gridItem3)}>
						<Image loading='lazy' src={EcoIcon} alt='Экономичность' className={styles.icon}/>
						<div className={cn(styles.itemTitle, montserrat.className)}>Экономичность</div>
						<div className={cn(styles.description, roboto.className)}>Мы окажем Вам необходимую помощь по приемлемым ценам. Оказываем как услуги в комплексе, так и по отдельности.
					</div>
					</div>
					<div className={cn(styles.item, styles.gridItem4)}>
						<Image loading='lazy' src={ReliabilityIcon} alt='Надежность и своевременность' className={styles.icon}/>
						<div className={cn(styles.itemTitle, montserrat.className)}>Надежность и своевременность</div>
						<div className={cn(styles.description, roboto.className)}>Мы гарантируем своевременное и надежное выполнение всех услуг. Это включает в себя своевременную организацию похоронной церемонии, доставку гроба и ритуальных принадлежностей, а также выполнение всех необходимых процедур и формальностей, связанных с захоронением усопшего.</div>
					</div>
					<div className={cn(styles.item, styles.gridItem5)}>
						<Image loading='lazy' src={ClientsIcon} alt='Клиентоориентированность' className={styles.icon}/>
						<div className={cn(styles.itemTitle, montserrat.className)}>Клиентоориентированность</div>
						<div className={cn(styles.description, roboto.className)}>Мы работаем с каждым клиентом индивидуально, учитывая его культурные и религиозные традиции, а также отдельные пожелания и предпочтения. Это включает в себя предоставление различных вариантов похоронной церемонии и помощь в выборе ритуальных услуг, соответствующих уникальным потребностям каждого клиента.</div>
					</div>
				</div>
			</div>
	</section>
  )
}
