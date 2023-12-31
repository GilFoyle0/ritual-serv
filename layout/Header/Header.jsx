
import Image from 'next/image';
import styles from "./Header.module.css";
import cn from 'classnames'
import Link from 'next/link';
import { roboto } from '@/fonts/fonts';
import Head from 'next/head';


export const Header = ({ className, ...props }) => {

	const handlerMenu = (e) => {
		const overlay = document.getElementsByClassName(styles.headerNav)[0];
		const burgerMenu = document.getElementsByClassName(styles.burgerMenu)[0];
		burgerMenu.classList.toggle(styles.close);
		overlay.classList.toggle(styles.menuOpen);
	}

	const closeMenu = () => {
		const overlay = document.getElementsByClassName(styles.headerNav)[0];
		const burgerMenu = document.getElementsByClassName(styles.burgerMenu)[0];
		burgerMenu.classList.remove(styles.close);
		overlay.classList.remove(styles.menuOpen);
	}

  return <div {...props} className={cn(className, styles.header)}>
	<div className={styles.background}/>
	<div className={styles.wrapper}>
		<Image src='/logo.png' width={171} height={145} alt='logo' className={styles.logo}/>
		<div className={styles.burgerMenu} onClick={handlerMenu}>
			<span className={styles.spanBurger}></span>
		</div>
		<nav className={cn(styles.headerNav, roboto.className)} onClick={closeMenu}>
			<Link href='#contacts' scroll={false}>Контакты</Link>
			<Link href='#whywe' scroll={false}>О нас</Link>
			<Link href='#principles' scroll={false}>Принципы работы</Link>
			<Link href='#service' scroll={false}>Услуги</Link>
			<Link href='tel:+79129494940' className={styles.hiddenPhone} scroll={false}>+7(912) 949-49-40</Link>
		</nav>
		<Link href='tel:+79129494940' className={styles.phone} scroll={false}>+7(912) 949-49-40</Link>
	</div>
  </div>;
};
