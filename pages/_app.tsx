import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Layout, Background, Footer } from '../components';
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
			<Head>
				<meta name="robots" content="noindex, nofollow" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
