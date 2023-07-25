import React from 'react';
import Button from '@/components/Button/Button'
import { prata, montserrat } from '@/fonts/fonts';
import styles from './SectionTop.module.css'
import cn from 'classnames'
import { SectionCall } from '..';

export default function SectionTop({className, ...props}) {
  return (
	<section className={cn(className, styles.section)} {...props}>
				<h1 className={cn(styles.title, prata.className)}>Ритуальные услуги</h1>
				<div className={cn(styles.description, montserrat.className)}>Оперативная помощь в трудную минуту</div>
				<a href='#call'><Button className={styles.button}>Вызвать ритуального агента</Button></a>
	</section>
  )
}
