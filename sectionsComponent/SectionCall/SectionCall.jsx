'use client'

import { prata, montserrat, roboto } from '@/fonts/fonts';
import styles from './SectionCall.module.css'
import cn from 'classnames'
import Image from 'next/image';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';



export default function SectionCall({className, isModal, closeModal, ...props}) {
	const [value, setValue] = useState('');

    var data_js = {
        "access_token": "a78517izhl1k5qjdatqyurtu"
    };


	function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

	const validate = (e, value) => {
		const text = e.target.getElementsByClassName(styles.request)[0];
		const input = e.target.querySelector('input');
		if (value == '' || String(value).length < 11) {
			e.preventDefault();
			input.style.border = '1px solid red'
			text.style.display = 'block';
			text.textContent = 'Вы ввели неправильно номер.'
			return;
		} else {
		var request = new XMLHttpRequest();
		data_js['subject'] = 'Ритуальные услуги';
		data_js['text'] = `Номер телефона: ${value}`;
		var params = toParams(data_js);
		request.open("POST", "https://postmail.invotes.com/send", true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send(params);
			setValue('');
			text.style.display = 'block';
			text.textContent = 'Спасибо за оставленную заявку. В ближайшее время с вами свяжутся.'
			input.style.border = 'none'
			e.preventDefault();
		}
	}

  return (
	<section className={cn(styles.section, className, roboto.className)} {...props}>
		<div className={styles.sectionWrapper}>
			<Image  src='/leftImg.png' loading='lazy' width={795} height={315} alt='Вечная память' className={cn(styles.leftImg, {
				[styles.hideImg] : isModal 
			})}/>
			<Image  src='/rightImg.png' loading='lazy' width={582} height={234} alt='Лента памятная' className={cn(styles.rightImg, {
				[styles.hideImg] : isModal
			})}/>
			<div className={styles.wrapper}>
				{isModal && <span onClick={closeModal} className={styles.close}>&times;</span>}
				<div className={styles.header}>
					<h2 className={cn(styles.title, montserrat.className)}>Вызвать ритуального агента</h2>
					<div className={styles.description}>Если вам нужно срочно помочь с похоронами, отправьте свои данные. Наш специалист перезвонит вам</div>
				</div>
				<form onSubmit={(e) => validate(e, value)} className={styles.form}>
					<Input value={value} onChange={(e) => {setValue(e.target.value)}} pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$" placeholder='+7(999) 999-99-99' maxLength="17" className={styles.input}/>
					<Button type='submit' className={styles.button}>Получить консультацию</Button>
					<div style={{display: 'none'}} className={styles.request}/>
				<p className={styles.agreement}>Нажимая на кнопку, вы даёте согласие на обработку персональныхданных и соглашаетесь с политикой конфиденциальности</p>
				</form>
				<div className={styles.footer}>
					<span className={styles.phone}>+7(912) 949-49-40</span>
					<span className={styles.subDesc}>круглосуточно</span>
				</div>
			</div>
		</div>
	</section>
  )
	}

