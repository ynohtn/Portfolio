import { AppProps } from 'next/app';
import { Seo, Header, Layout, Background, Footer } from '../components';
import '../styles/_globals.scss';
import data from '../data/data.json';

export default function App({ Component, pageProps }: AppProps) {
	const menu: { txt: string; url: string }[] = [
		{ txt: 'HOME', url: '#home' },
		{ txt: 'WORK', url: '#work' },
		{ txt: 'INFOS', url: '#info' }
	];

	return (
		<>
			<Seo />
			<Header menu={menu} />
			<Background />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{data.map(
				(section, i) =>
					section.contact && <Footer key={i} content={section.contact} />
			)}
		</>
	);
}
