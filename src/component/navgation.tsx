import React, { useState } from 'react';
import styled from 'styled-components';
const Navgation = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Menu>
			<div className="wrap">
				<div className={`button ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
					<img className="icon" src="https://cdn-icons-png.flaticon.com/256/7295/7295353.png" alt="Temp" />
				</div>
				<a className="btn" href="#pick">
					<div className="menu menu-1">
						<img className="icon" src="https://cdn-icons-png.flaticon.com/256/7295/7295241.png" alt="Temp" />
					</div>
				</a>
				<a className="btn" href="#random">
					<div className="menu menu-2">
						<img className="icon" src="https://cdn-icons-png.flaticon.com/256/7295/7295289.png" alt="Temp" />
					</div>
				</a>
				<a className="btn" href="#menu">
					<div className="menu menu-3">
						<img className="icon" src="https://cdn-icons-png.flaticon.com/256/7295/7295534.png" alt="Temp" />
					</div>
				</a>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
				<filter id="gooey">
					<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
					<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="contrast" />
					<feBlend in="SourceGraphic" in2="contrast" />
				</filter>
			</svg>
			{isActive && <BGWrap onClick={() => setIsActive(false)} />}
		</Menu>
	);
};
export default Navgation;

const Menu = styled.nav`
	body {
		background: #1c1c1c;
		padding: 2rem 2rem;
	}
	.wrap {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		width: 5.3rem;
		height: 5.3rem;
		filter: url('#gooey');
		z-index: 100001;
		/* position: relative; */
	}
	.button,
	.menu {
		position: absolute;
		top: 0;
		left: 0;
		transition: 0.7s;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.button {
		width: 5.3rem;
		height: 5.3rem;
		color: #1e1e1e;
		font-weight: 700;
		font-size: 1.7rem;
		cursor: pointer;
		background: linear-gradient(145deg, #323232, #3c3c3c);
		box-shadow: 5px 5px 5px #272727, -5px -5px -5px #494949;
		&.active {
			transform: rotate(90deg);
		}
		.icon {
			width: 2.4rem;
			height: 2.4rem;
		}
	}
	.menu {
		width: 4.5rem;
		height: 4.5rem;
		z-index: -1;
		transform: translate(0, 0) scale(0);
		.icon {
			width: 1.8rem;
			height: 1.8rem;
		}
	}
	.button.active ~ a .menu-1 {
		background-color: #b980f0;
		transition-delay: 0.1s;
		transform: translate(0.5rem, -4.2rem) scale(1);
	}

	.button.active ~ a .menu-2 {
		background-color: #fe9898;
		transition-delay: 0.2s;
		transform: translate(0.5rem, -8.4rem) scale(1);
	}
	.button.active ~ a .menu-3 {
		background-color: #f5e79d;
		transition-delay: 0.3s;
		transform: translate(0.5rem, -12.6rem) scale(1);
	}
`;
const BGWrap = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10000;
`;
