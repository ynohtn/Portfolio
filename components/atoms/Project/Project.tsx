import styles from './styles.module.scss';
import Image from 'next/image';

interface Project {
	project: { desc: string; name: string; techs: string[]; img: string };
}

const Project = ({ project }: Project) => {
	return (
		project && (
			<article className={` ${styles.projectCard}`}>
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
				<figure>
					<Image
						src={project.img}
						alt={project.name}
						width="1440"
						height="800"
						layout="intrinsic"
						loading="lazy"
					/>
				</figure>
			</article>
		)
	);
};

export default Project;
