
import styles from './Modal.module.css';
import { montserrat } from '@/fonts/fonts';
import cn from 'classnames'
import Input from '../Input/Input';
import Button from '../Button/Button';
import { SectionCall } from '@/sectionsComponent';
import { useEffect } from 'react';


export default function Modal({children, className, closeModal, dispModal,...props}) {

	function closeOutModal(e) {
		if (e.currentTarget == e.target) {
			closeModal();
		}
	}

  return (

		<div onClick={closeOutModal} id={styles['myModal']} className={cn(styles.modal, {
		[styles.hide] : dispModal == false
	})}>
		<SectionCall isModal={true} closeModal={closeModal} className={styles.callModal}/>
  	</div>
  )
}
