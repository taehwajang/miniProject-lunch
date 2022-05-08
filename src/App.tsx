import { Button } from '@mui/material';

import React, { useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { nextFood } from './data/data';
import { SelectFood } from './component/selectFood';

interface FoodArrProps {
    name?: string;
    kind?: string;
    foodName?: string;
    newFoodName?: string;
    foodKind?: string;
    newFoodKind?: string;
}
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
    const [foodName, setFoodName] = useState<string>('');
    const [foodKind, setFoodKind] = useState<string>('');
    const [foodArr, setFoodArr] = useState<FoodArrProps[]>(nextFood);
    const makeFoods = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'foodName') {
            setFoodName(e.target.value);
        } else {
            setFoodKind(e.target.value);
        }
    };
    console.log(foodArr);

    const addFood = () => {
        const newArr = { newFoodName: foodName, newFoodKind: foodKind };
        setFoodArr([...nextFood, newArr]);
    };

    return (
        <div>
            <div>
                <input type="text" name="foodName" placeholder="상호명을 입력해주세요" onChange={makeFoods} />
                <input type="text" name="foodKind" placeholder="종류를 입력해주세요" onChange={makeFoods} />
                <button onClick={addFood}>추가하기</button>
                {foodArr?.map((e) => {
                    return (
                        <div>
                            {e.foodName}
                            {e.newFoodName}
                        </div>
                    );
                })}
            </div>
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
                        {foodArr.map((food, idx) => {
                            return (
                                <FoodInfo key={idx}>
                                    <input
                                        type="checkbox"
                                        value={food.name}
                                        onChange={(e) => {
                                            e.target.checked ? setCheckedFoods([...checkedFoods, e.target.value]) : setCheckedFoods(checkedFoods.filter((item) => item !== e.target.value));
                                        }}
                                    ></input>
                                    <div style={{ color: 'purple', fontSize: '20px' }}>{food.name ? food.name : null}</div>
                                    <div>{food.kind ? food.kind : null}</div>
                                    <div style={{ color: 'purple', fontSize: '20px' }}>{food.newFoodName ? food.newFoodName : null}</div>
                                    <div>{food.newFoodKind ? food.newFoodKind : null}</div>
                                </FoodInfo>
                            );
                        })}
                    </div>
                </Main>
                {/* <div>
                    <ResultFoodBox>
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
                                // setFoodRandomIsOpen(!foodRandomIsOpen);
                                // setCheckedFoodRandomIsOpen(false);
                                // setCount(count);
                            }}
                        >
                            돌리기
                        </Button>
                        <h3>오늘의 점심은 ~!</h3>
                        <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'purple' }}>{foodRandomIsOpen === true ? foodRandom.name + ' - ' + foodRandom.kind : null}</div>
                    </ResultFoodBox>
                </div> */}
                <SelectFood data={foodArr} checkedFoods={checkedFoods} />
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
