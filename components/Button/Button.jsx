
import styles from './Button.module.css';
import { montserrat } from '@/fonts/fonts';
import cn from 'classnames'


export default function Button({children, className, ...props}) {
  return (
	<button className={cn(className, styles.button, montserrat.className)} {...props}>
		<span>{children}</span>
		</button>
  )
}
