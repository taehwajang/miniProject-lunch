import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<S.Header>
			<S.HeaderTitle>오늘 뭐 먹을래?</S.HeaderTitle>
		</S.Header>
	);
};

const S = {
	Header: styled.div`
		width: 100%;
		height: 150px;
		box-sizing: border-box;
		background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 75%, rgb(255 255 255 / 0%) 100%);
		position: fixed;
		z-index: 9999;
		top: 0;
	`,
	HeaderTitle: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px 0;
		font-size: 3rem;
		color: transparent;
		background-image: url('https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg');
		background-size: cover;
		background-position: center;
		background-clip: text;
		text-emphasis-style: circle;
		-webkit-background-clip: text;
		-webkit-text-emphasis-style: circle;
	`,
};
export default Header;
