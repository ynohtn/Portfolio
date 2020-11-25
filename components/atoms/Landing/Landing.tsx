import styles from './styles.module.scss';
import { Scrambler } from 'react-text-scrambler';
interface Landing {
	landingContent: {
		name?: string;
		job?: string;
		desc?: string;
	};
}

const Landing = ({ landingContent }: Landing) => {
	const characters = '+/\\_-#@$£.&><';
	return (
		<div className={styles.landing}>
			<h1>
				<Scrambler
					characters={characters}
					renderIn={500}
					text={landingContent.name}
				/>
			</h1>
			<h2>
				<Scrambler
					characters={characters}
					renderIn={500}
					text={landingContent.job}
				/>
			</h2>
		</div>
	);
};

export default Landing;
