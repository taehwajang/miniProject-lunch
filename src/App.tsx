import { Button, Input } from '@mui/material';

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './component/header';
import { ChineseFood, JapaneseFood, KoreanFood, snackFood, users, nextFood } from './data/data';

const App = () => {
    const [food, setFood] = useState('');

    // const nextFoodFilter = nextFood.filter((food, idx) => Math.floor(Math.random() * nextFood.length + 1));

    // const returnName = nextFood.map((food, idx) => {
    //     if (idx === Math.floor(Math.random() * nextFood.length + 1)) {
    //         return (
    //             <div key={idx}>
    //                 {idx + 1}.{food.name} - {food.kind}
    //             </div>
    //         );
    //     }
    //     return;
    // });
    const foodRandom = nextFood[Math.floor(Math.random() * nextFood.length + 1)];

    return (
        <Rayout>
            <Header />
            <Main>
                <div>
                    {nextFood.map((food, idx): any => {
                        return (
                            <FoodInfo key={idx}>
                                <div>{idx + 1} .</div>
                                <div>{food.name}</div>
                                <div>{food.kind}</div>
                            </FoodInfo>
                        );
                    })}
                </div>
                <>
                    <ResultFoodBox>
                        <p>점심 랜덤으로 고르기</p>
                        <Button variant="outlined" color="secondary" style={{ height: '50px', width: '200px' }}>
                            누르기
                        </Button>
                        <h2>
                            {foodRandom.id}. {foodRandom.name} -{foodRandom.kind}
                        </h2>
                    </ResultFoodBox>
                </>
            </Main>
        </Rayout>
    );
};
const ResultFoodBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
`;
const FoodInfo = styled.div`
    display: flex;
    gap: 15px;
`;

const Rayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;
