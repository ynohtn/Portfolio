import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styles from './styles.module.scss';

interface Slide {
	title: string;
	content: {
		desc?: string;
	};
}

const Slide = ({ title, content }: Slide) => {
	const triggerRef = useRef(null);
	const titleRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const ttl = titleRef.current;
		const txt = textRef.current;
		// depuis la droite
		const [x, xEnd] = ['50%', (txt.scrollWidth - titleRef.current) * -1];
		// depuis la gauche
		const [xl, xlEnd] = [(ttl.scrollWidth + 200) * -1, 0];

		gsap.fromTo(
			ttl,
			{ x: xl, y: -200, opacity: 0 },
			{
        x: xlEnd,
        y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					toggleActions: 'restart pause reverse pause',
					pin: true,
					// markers: true,
					scrub: 1,
					start: 'top +=90%',
					end: () => '+=' + triggerRef.current.offsetWidth / 5
				}
			}
		);

		gsap.fromTo(
			txt,
			{ x, y: 200, opacity: 0 },
			{
        x: xEnd,
        y: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					toggleActions: 'restart pause reverse pause',
					pin: true,
					// markers: true,
					scrub: 1,
					start: 'top +=50%',
					end: '+=100%'
				}
			}
		);
	}, []);

	return (
		<div className={styles.slide} ref={triggerRef}>
			<h2 ref={titleRef}>{title}</h2>
			<p ref={textRef}>{content.desc}</p>
		</div>
	);
};

export default Slide;
