import styles from './styles.module.scss';

interface Info {
	title: string;
	content: {
		desc?: string;
	};
	contact: { mail: string; github: string; linkedin: string; siret: string };
}

const Info = ({ title, content, contact }: Info) => {
	return (
		<div className={styles.infoctn}>
			<h1>{title}</h1>
			<p className={styles.infoDesc}>{content.desc}</p>
			<div className={styles.social}>
				<p>Apprenez en plus sur </p>
				<a href={contact.linkedin} target="_blank">
					LinkedIn
				</a>
			</div>
			<div className={styles.social}>
				<p>Jetez un oeil à mon code sur </p>
				<a href={contact.github} target="_blank">
					GitHub
				</a>
			</div>
			<div className={styles.social}>
				<p>Demandez un devis (gratuit) ou parlez moi de votre projet</p>
				<a href={`mailto:${contact.mail}`}>{contact.mail}</a>
			</div>
		</div>
	);
};

export default Info;
