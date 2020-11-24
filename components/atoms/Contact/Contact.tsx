import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface Contact {
	content: {
		mail: string;
		github: string;
		linkedin: string;
		siret: string;
	};
}

const Contact: FunctionComponent<Contact> = ({ content }) => {
	return (
		content && (
			<div className={styles.contact}>
				<a href={`mailto:${content.mail}`}>{content.mail}</a>

				<p>SIRET : {content.siret}</p>
			</div>
		)
	);
};

export default Contact;
