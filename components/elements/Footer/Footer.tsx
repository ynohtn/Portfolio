import styles from './styles.module.scss';
import { Contact } from '../../index';

interface ContactInfo {
	content: {
		mail: string;
		github: string;
		linkedin: string;
		siret: string;
	};
}

const Footer = (content: ContactInfo) => {
	return (
		<footer className={styles.footer}>
			<Contact content={content.content} />
		</footer>
	);
};

export default Footer;
