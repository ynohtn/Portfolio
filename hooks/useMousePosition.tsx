import { useState, useEffect } from 'react';

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const updateMousePosition = (ev) => {
		const windowHalfX = window.innerWidth / 2;
		const windowHalfY = window.innerHeight / 2;
		setMousePosition({
			x: (ev.clientX - windowHalfX) / 100,
			y: (ev.clientY - windowHalfY) / 100
		});
	};

	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition);

		return () => window.removeEventListener('mousemove', updateMousePosition);
	}, []);

	return mousePosition;
};

export default useMousePosition;
