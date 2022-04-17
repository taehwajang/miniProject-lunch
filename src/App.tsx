import { Button } from '@mui/material';

import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import { nextFood } from './data/data';

const App = () => {
    const [count, setCount] = useState(1);
    const [foods, setFoods]: any = useState([]);
    const [foodRandomIsOpen, setFoodRandomIsOpen] = useState(false);

    const foodRandom = nextFood[Math.floor(Math.random() * nextFood.length + count)];

    const [checkedFoods, setCheckedFoods]: any = useState([]);
    const [checkedFoodRandomIsOpen, setCheckedFoodRandomIsOpen] = useState(false);

    const removeContent = useCallback(
        (e: any) => {
            const name = e.target.id;
            setCheckedFoods(checkedFoods.filter((e: any) => e !== name));
        },
        [checkedFoods]
    );
    const checkedResultFood = checkedFoods[Math.floor(Math.random() * checkedFoods.length + 1)];
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    color: 'purple',
                    margin: '  30px 0',
                }}
            >
                🍔🍕오늘 뭐 먹을래? 🍖🍗
            </div>
            <Rayout>
                <Main>
                    <div>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                            <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>전체 메뉴</div>
                        </div>
                        {nextFood.map((food, idx): any => {
                            return (
                                <FoodInfo key={idx}>
                                    <input
                                        type="checkbox"
                                        value={food.name}
                                        // checked={checkedFoods.some((checked: any) => checked === food)}
                                        onChange={(e) => {
                                            e.target.checked ? setCheckedFoods([...checkedFoods, e.target.value]) : setCheckedFoods(checkedFoods.filter((item: any) => item !== e.target.value));
                                        }}
                                    ></input>
                                    <div style={{ color: 'purple', fontSize: '20px' }}>{food.name}</div>
                                    <div>{food.kind}</div>
                                </FoodInfo>
                            );
                        })}
                    </div>
                </Main>
                <div>
                    <ResultFoodBox>
                        <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>점심 랜덤으로 고르기</div>
                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{ height: '50px', width: '200px' }}
                            onClick={() => {
                                setFoodRandomIsOpen(!foodRandomIsOpen);
                                setCount(count);
                            }}
                        >
                            돌리기
                        </Button>
                        <h3>오늘의 점심은 ~!</h3>
                        <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'purple' }}>{foodRandomIsOpen === true ? foodRandom.name + ' - ' + foodRandom.kind : null}</div>
                    </ResultFoodBox>
                </div>
                <ResultFoodBox>
                    <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>선택한 메뉴만 고르기</div>
                    <Button
                        variant="outlined"
                        style={{ width: '150px', height: '50px' }}
                        onClick={() => {
                            setCheckedFoodRandomIsOpen(!checkedFoodRandomIsOpen);
                        }}
                    >
                        돌리기
                    </Button>
                    <h3>오늘의 점심은 ~!</h3>
                    <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>{checkedFoodRandomIsOpen === true ? checkedResultFood : null}</div>
                    <div>
                        {checkedFoods.map((food: any, idx: number) => {
                            return (
                                <div id={food.id} key={idx} style={{ display: 'flex', margin: ' 10px 0' }}>
                                    <div>{food}</div>
                                </div>
                            );
                        })}
                    </div>
                </ResultFoodBox>
            </Rayout>
        </div>
    );
};

const ResultFoodBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Main = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
`;
const FoodInfo = styled.label`
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Rayout = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 30px;
`;

export default App;
