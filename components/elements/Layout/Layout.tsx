import { FunctionComponent } from 'react';
import { Background } from '../../index';
import styles from './styles.module.scss';

const Layout: FunctionComponent = ({
	children
}: {
	children: React.ReactNode;
}) => {
	return <div className={`${styles.layout}`}>{children}</div>;
};

export default Layout;
