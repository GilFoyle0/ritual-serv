import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionExamples.module.css'
import cn from 'classnames'
import Image from 'next/image';
import Button from '@/components/Button/Button';




export default function SectionExamples({className, showExmpImage,...props}) {

	const toggleBlock = (e) => {
		const block = document.getElementsByClassName(styles.item)[1]
		if (block.classList.toggle(styles.hidden)) {
			e.currentTarget.textContent = 'Показать больше';
			showExmpImage(false)
		} else {
			e.currentTarget.textContent = 'Показать меньше';
			showExmpImage(true)
		}
	}

  return (
	<section className={cn(className, styles.section)} {...props}>
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={cn(styles.title, prata.className)}>примеры работ</h2>
				<div className={styles.hr}><hr/></div>
				<span className={styles.description}>Для нашей компании честь почтить память близких для вас людей, поэтому каждая наша работа выполненна безупречно</span>
			</div>
			<div className={styles.itemContainer}>
				<div className={cn(styles.item)}>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100}  blurDataURL='/photo1.png' src='/photo1.png' loading='lazy' width={367} height={421} srcSet='/photo1@2x.png' alt='Ритуальные услуги'  className={styles.image} /></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo2.png' src='/photo2.png' loading='lazy' width={367} height={421} srcSet='/photo2@2x.png' alt='Ритуальные услуги' className={styles.image}/></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo3.png' src='/photo3.png' loading='lazy' width={367} height={421} srcSet='/photo3@2x.png' alt='Ритуальные услуги'   className={styles.image}/></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo4.png' src='/photo4.png' loading='lazy'  width={367} height={421} srcSet='/photo4@2x.png' alt='Ритуальные услуги быстро высшее качество' className={styles.image} /></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo5.png' src='/photo5.png' loading='lazy'  width={367} height={421}	srcSet='/photo5@2x.png' alt='Ритуальные услуги' className={styles.image}  /></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo6.png' src='/photo6.png' loading='lazy'  width={367} height={421}  srcSet='/photo6@2x.png'  alt='Ритуальные услуги' className={styles.image} /></div>
				</div>
				<div className={cn(styles.item, styles.hidden)}>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo7.png' src='/photo7.png' loading='lazy' width={367} height={421} srcSet='/photo7@2x.png' alt='Ритуальные услуги'  className={styles.image} /></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo8.png' src='/photo8.png' loading='lazy' width={367} height={421} srcSet='/photo8@2x.png' alt='Ритуальные услуги' className={styles.image}/></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo9.png' src='/photo9.png' loading='lazy' width={367} height={421} srcSet='/photo9@2x.png' alt='Ритуальные услуги'   className={styles.image}/></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo10.png' src='/photo10.png' loading='lazy'  width={367} height={421} srcSet='/photo10@2x.png' alt='Ритуальные услуги' className={styles.image} /></div>
					<div className={styles.hoverImg}><Image placeholder='blur' 	quality={100}  blurDataURL='/photo11.png' src='/photo11.png' loading='lazy'  width={367} height={421}srcSet='/photo11@2x.png' alt='Ритуальные услуги' className={styles.image}  /></div>
					<div className={styles.hoverImg}><Image placeholder='blur'  quality={100} blurDataURL='/photo12.png' src='/photo12.png' loading='lazy'  width={367} height={421}  srcSet='/photo12@2x.png'  alt='Ритуальные услуги' className={styles.image} /></div>
				</div>
			</div>
			<Button className={styles.button} onClick={(e)=>toggleBlock(e)}>Показать больше</Button>
		</div>
	</section>
  )
}
