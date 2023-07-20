
import styles from './Input.module.css';
import { roboto } from '@/fonts/fonts';
import cn from 'classnames'



export default function Input({children, className, ...props}) {
  return (
	<input pattern="/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/" className={cn(className, styles.input, roboto.className)} {...props}/>
  )
}
