import { Landing, Projects, Slide, Info } from '../../index';
import styles from './styles.module.scss';

interface Section {
	sectionType: string;
	title?: string;
	content?: { name?: string; job?: string; desc?: string };
	projects?: { desc: string; name: string; techs: string[]; img: string }[];
	contact?: { mail: string; github: string; linkedin: string; siret: string };
}

const Section = ({
	sectionType,
	title,
	projects,
	content,
	contact
}: Section) => (
	<section id={`${sectionType}`} className={`${styles.section}`}>
		{sectionType === 'home' && <Landing landingContent={content} />}

		{sectionType === 'slide' && <Slide content={content} title={title} />}

		{sectionType === 'work' && <Projects content={projects} title={title} />}

		{sectionType === 'info' && (
			<Info title={title} content={content} contact={contact} />
		)}
	</section>
);

export default Section;
