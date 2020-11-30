import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styles from './styles.module.scss';

interface Info {
	title: string;
	content: {
		desc?: string;
	};
	contact: { mail: string; github: string; linkedin: string; siret: string };
}

const Info = ({ title, content, contact }: Info) => {
	const infoCtn = useRef(null);
	const sectionsRefs = useRef([]);
	sectionsRefs.current = [];

	useEffect(() => {
		gsap.fromTo(
			sectionsRefs.current,
			{
				y: -50,
				opacity: 0
			},
			{
				scrollTrigger: {
					trigger: infoCtn.current,
					toggleActions: 'restart pause reverse pause',
					start: 'top +=70%',
					scrub: 1,
					// Base vertical scrolling on how wide the container is so it feels more natural.
					end: () => '+=' + infoCtn.current.offsetWidth / 5
				},
				y: 0,
				opacity: 1,
				stagger: 0.1
			}
		);
	}, []);

	const addToRefs = (el) => {
		if (el && !sectionsRefs.current.includes(el)) {
			sectionsRefs.current.push(el);
		}
	};

	return (
		<div ref={infoCtn} className={styles.infoctn}>
			<h1 ref={addToRefs}>{title}</h1>
			<p ref={addToRefs} className={styles.infoDesc}>
				{content.desc}
			</p>
			<div ref={addToRefs} className={styles.social}>
				<p>Apprenez en plus sur </p>
				<a href={contact.linkedin} target="_blank" rel="noopener">
					LinkedIn
				</a>{' '}
				ou sur{' '}
				<a
					href={'https://www.malt.fr/profile/anthonyreynaud'}
					target="_blank"
					rel="noopener"
				>
					Malt
				</a>
			</div>
			<div ref={addToRefs} className={styles.social}>
				<p>Jetez un œil à mon code sur </p>
				<a href={contact.github} target="_blank" rel="noopener">
					GitHub
				</a>
			</div>
			<div ref={addToRefs} className={styles.social}>
				<p>Demandez un devis (gratuit) ou parlez moi de votre projet</p>
				<a href={`mailto:${contact.mail}`}>{contact.mail}</a>
			</div>
		</div>
	);
};

export default Info;
