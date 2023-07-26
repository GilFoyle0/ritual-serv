import React, { useState } from 'react';
import Button from '@/components/Button/Button'
import { prata, montserrat } from '@/fonts/fonts';
import styles from './SectionTop.module.css'
import cn from 'classnames'
import Modal from '@/components/Modal/Modal';

export default function SectionTop({className, ...props}) {
	const [dispModal, setDispModal] = useState(false);

	const showDisplay = () => {
		setDispModal(true);
	}
	const closeModal = () => {
		setDispModal(false);
	}
	
  return (
	<section className={cn(className, styles.section)} {...props}>
				<h1 className={cn(styles.title, prata.className)}>Ритуальные услуги</h1>
				<div className={cn(styles.description, montserrat.className)}>Оперативная помощь в трудную минуту</div>
				<Button id={styles['myBtn']} onClick={showDisplay} className={styles.button}>Вызвать ритуального агента</Button>
				<Modal dispModal={dispModal} closeModal={closeModal}/>
	</section>
  )
}
