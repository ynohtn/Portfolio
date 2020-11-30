import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styles from './styles.module.scss';
import { Project } from '../../index';

interface Projects {
	title: string;
	content: {
		desc: string;
		name: string;
		techs: string[];
		img: {
			src: string;
			width: number;
			height: number;
			mobile?: { src: string; width: number; height: number };
		};
	}[];
}

const Projects = ({ title, content }: Projects) => {
	// console.log(content)
	const scrollWrapperRef = useRef(null);
	const scrollerRef = useRef(null);
	const titleRef = useRef(null);
	const titleWrapperRef = useRef(null);
	const sectionsRefs = useRef([]);
	sectionsRefs.current = [];
	// console.log(sectionsRefs.current);

	useEffect(() => {
		const w = titleWrapperRef.current;
		// depuis la droite
		const [x, xEnd] = ['100%', (w.scrollWidth - titleRef.current) * -1];
		// depuis la gauche
		// const [xl, xlEnd] = [ttl.scrollWidth * -1, 0];

		gsap.fromTo(
			w,
			{ x },
			{
				x: xEnd,
				scrollTrigger: {
					trigger: titleRef.current,
					scrub: 0.5
				}
			}
		);

		gsap.to(sectionsRefs.current, {
			xPercent: -100 * (sectionsRefs.current.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: scrollWrapperRef.current,
				toggleActions: 'restart pause reverse pause',
				pin: true,
				start: 'top +=50px',
				scrub: 1,
				snap: {
					snapTo: 1 / (sectionsRefs.current.length - 1),
					duration: { min: 0.2, max: 0.3 },
					delay: 0
				}
				// Base vertical scrolling on how wide the container is so it feels more natural.
				// end: () => '+=' + scrollerRef.current.offsetWidth / 5
			}
		});
	}, []);

	const addToRefs = (el) => {
		if (el && !sectionsRefs.current.includes(el)) {
			sectionsRefs.current.push(el);
		}
	};

	return (
		content && (
			<div ref={scrollWrapperRef} className={`goSide ${styles.scrollWrapper}`}>
				{title && (
					<h1 ref={titleRef}>
						<div ref={titleWrapperRef}>{title}</div>
					</h1>
				)}
				<div ref={scrollerRef} className={styles.scrollContainer}>
					{content.map((project, i) => (
						<div ref={addToRefs} key={i}>
							<Project project={project} />
						</div>
					))}
				</div>
			</div>
		)
	);
};

export default Projects;
