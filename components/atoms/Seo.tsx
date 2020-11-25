import Head from 'next/head';

const Seo = () => (
	<Head>
		{/*Primary Meta Tags*/}
		<title>{"Anthony Reynaud - Développeur Freelance"}</title>

		<meta name="title" content={"Anthony Reynaud - Développeur Freelance"} />
		<meta name="description" content={"Développeur JavaScript pour vos projets ou missions React.js, TypeScript, Next.js et WebGL"} />

		{/* Open Graph / Facebook */}
		<meta
			property="og:url"
			content={`https://portfolio.ynohtn.vercel.app`}
		/>
		<meta property="og:type" content="website" />
		<meta property="og:title" content={"Anthony Reynaud - Développeur Freelance"} />
		<meta property="og:description" content={"Développeur JavaScript pour vos projets ou missions React.js, TypeScript, Next.js et WebGL"} />
		<meta property="og:image" content={"/img/seo.png"} />

		{/* Twitter */}
		<meta
			property="twitter:url"
			content={`https://portfolio.ynohtn.vercel.app`}
		/>
		<meta property="twitter:card" content={"/img/seo.png"} />
		<meta property="twitter:title" content={"Anthony Reynaud - Développeur Freelance"} />
		<meta property="twitter:description" content={"Développeur JavaScript pour vos projets ou missions React.js, TypeScript, Next.js et WebGL"} />
    <meta property="twitter:image" content={"/img/seo.png"} />
    
    <link rel="icon" href="/favicon.ico" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
	</Head>
);

export default Seo;