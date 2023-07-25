
import styles from './Modal.module.css';
import { montserrat } from '@/fonts/fonts';
import cn from 'classnames'
import Input from '../Input/Input';
import Button from '../Button/Button';


export default function Modal({children, className, ...props}) {
  return (
	<div className={cn(className, styles.overlay, montserrat.className)} {...props}>
		<div className={styles.modal}>
			<svg className={styles.modal__cross} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
				<div className={styles.wrapper}>
					<div className={styles.header}>
					<h2 className={cn(styles.title, montserrat.className)}>Вызвать ритуального агента</h2>
					<div className={styles.description}>Если вам нужно срочно помочь с похоронами, отправьте свои данные. Наш специалист перезвонит вам</div>
				</div>
					<form id='javascript_form' onSubmit={(e) => validate(e, value)} className={styles.form}>
						<Input value={value} onChange={(e) => {setValue(e.target.value)}} pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" placeholder='+7(999) 999-99-99' className={styles.input}/>
						<Button type='submit' id='js_send' className={styles.button}>Получить консультацию</Button>
						<div style={{display: 'none'}} className={styles.request}/>
						<p className={styles.agreement}>Нажимая на кнопку, вы даёте согласие на обработку персональныхданных и соглашаетесь с политикой конфиденциальности</p>
					</form>
					<div className={styles.footer}>
						<span className={styles.phone}>+7(939) 744-20-22</span>
						<span className={styles.subDesc}>круглосуточно</span>
					</div>
				</div>
		</div>
	</div>
  )
}
