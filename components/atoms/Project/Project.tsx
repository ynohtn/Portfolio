import { useState, useEffect, memo } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface Project {
	project: {
		desc: string;
		name: string;
		techs: string[];
		img: {
			src: string;
			width: number;
			height: number;
			mobile?: { src: string; width: number; height: number };
		};
	};
}

const Project = memo(({ project }: Project) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		window.addEventListener('resize', () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener('resize', () => setWidth(window.innerWidth));
	}, [width]);

	return (
		project && (
			<article className={`${styles.projectCard}`}>
				<div className={styles.projectCardContent}>
					<div className={styles.projectCardText}>
						<h2>{project.name}</h2>
						<p>{project.desc}</p>
						<h3>Stack :</h3>
						<ul>
							{project.techs.map((tech, i) => (
								<li key={i}>{tech}</li>
							))}
						</ul>
					</div>
				</div>
				<figure className={styles.projectCardImg}>
					<Image
						src={
							project.img.mobile && width <= 1800
								? project.img.mobile.src
								: project.img.src
						}
						alt={project.name}
						width={
							project.img.mobile && width <= 1800
								? project.img.mobile.width
								: project.img.width
						}
						height={
							project.img.mobile && width <= 1800
								? project.img.mobile.height
								: project.img.height
						}
						layout="intrinsic"
						// loading="lazy"
					/>
				</figure>
			</article>
		)
	);
});

export default Project;
