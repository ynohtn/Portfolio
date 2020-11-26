import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styles from './styles.module.scss';

const Slide = () => {
	const triggerRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		gsap.to(textRef.current, {
			rotation: 360 * 5,
			// duration: 1,
			ease: 'none',
			scrollTrigger: {
				trigger: triggerRef.current,
				// toggleActions: 'restart pause reverse pause',
				pin: true,
				scrub: 0.2,
				start: 'top top',
				end: '+=12743',
				markers: true
				// end: `+=${document.documentElement.offsetHeight}`,
				// start: 'top +=90%',
				// end: () => '+=' + triggerRef.current.offsetWidth / 5
			}
		});
	}, []);

	return (
		<div className={`--crt ${styles.wrap}`} ref={triggerRef}>
			<p className={styles.scrollDown} ref={textRef}>
				SCROLL DOWN
			</p>
		</div>
	);
};

export default Slide;
