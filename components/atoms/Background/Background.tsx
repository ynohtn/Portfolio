import { memo, useRef, useState } from 'react';
// import useMousePosition from '../../../hooks/useMousePosition';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Canvas, useFrame } from 'react-three-fiber';
// import { Stars, OrbitControls } from 'drei';
import styles from './styles.module.scss';

const Mesh = (props) => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.001));

	// TODO Buggy -> rotate mesh on scroll, working, but infinite warnings in console
	// useFrame(() => {
	//   gsap.to(mesh.current.rotation, {
	//     scrollTrigger: {
	//       trigger: "#trigger",
	//       start: "top top",
	//       end: "bottom top",
	//       markers: true,
	//       scrub: 1,
	//       toggleActions: "restart pause reverse pause"
	//     },
	//     x: 360,
	//     // y: 500,
	//     // z: 1000,
	//   });
	// });

	return (
		<>
			<mesh ref={mesh} {...props}>
				<icosahedronBufferGeometry args={[100, 10]} />
				<meshBasicMaterial color={'#ab87ff'} wireframe />
			</mesh>
		</>
	);
};

const Background = memo(() => {
	return (
		<div className={styles.background}>
			<Canvas colorManagement camera={{ position: [0, 0, 110], fov: 30 }}>
				<ambientLight intensity={0.3} />
				<pointLight position={[10, 10, 10]} />
				<Mesh position={[0, 12, 0]} />
				{/* <Stars />
        <OrbitControls /> */}
			</Canvas>
		</div>
	);
});

export default Background;
