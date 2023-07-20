
import styles from './Gallery.module.css';
import { montserrat } from '@/fonts/fonts';
import cn from 'classnames'
import Image from 'next/image';


export default function Gallery({children, className, ...props}) {
  return (
	<>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
		<Image src='/Palatka.png'  srcSet='/Palatka@2x.png' alt='' width={367} height={421}/>
	</>
  )
}
