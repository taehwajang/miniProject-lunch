import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './component/header';
import Navgation from './component/navgation';
import { nextFood } from './data/data';

interface foodRandomType {
	name: string;
	kind: string;
}
const App = () => {
	const [foodRandom, setFoodRandom] = useState<foodRandomType | null>(null);
	const [checkedFoods, setCheckedFoods] = useState<string[]>([]);

	return (
		<div>
			<Header />
			<Section id="menu">
				<StyledGrid>
					<GridItem className="korean">
						<div>
							<h2 data-heading="한식">한식</h2>
						</div>
					</GridItem>
					<GridItem className="chinese">
						<div>
							<h2 data-heading="중식">중식</h2>
						</div>
					</GridItem>
					<GridItem className="japanese">
						<div>
							<h2 data-heading="일식">일식</h2>
						</div>
					</GridItem>
					<GridItem className="snack-food">
						<div>
							<h2 data-heading="분식">분식</h2>
						</div>
					</GridItem>
					<GridItem className="asian">
						<div>
							<h2 data-heading="아시안">아시안</h2>
						</div>
					</GridItem>
					<GridItem className="fast-food">
						<div>
							<h2 data-heading="패스트 푸드">패스트 푸드</h2>
						</div>
					</GridItem>
				</StyledGrid>
			</Section>
			<Section id="random">
				<ResultFoodBox>
					<div
						style={{
							fontSize: '3rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '3rem',
							color: '#066163',
						}}
					>
						점심 랜덤으로 고르기
					</div>
					<Button
						color="success"
						variant="outlined"
						style={{ height: '50px', width: '200px' }}
						onClick={() => {
							setFoodRandom(nextFood[Math.floor(Math.random() * nextFood.length)]);
						}}
					>
						돌리기
					</Button>
					<h2>오늘의 점심은 ~!</h2>
					<div style={{ fontSize: '25px', lineHeight: '25px', height: '25px', color: '#066163', display: 'flex', width: '100%', justifyContent: 'center' }}>
						{foodRandom && (
							<>
								<div
									style={{
										display: 'flex',
										flex: '0 0 300px',
										justifyContent: 'center',
									}}
								>
									{foodRandom.name}
								</div>
								<div
									style={{
										display: 'flex',
										flex: '0 0 auto',
										justifyContent: 'center',
									}}
								>
									-
								</div>
								<div
									style={{
										display: 'flex',
										flex: '0 0 300px',
										justifyContent: 'center',
									}}
								>
									{foodRandom.kind}
								</div>
							</>
						)}
					</div>
				</ResultFoodBox>
			</Section>
			<Section id="pick">
				<ResultFoodBox style={{ marginLeft: '2rem' }}>
					<div style={{ marginTop: '150px' }}>
						<div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
							<div
								style={{
									fontSize: '3rem',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: '3rem',
									color: '#066163',
								}}
							>
								전체 메뉴
							</div>
						</div>
						<div style={{ height: '600px', overflowY: 'scroll', marginLeft: '7rem', borderTop: 'linear-gradient(145deg, #323232, #3c3c3c)' }}>
							<FormControlLabel
								label="전체 선택"
								control={
									<Checkbox
										checked={nextFood.length === checkedFoods.length}
										indeterminate={nextFood.length !== checkedFoods.length}
										onChange={(e) => (e.currentTarget.checked ? setCheckedFoods(nextFood.map((i) => i.name)) : setCheckedFoods([]))}
									/>
								}
							/>
							<Grid container spacing={2} columns={16}>
								{nextFood.map((food) => {
									return (
										<Grid key={food.id} item xs={8} justifyContent="center">
											<FormControlLabel
												label={`${food.name} - ${food.kind}`}
												control={
													<Checkbox
														checked={checkedFoods.includes(food.name)}
														onChange={(e) =>
															e.currentTarget.checked ? setCheckedFoods([...checkedFoods, food.name]) : setCheckedFoods(checkedFoods.filter((i) => i !== food.name))
														}
													/>
												}
											/>
										</Grid>
									);
								})}
							</Grid>
						</div>
					</div>
				</ResultFoodBox>
				<ResultFoodBox style={{ marginRight: '2rem' }}>
					<div
						style={{
							fontSize: '3rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '3rem',
							color: '#066163',
						}}
					>
						선택한 메뉴만 고르기
					</div>
					<Button
						color="success"
						variant="outlined"
						style={{ height: '50px', width: '200px' }}
						onClick={() => {
							if (checkedFoods.length === 0) return alert('메뉴를 선택해주세요.');
							let random = checkedFoods[Math.floor(Math.random() * checkedFoods.length)];
							if (foodRandom?.name === random) {
								// 재귀함수 이용
							}
							setFoodRandom(nextFood.find((i) => i.name === random) as foodRandomType);
						}}
					>
						돌리기
					</Button>
					<h2>오늘의 점심은 ~!</h2>
					<div style={{ fontSize: '25px', lineHeight: '25px', height: '25px', color: '#066163', display: 'flex', width: '100%', justifyContent: 'center' }}>
						{foodRandom && (
							<>
								<div
									style={{
										display: 'flex',
										flex: '0 0 300px',
										justifyContent: 'center',
									}}
								>
									{foodRandom.name}
								</div>
								<div
									style={{
										display: 'flex',
										flex: '0 0 auto',
										justifyContent: 'center',
									}}
								>
									-
								</div>
								<div
									style={{
										display: 'flex',
										flex: '0 0 300px',
										justifyContent: 'center',
									}}
								>
									{foodRandom.kind}
								</div>
							</>
						)}
					</div>
				</ResultFoodBox>
			</Section>
			<Navgation />
		</div>
	);
};

const ResultFoodBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	justify-content: center;
`;
const Section = styled.section`
	/* margin-top: -100px; */
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	gap: 1.2rem;
`;
const GridItem = styled.article`
	cursor: pointer;
	background-color: #ffffff;
	margin: 0 0 20px;
	margin: 0;
	border-radius: 2px;
	transition: 0.3s ease;
	width: 400px;
	height: 300px;
	display: grid;
	justify-items: center;
	align-items: center;

	:hover {
		box-shadow: 0 4px 8px 4px rgb(56 56 56 / 20%), 0 6px 12px 4px rgb(56 56 56 / 20%);
	}
	:active {
		box-shadow: none;
		transform-origin: center;
		transform: scale(0.95);
	}
	h2 {
		position: relative;
		margin: 0;
		color: transparent;
		font-family: 'Black Han Sans', sans-serif;
		font-size: 5rem;
		line-height: 5rem;
		font-weight: lighter;
		word-break: keep-all;
		text-align: center;
		user-select: none;
		&:before {
			content: attr(data-heading);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			color: rgb(255 255 255 / 90%);
			z-index: 2;
			overflow: hidden;
			text-shadow: 0 0 6px rgb(56 56 56);
		}
	}
	&.korean {
		background-image: url('http://www.hotelrestaurant.co.kr/data/photos/20180205/art_15175330519518_43b250.bmp');
		background-repeat: no-repeat;
		background-size: cover;
	}
	&.chinese {
		background-image: url('http://www.sommeliertimes.com/news/photo/202104/18627_41624_2318.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	&.japanese {
		background-image: url('https://us.123rf.com/450wm/tongdang/tongdang1205/tongdang120500188/13686711-%EC%B4%88%EB%B0%A5-%EC%A2%85%EB%A5%98%EB%A5%BC-%ED%8F%AC%ED%95%A8%ED%95%9C-%EC%9D%BC%EC%8B%9D-%EC%9A%94%EB%A6%AC.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	&.snack-food {
		background-image: url('http://cdn.ksilbo.co.kr/news/photo/202008/769877_439211_1542.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	&.asian {
		background-image: url('https://recipe1.ezmember.co.kr/cache/recipe/2020/09/06/ee00d6e59def943bc0eb0354fb58a00d1.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	&.fast-food {
		background-image: url('https://www.korea.kr/newsWeb/resources/attaches/2016.10/13/00775e4645d4a3cc836290521b9e3998.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	& > div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: brightness(0.9) blur(4px);
		-webkit-backdrop-filter: brightness(0.9) blur(4px);
		mix-blend-mode: luminosity;
	}
`;
export default App;
