import styles from './styles.module.scss';
import { default as NextLink } from 'next/link';

interface Menu {
	menu: { txt: string; url: string }[];
}

const Header = ({ menu }: Menu) => (
	<header className={styles.header}>
		<Nav menu={menu} />
	</header>
);

const Nav = ({ menu }: Menu) =>
	menu && (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{menu.map((menuLink, index) => (
					<NavItem menuLink={menuLink} key={index} />
				))}
			</ul>
		</nav>
	);

const NavItem = ({ menuLink }) => (
	<li>
		<NextLink href={`${menuLink.url}`}>
			<a>{menuLink.txt}</a>
		</NextLink>
	</li>
);

export default Header;
