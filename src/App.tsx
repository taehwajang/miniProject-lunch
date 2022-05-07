import { Button } from '@mui/material';

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { nextFood } from './data/data';
import { SelectFood } from './component/selectFood';

const App = () => {
    const [count, setCount] = useState(1);
    // const [foodRandomIsOpen, setFoodRandomIsOpen] = useState(false);

    const foodRandom = nextFood[Math.floor(Math.random() * nextFood.length + count)];

    const [checkedFoods, setCheckedFoods] = useState<Array<String>>([]);
    // const [checkedFoodRandomIsOpen, setCheckedFoodRandomIsOpen] = useState(false);

    // const removeContent = useCallback(
    //     (e) => {
    //         const name = e.target.id;
    //         setCheckedFoods(checkedFoods.filter((e: string) => e !== name));
    //     },
    //     [checkedFoods]
    // );
    // const checkedResultFood = checkedFoods[Math.floor(Math.random() * checkedFoods.length + 1)];

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
                            <div
                                style={{
                                    fontSize: '30px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                전체 메뉴
                            </div>
                        </div>
                        {nextFood.map((food, idx) => {
                            return (
                                <FoodInfo key={idx}>
                                    <input
                                        type="checkbox"
                                        value={food.name}
                                        onChange={(e) => {
                                            e.target.checked ? setCheckedFoods([...checkedFoods, e.target.value]) : setCheckedFoods(checkedFoods.filter((item) => item !== e.target.value));
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
                    {/* <ResultFoodBox>
                        <div
                            style={{
                                fontSize: '30px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            점심 랜덤으로 고르기
                        </div>
                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{ height: '50px', width: '200px' }}
                            onClick={() => {
                                setFoodRandomIsOpen(!foodRandomIsOpen);
                                setCheckedFoodRandomIsOpen(false);
                                setCount(count);
                            }}
                        >
                            돌리기
                        </Button>
                        <h3>오늘의 점심은 ~!</h3>
                        <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'purple' }}>{foodRandomIsOpen === true ? foodRandom.name + ' - ' + foodRandom.kind : null}</div>
                    </ResultFoodBox> */}
                </div>
                <SelectFood data={nextFood} checkedFoods={checkedFoods} />
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
