// import {
// 	GetStaticProps
// 	// GetStaticPaths,
//   // GetServerSideProps
// } from 'next';
import { Section } from '../components';
import styles from '../styles/Home.module.scss';
import data from '../data/data.json';

export default function Home() {
	// console.log(data);

	return (
		<>
			<div className={styles.container}>
				{data.map(
					(section, i) =>
						!section.noSection && (
							<Section
								key={i}
								sectionType={section.type}
								title={section.title}
								content={section.content}
								contact={section.contact}
								projects={section.projects}
							/>
						)
				)}
			</div>
		</>
	);
}

// export const getStaticProps: GetStaticProps = async (context) => {
// 	// const res = await fetch('')
// 	// const data: string = await res.json()
// 	// console.log(data)
// 	return {
// 		props: {
// 			// data
// 		}
// 	};
// };
