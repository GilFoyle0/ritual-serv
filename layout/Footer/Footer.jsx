
import styles from "./Footer.module.css";
import cn from 'classnames';
import { montserrat, prata } from '@/fonts/fonts';
import WhatsappIcon from './icons/whatsapp.svg';
import TelegramIcon from './icons/telegram.svg';
import FooterCloud from '../../public/footer_cloud.png'
import FooterBack from '../../public/footer_background.png'
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({className, ...props }) => {
  return (
    <footer id='contacts' className={cn(styles.footer, className)} {...props}>
		<Image src={FooterBack} alt='Свеча' className={styles.footerBack} quality={100}/>
		<Image src={FooterCloud} width='100%' className={styles.footerCloud} quality={100} alt='Облака'/>
			<div className={styles.header}>
				<h2 className={cn(styles.title, prata.className)}>контакты</h2>
				<div className={styles.hr}><hr/></div>
			</div>
			<div className={styles.itemContainer}>
				<div className={styles.companyData}>
					<div>
						<div className={cn(styles.itemTitle, montserrat.className)}>Данные Компании</div>
						<div className={styles.geo}>г.Ухта п.Шудаяг Тимирязева д.3</div>
						<div className={styles.companyInfo}><span>ИНН:</span> 110503797600</div>
						<div className={styles.companyInfo}><span>ОГРН:</span> 309110516100025</div>
						<div className={styles.fioIP}>ИП Скоряк Юлия Васильевна</div>
					</div>
				</div>
				<div className={styles.contactsWrapper}>
					<div className={styles.contacts}>
						<div className={cn(styles.itemTitle, montserrat.className)}>Данные для связи</div>
						<div className={styles.number}>89129494940</div>
						<div className={styles.number}>89129477385</div>
						<div className={styles.email}>delvood@list.ru</div>
					</div>
					<div className={styles.iconWrapper}>
						<Link href='https://wa.me/79129494940' target="_blank" className={styles.link}><Image className={styles.whatsapp} src={WhatsappIcon} width={60} alt='whatsapp'/></Link>
					</div>
				</div>
			</div>
    </footer>
  );
};
